import * as zod from "zod";
import { ZodType } from "zod";
import { isZodType } from "./zod/isZodType";

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

export interface ZodMatcher<Entries extends ZodMatcherEntries> {
  add<
    Name extends string,
    Target extends ZodType,
    Argument extends ZodType,
    Matcher extends ZodMatcherEntry<Target, Argument>
  >(
    name: Name,
    target: Target,
    argument: Argument,
    fn: ZodMatcherFn<Target, Argument>
  ): ZodMatcher<Entries & Record<Name, Matcher>>;

  match<Name extends keyof Entries>(
    target: zod.infer<Entries[Name]["target"]>,
    argument: ZodMatchPayload<Name, zod.infer<Entries[Name]["argument"]>>
  ): boolean;

  createPayloadTypeFor<Argument extends ZodType>(
    argument: Argument
  ): ZodMatcherArgumentTypeFor<Entries, zod.infer<Argument>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ZodMatchPayload<MatcherName extends keyof any, Argument> {
  matcher: MatcherName;
  value: Argument;
}

export type ZodMatcherArgumentTypeFor<
  Matchers extends ZodMatcherEntries,
  Argument
> = ZodType<
  Values<{
    [K in keyof Matchers]: zod.infer<Matchers[K]["argument"]> extends Argument
      ? ZodMatchPayload<K, Argument>
      : never;
  }>
>;

type Values<T> = T[keyof T];

export function createZodMatcher() {
  function create<Entries extends ZodMatcherEntries>(
    entries: Entries
  ): ZodMatcher<Entries> {
    return {
      add(name, target, argument, fn) {
        return create({
          ...entries,
          [name]: {
            target,
            argument,
            fn,
          },
        });
      },

      match(target, argument) {
        const entry = entries[argument.matcher];
        return entry.fn(target, argument.value);
      },

      createPayloadTypeFor(argumentType) {
        const argumentTypes = Object.entries(entries)
          .filter(([, entry]) => isZodType(entry.argument, argumentType))
          .map(([name, entry]) =>
            zod.object({ matcher: zod.literal(name), value: entry.argument })
          );
        return zod.union(argumentTypes as any);
      },
    };
  }
  return create({});
}
