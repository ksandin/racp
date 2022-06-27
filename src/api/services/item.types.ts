import * as zod from "zod";

export type Item = zod.infer<typeof itemType>;

export const itemId = zod.number();

export const itemType = zod.object({
  Id: zod.number(),
  AegisName: zod.string(),
  Name: zod.string(),
  Type: zod.string().optional(),
  SubType: zod.string().optional(),
  Buy: zod.number().optional(),
  Sell: zod.number().optional(),
  Weight: zod.number().optional(),
  Attack: zod.number().optional(),
  MagicAttack: zod.number().optional(),
  Defense: zod.number().optional(),
  Range: zod.number().optional(),
  Slots: zod.number().optional(),
  Jobs: zod.record(zod.string(), zod.boolean()).optional(),
  Classes: zod.record(zod.string(), zod.boolean()).optional(),
  Gender: zod.string().optional(),
  Locations: zod.record(zod.string(), zod.boolean()).optional(),
  WeaponLevel: zod.number().optional(),
  ArmorLevel: zod.number().optional(),
  EquipLevelMin: zod.number().optional(),
  EquipLevelMax: zod.number().optional(),
  Refineable: zod.boolean().optional(),
  View: zod.number().optional(),
  AliasName: zod.string().optional(),
  Flags: zod
    .object({
      BuyingStore: zod.boolean(),
      DeadBranch: zod.boolean(),
      Container: zod.boolean(),
      UniqueId: zod.boolean(),
      BindOnEquip: zod.boolean(),
      DropAnnounce: zod.boolean(),
      NoConsume: zod.boolean(),
      DropEffect: zod.string(),
    })
    .partial()
    .optional(),
  Delay: zod
    .object({
      Duration: zod.number(),
      Status: zod.string(),
    })
    .partial()
    .optional(),
  Stack: zod
    .object({
      Amount: zod.number(),
      Inventory: zod.boolean(),
      Cart: zod.boolean(),
      Storage: zod.boolean(),
      GuildStorage: zod.boolean(),
    })
    .partial()
    .optional(),
  NoUse: zod
    .object({
      Override: zod.number(),
      Sitting: zod.boolean(),
    })
    .partial()
    .optional(),
  Trade: zod
    .object({
      Override: zod.number(),
      NoDrop: zod.boolean(),
      NoTrade: zod.boolean(),
      TradePartner: zod.boolean(),
      NoSell: zod.boolean(),
      NoCart: zod.boolean(),
      NoStorage: zod.boolean(),
      NoGuildStorage: zod.boolean(),
      NoMail: zod.boolean(),
      NoAuction: zod.boolean(),
    })
    .partial()
    .optional(),
  Script: zod.string().optional(),
  EquipScript: zod.string().optional(),
  UnEquipScript: zod.string().optional(),
});

export const itemSearchType = itemType.partial();

export const itemMeta = zod.object({
  genders: zod.array(zod.string()),
  classes: zod.array(zod.string()),
  jobs: zod.array(zod.string()),
  locations: zod.array(zod.string()),
});
