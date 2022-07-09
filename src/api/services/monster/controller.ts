import { groupBy } from "lodash";
import { createRpcController } from "../../../lib/rpc/createRpcController";
import { createSearchController } from "../search/controller";
import { NpcDriver } from "../../rathena/NpcDriver";
import { YamlDriver } from "../../rathena/YamlDriver";
import { RAthenaMode } from "../../options";
import { monsterSpawnType } from "./types";
import { monsterDefinition } from "./definition";
import { createMonsterResolver } from "./util/createMonsterResolver";

export function monsterController({
  rAthenaMode,
  yaml,
  npc,
}: {
  rAthenaMode: RAthenaMode;
  yaml: YamlDriver;
  npc: NpcDriver;
}) {
  const spawns = npc.resolve("scripts_monsters.conf", monsterSpawnType);
  const spawnLookup = groupBy(spawns, "id");
  const monsters = yaml.resolve(
    "db/mob_db.yml",
    createMonsterResolver(rAthenaMode)
  );

  return createRpcController(monsterDefinition.entries, {
    searchMonsters: createSearchController(
      Array.from(monsters.values()),
      () => true
    ),
    async getMonsterSpawns(monsterId) {
      return spawnLookup[monsterId] ?? [];
    },
  });
}
