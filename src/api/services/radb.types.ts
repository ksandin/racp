/*
 * DO NOT EDIT THIS FILE MANUALLY
 * This file was generated by a tool.
 * Rerun yarn codegen to regenerate this file.
 */
export interface Tables {
  acc_reg_num: AccRegNum;
  acc_reg_str: AccRegStr;
  achievement: Achievement;
  atcommandlog: Atcommandlog;
  auction: Auction;
  barter: Barter;
  bonus_script: BonusScript;
  branchlog: Branchlog;
  buyingstore_items: BuyingstoreItems;
  buyingstores: Buyingstores;
  cart_inventory: CartInventory;
  cashlog: Cashlog;
  char: Char;
  char_reg_num: CharRegNum;
  char_reg_str: CharRegStr;
  charlog: Charlog;
  chatlog: Chatlog;
  clan: Clan;
  clan_alliance: ClanAlliance;
  db_roulette: DbRoulette;
  elemental: Elemental;
  feedinglog: Feedinglog;
  friends: Friends;
  global_acc_reg_num: GlobalAccRegNum;
  global_acc_reg_str: GlobalAccRegStr;
  guild: Guild;
  guild_alliance: GuildAlliance;
  guild_castle: GuildCastle;
  guild_expulsion: GuildExpulsion;
  guild_member: GuildMember;
  guild_position: GuildPosition;
  guild_skill: GuildSkill;
  guild_storage: GuildStorage;
  guild_storage_log: GuildStorageLog;
  homunculus: Homunculus;
  hotkey: Hotkey;
  interlog: Interlog;
  inventory: Inventory;
  ipbanlist: Ipbanlist;
  login: Login;
  loginlog: Loginlog;
  mail: Mail;
  mail_attachments: MailAttachments;
  mapreg: Mapreg;
  market: Market;
  memo: Memo;
  mercenary: Mercenary;
  mercenary_owner: MercenaryOwner;
  mvplog: Mvplog;
  npclog: Npclog;
  party: Party;
  pet: Pet;
  picklog: Picklog;
  quest: Quest;
  sales: Sales;
  sc_data: ScData;
  skill: Skill;
  skill_homunculus: SkillHomunculus;
  skillcooldown: Skillcooldown;
  storage: Storage;
  vending_items: VendingItems;
  vendings: Vendings;
  zenylog: Zenylog;
}
export interface AccRegNum {
  account_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface AccRegStr {
  account_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface Achievement {
  char_id?: number;
  completed: Date | null;
  count1?: number;
  count10?: number;
  count2?: number;
  count3?: number;
  count4?: number;
  count5?: number;
  count6?: number;
  count7?: number;
  count8?: number;
  count9?: number;
  id: string;
  rewarded: Date | null;
}
export interface Atcommandlog {
  account_id?: number;
  atcommand_date: Date;
  atcommand_id?: number;
  char_id?: number;
  char_name?: string;
  command?: string;
  map?: string;
}
export interface Auction {
  attribute?: number;
  auction_id?: string;
  buyer_id?: number;
  buyer_name?: string;
  buynow?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  enchantgrade?: number;
  hours?: number;
  item_name?: string;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  price?: number;
  refine?: number;
  seller_id?: number;
  seller_name?: string;
  timestamp?: number;
  type?: number;
  unique_id?: string;
}
export interface Barter {
  amount: number;
  index: number;
  name?: string;
}
export interface BonusScript {
  char_id: number;
  flag?: number;
  icon?: number;
  script: string;
  tick?: string;
  type?: number;
}
export interface Branchlog {
  account_id?: number;
  branch_date: Date;
  branch_id?: number;
  char_id?: number;
  char_name?: string;
  map?: string;
}
export interface BuyingstoreItems {
  amount: number;
  buyingstore_id: number;
  index: number;
  item_id: number;
  price: number;
}
export interface Buyingstores {
  account_id: number;
  autotrade: number;
  body_direction?: string;
  char_id: number;
  head_direction?: string;
  id: number;
  limit: number;
  map: string;
  sex?: number;
  sit?: string;
  title: string;
  x: number;
  y: number;
}
export interface CartInventory {
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  char_id?: number;
  enchantgrade?: number;
  equip?: number;
  expire_time?: number;
  id?: number;
  identify?: number;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  unique_id?: string;
}
export interface Cashlog {
  amount?: number;
  cash_type?: number;
  char_id?: number;
  id?: number;
  map?: string;
  time: Date;
  type?: number;
}
export interface Char {
  account_id?: number;
  agi?: number;
  ap?: number;
  base_exp?: string;
  base_level?: number;
  body?: number;
  char_id?: number;
  char_num?: number;
  child?: number;
  clan_id?: number;
  class?: number;
  clothes_color?: number;
  con?: number;
  crt?: number;
  delete_date?: number;
  dex?: number;
  elemental_id?: number;
  fame?: number;
  father?: number;
  font?: number;
  guild_id?: number;
  hair?: number;
  hair_color?: number;
  head_bottom?: number;
  head_mid?: number;
  head_top?: number;
  homun_id?: number;
  hotkey_rowshift?: number;
  hotkey_rowshift2?: number;
  hp?: number;
  int?: number;
  inventory_slots?: number;
  job_exp?: string;
  job_level?: number;
  karma?: number;
  last_login: Date | null;
  last_map?: string;
  last_x?: number;
  last_y?: number;
  luk?: number;
  manner?: number;
  max_ap?: number;
  max_hp?: number;
  max_sp?: number;
  mother?: number;
  moves?: number;
  name?: string;
  online?: number;
  option?: number;
  partner_id?: number;
  party_id?: number;
  pet_id?: number;
  pow?: number;
  rename?: number;
  robe?: number;
  save_map?: string;
  save_x?: number;
  save_y?: number;
  sex: number;
  shield?: number;
  show_equip?: number;
  skill_point?: number;
  sp?: number;
  spl?: number;
  sta?: number;
  status_point?: number;
  str?: number;
  title_id?: number;
  trait_point?: number;
  unban_time?: number;
  uniqueitem_counter?: number;
  vit?: number;
  weapon?: number;
  wis?: number;
  zeny?: number;
}
export interface CharRegNum {
  char_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface CharRegStr {
  char_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface Charlog {
  account_id?: number;
  agi?: number;
  char_msg?: string;
  char_num?: number;
  dex?: number;
  hair?: number;
  hair_color?: number;
  id?: string;
  int?: number;
  luk?: number;
  name?: string;
  str?: number;
  time: Date;
  vit?: number;
}
export interface Chatlog {
  dst_charname?: string;
  id?: string;
  message?: string;
  src_accountid?: number;
  src_charid?: number;
  src_map?: string;
  src_map_x?: number;
  src_map_y?: number;
  time: Date;
  type?: number;
  type_id?: number;
}
export interface Clan {
  clan_id?: number;
  mapname?: string;
  master?: string;
  max_member?: number;
  name?: string;
}
export interface ClanAlliance {
  alliance_id?: number;
  clan_id?: number;
  name?: string;
  opposition?: number;
}
export interface DbRoulette {
  amount?: number;
  flag?: number;
  index?: number;
  item_id: number;
  level: number;
}
export interface Elemental {
  aspd?: number;
  atk1?: number;
  atk2?: number;
  char_id: number;
  class?: number;
  def?: number;
  ele_id?: number;
  flee?: number;
  hit?: number;
  hp?: number;
  life_time?: string;
  matk?: number;
  max_hp?: number;
  max_sp?: number;
  mdef?: number;
  mode?: number;
  sp?: number;
}
export interface Feedinglog {
  char_id: number;
  id?: number;
  intimacy: number;
  item_id: number;
  map: string;
  target_class: number;
  target_id: number;
  time: Date;
  type: number;
  x: number;
  y: number;
}
export interface Friends {
  char_id?: number;
  friend_id?: number;
}
export interface GlobalAccRegNum {
  account_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface GlobalAccRegStr {
  account_id?: number;
  index?: number;
  key?: string;
  value?: string;
}
export interface Guild {
  average_lv?: number;
  char_id?: number;
  connect_member?: number;
  emblem_data: unknown | null;
  emblem_id?: number;
  emblem_len?: number;
  exp?: string;
  guild_id?: number;
  guild_lv?: number;
  last_master_change: Date | null;
  master?: string;
  max_member?: number;
  mes1?: string;
  mes2?: string;
  name?: string;
  next_exp?: string;
  skill_point?: number;
}
export interface GuildAlliance {
  alliance_id?: number;
  guild_id?: number;
  name?: string;
  opposition?: number;
}
export interface GuildCastle {
  castle_id?: number;
  createTime?: number;
  defense?: number;
  economy?: number;
  guild_id?: number;
  nextTime?: number;
  payTime?: number;
  triggerD?: number;
  triggerE?: number;
  visibleC?: number;
  visibleG0?: number;
  visibleG1?: number;
  visibleG2?: number;
  visibleG3?: number;
  visibleG4?: number;
  visibleG5?: number;
  visibleG6?: number;
  visibleG7?: number;
}
export interface GuildExpulsion {
  account_id?: number;
  guild_id?: number;
  mes?: string;
  name?: string;
}
export interface GuildMember {
  char_id?: number;
  exp?: string;
  guild_id?: number;
  position?: number;
}
export interface GuildPosition {
  exp_mode?: number;
  guild_id?: number;
  mode?: number;
  name?: string;
  position?: number;
}
export interface GuildSkill {
  guild_id?: number;
  id?: number;
  lv?: number;
}
export interface GuildStorage {
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  enchantgrade?: number;
  equip?: number;
  expire_time?: number;
  guild_id?: number;
  id?: number;
  identify?: number;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  unique_id?: string;
}
export interface GuildStorageLog {
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  char_id?: number;
  enchantgrade?: number;
  expire_time?: number;
  guild_id?: number;
  id?: number;
  identify?: number;
  name?: string;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  time: Date;
  unique_id?: string;
}
export interface Homunculus {
  agi?: number;
  alive?: number;
  autofeed?: number;
  char_id: number;
  class?: number;
  dex?: number;
  exp?: string;
  homun_id?: number;
  hp?: number;
  hunger?: number;
  int?: number;
  intimacy?: number;
  level?: number;
  luk?: number;
  max_hp?: number;
  max_sp?: number;
  name?: string;
  prev_class?: number;
  rename_flag?: number;
  skill_point?: number;
  sp?: number;
  str?: number;
  vaporize?: number;
  vit?: number;
}
export interface Hotkey {
  char_id: number;
  hotkey: number;
  itemskill_id?: number;
  skill_lvl?: number;
  type?: number;
}
export interface Interlog {
  id?: number;
  log?: string;
  time: Date;
}
export interface Inventory {
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  char_id?: number;
  enchantgrade?: number;
  equip?: number;
  equip_switch?: number;
  expire_time?: number;
  favorite?: number;
  id?: number;
  identify?: number;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  unique_id?: string;
}
export interface Ipbanlist {
  btime: Date;
  list?: string;
  reason?: string;
  rtime: Date;
}
export interface Login {
  account_id?: number;
  birthdate: Date | null;
  character_slots?: number;
  email?: string;
  expiration_time?: number;
  group_id?: number;
  last_ip?: string;
  lastlogin: Date | null;
  logincount?: number;
  old_group?: number;
  pincode?: string;
  pincode_change?: number;
  sex?: number;
  state?: number;
  unban_time?: number;
  user_pass?: string;
  userid?: string;
  vip_time?: number;
  web_auth_token: string | null;
  web_auth_token_enabled?: number;
}
export interface Loginlog {
  ip?: string;
  log?: string;
  rcode?: number;
  time: Date;
  user?: string;
}
export interface Mail {
  dest_id?: number;
  dest_name?: string;
  id?: string;
  message?: string;
  send_id?: number;
  send_name?: string;
  status?: number;
  time?: number;
  title?: string;
  type?: number;
  zeny?: number;
}
export interface MailAttachments {
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  enchantgrade?: number;
  id?: string;
  identify?: number;
  index?: number;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  unique_id?: string;
}
export interface Mapreg {
  index?: number;
  value: string;
  varname: string;
}
export interface Market {
  amount: number;
  flag?: number;
  name?: string;
  nameid: number;
  price: number;
}
export interface Memo {
  char_id?: number;
  map?: string;
  memo_id?: number;
  x?: number;
  y?: number;
}
export interface Mercenary {
  char_id: number;
  class?: number;
  hp?: number;
  kill_counter: number;
  life_time?: string;
  mer_id?: number;
  sp?: number;
}
export interface MercenaryOwner {
  arch_calls?: number;
  arch_faith?: number;
  char_id: number;
  merc_id?: number;
  spear_calls?: number;
  spear_faith?: number;
  sword_calls?: number;
  sword_faith?: number;
}
export interface Mvplog {
  kill_char_id?: number;
  map?: string;
  monster_id?: number;
  mvp_date: Date;
  mvp_id?: number;
  mvpexp?: string;
  prize?: number;
}
export interface Npclog {
  account_id?: number;
  char_id?: number;
  char_name?: string;
  map?: string;
  mes?: string;
  npc_date: Date;
  npc_id?: number;
}
export interface Party {
  exp?: number;
  item?: number;
  leader_char?: number;
  leader_id?: number;
  name?: string;
  party_id?: number;
}
export interface Pet {
  account_id?: number;
  autofeed?: number;
  char_id?: number;
  class?: number;
  egg_id?: number;
  equip?: number;
  hungry?: number;
  incubate?: number;
  intimate?: number;
  level?: number;
  name?: string;
  pet_id?: number;
  rename_flag?: number;
}
export interface Picklog {
  amount?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  char_id?: number;
  enchantgrade?: number;
  id?: number;
  map?: string;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  time: Date;
  type?: number;
  unique_id?: string;
}
export interface Quest {
  char_id?: number;
  count1?: number;
  count2?: number;
  count3?: number;
  quest_id: number;
  state?: number;
  time?: number;
}
export interface Sales {
  amount: number;
  end: Date;
  nameid: number;
  start: Date;
}
export interface ScData {
  account_id: number;
  char_id: number;
  tick: string;
  type: number;
  val1?: number;
  val2?: number;
  val3?: number;
  val4?: number;
}
export interface Skill {
  char_id?: number;
  flag?: number;
  id?: number;
  lv?: number;
}
export interface SkillHomunculus {
  homun_id: number;
  id: number;
  lv: number;
}
export interface Skillcooldown {
  account_id: number;
  char_id: number;
  skill?: number;
  tick: string;
}
export interface Storage {
  account_id?: number;
  amount?: number;
  attribute?: number;
  bound?: number;
  card0?: number;
  card1?: number;
  card2?: number;
  card3?: number;
  enchantgrade?: number;
  equip?: number;
  expire_time?: number;
  id?: number;
  identify?: number;
  nameid?: number;
  option_id0?: number;
  option_id1?: number;
  option_id2?: number;
  option_id3?: number;
  option_id4?: number;
  option_parm0?: number;
  option_parm1?: number;
  option_parm2?: number;
  option_parm3?: number;
  option_parm4?: number;
  option_val0?: number;
  option_val1?: number;
  option_val2?: number;
  option_val3?: number;
  option_val4?: number;
  refine?: number;
  unique_id?: string;
}
export interface VendingItems {
  amount: number;
  cartinventory_id: number;
  index: number;
  price: number;
  vending_id: number;
}
export interface Vendings {
  account_id: number;
  autotrade: number;
  body_direction?: string;
  char_id: number;
  head_direction?: string;
  id: number;
  map: string;
  sex?: number;
  sit?: string;
  title: string;
  x: number;
  y: number;
}
export interface Zenylog {
  amount?: number;
  char_id?: number;
  id?: number;
  map?: string;
  src_id?: number;
  time: Date;
  type?: number;
}
