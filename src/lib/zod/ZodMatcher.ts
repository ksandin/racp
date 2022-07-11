import * as zod from "zod";
import { ZodType } from "zod";
import { typedKeys } from "../typedKeys";
import { isZodType } from "./isZodType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ZodMatcherEntries = Record<string, ZodMatcherEntry<any, any>>;

export interface ZodMatcherEntry<
  Target extends ZodType,
  Argument extends ZodType
> {
  target: Target;
  argument: Argument;
  fn: ZodMatcherFn<Target, Argument>;
}

export type ZodMatcherFn<Target extends ZodType, Argument extends ZodType> = (
  target: zod.infer<Target>,
  argument: zod.infer<Argument>
) => boolean;

export interface ZodMatchPayload<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MatcherName extends keyof any = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Argument = any
> {
  matcher: MatcherName;
  value: Argument;
}

export type ZodMatchPayloadFor<
  Matchers extends ZodMatcherEntries,
  Argument
> = Values<{
  [K in keyof Matchers]: zod.infer<Matchers[K]["argument"]> extends Argument
    ? ZodMatchPayload<K, Argument>
    : never;
}>;

export class ZodMatcher<Entries extends ZodMatcherEntries = ZodMatcherEntries> {
  constructor(public entries: Entries) {}
  add<Name extends string, Target extends ZodType, Argument extends ZodType>(
    name: Name,
    target: Target,
    argument: Argument,
    fn: ZodMatcherFn<Target, Argument>
  ) {
    return new ZodMatcher({
      ...this.entries,
      [name]: {
        target,
        argument,
        fn,
      },
    } as Entries & Record<Name, ZodMatcherEntry<Target, Argument>>);
  }

  match<Name extends keyof Entries>(
    target: zod.infer<Entries[Name]["target"]>,
    argument: ZodMatchPayload<Name, zod.infer<Entries[Name]["argument"]>>
  ): boolean {
    const entry = this.entries[argument.matcher];
    return entry.fn(target, argument.value);
  }
}

export function createZodMatcher() {
  return new ZodMatcher({});
}

export function createPayloadTypeFor<
  Matcher extends ZodMatcher,
  Argument extends ZodType
>(
  matcher: Matcher,
  argumentType: Argument
): ZodType<ZodMatchPayloadFor<Matcher["entries"], zod.infer<Argument>>> {
  const payloadTypes = Object.entries(matcher.entries)
    .filter(([, entry]) => isZodType(entry.argument, argumentType))
    .map(([name, entry]) =>
      zod.object({ matcher: zod.literal(name), value: entry.argument })
    );

  if (payloadTypes.length === 0) {
    throw new Error(
      `Matcher contains no entries matching given argument type ${argumentType}`
    );
  }

  return payloadTypes.length === 1
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (payloadTypes[0] as any)
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      zod.union(payloadTypes as any);
}

export function createEntitySearch<
  Matcher extends ZodMatcher,
  EntityType extends ZodType
>(matcher: Matcher, entityType: EntityType) {
  type Entity = zod.infer<EntityType>;
  type Payload = EntitySearchPayload<Matcher["entries"], Entity>;
  const payloadType = zod.number() as unknown as ZodType<Payload>;
  return {
    for:
      (payload: Payload) =>
      (entity: Entity): boolean =>
        typedKeys(payload).every((key) =>
          matcher.match(entity[key], payload[key] as any)
        ),
    payloadType,
  };
}

export type EntitySearchPayload<
  Entries extends ZodMatcherEntries,
  Entity
> = Partial<{
  [K in KeysForType<
    Entity,
    zod.infer<Values<Entries>["argument"]>
  >]: ZodMatchPayloadFor<Entries, Entity[K]>;
}>;

export type Values<T> = T[keyof T];

export type KeysForType<T, S> = Values<{
  [K in keyof T]: T[K] extends S ? K : never;
}>;