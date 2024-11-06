import entities from "./entities.json" with { type: "json" }
import path from "node:path"
import fs from "node:fs"

const yValue = -61
const pack = "./Entity Tester/datapacks/Entity Tester/data/entitytester"

const functions = path.join(pack, "function")

await fs.promises.rm(functions, { recursive: true, force: true })
await fs.promises.mkdir(functions, { recursive: true })

function expStep(step, start, length, func) {
  const end = start + length
  let pos = start + step
  let l = step
  while (step < 0 ? pos > end : pos < end) {
    func(start, start + l - Math.sign(step), step < 0 ? pos + l + 1 : pos)
    pos += l
    l = Math[step < 0 ? "max" : "min"](l * 2, end - pos)
  }
}

const structures = []
function createStructure(rectangleWidth, rectangleLength) {
  const name = `${rectangleWidth}x${rectangleLength}`

  if (structures.includes(name)) return

  const minX = -Math.floor(rectangleWidth / 2)
  const maxX = Math.ceil(rectangleWidth / 2) - 1
  const minZ = -rectangleLength + 1
  const maxZ = 0

  const edgeMinX = minX - 5
  const edgeMaxX = maxX + 5
  const edgeMinZ = minZ - 5
  const edgeMaxZ = maxZ + 5

  const commands = []

  const width = Math.floor((Math.ceil((rectangleWidth + 10) / 2) - 7) / 6) * 6

  commands.push(
    `fill ${edgeMinX - 1} ${yValue + 1} ${edgeMinZ - 1} ${edgeMaxX + 1} ${yValue + 6} ${edgeMaxZ + 1} air`,
    `fill ${edgeMinX} ${yValue} ${edgeMinZ} ${edgeMaxX} ${yValue} ${edgeMaxZ} stone_bricks`,
    `setblock 0 ${yValue} ${maxZ + 3} gold_block`,
    `place template entitytester:wall_segment ${edgeMinX} ${yValue + 1} ${edgeMinZ - 1}`,
    `place template entitytester:wall_segment ${edgeMaxX - 6} ${yValue + 1} ${edgeMinZ - 1}`,
    `place template entitytester:wall_segment ${edgeMinX + 6} ${yValue + 1} ${edgeMaxZ + 1} 180`,
    `place template entitytester:wall_segment ${edgeMaxX} ${yValue + 1} ${edgeMaxZ + 1} 180`,
    `place template entitytester:wall_segment ${edgeMinX - 1} ${yValue + 1} ${edgeMinZ + 6} counterclockwise_90`,
    `place template entitytester:wall_segment ${edgeMaxX + 1} ${yValue + 1} ${edgeMinZ} clockwise_90`,
    `place template entitytester:wall_edge ${edgeMinX + width + 1} ${yValue + 1} ${edgeMinZ - 1}`,
    `place template entitytester:wall_edge ${edgeMaxX - width - 1} ${yValue + 1} ${edgeMinZ - 1} none front_back`,
    `place template entitytester:wall_edge ${edgeMinX + width + 1} ${yValue + 1} ${edgeMaxZ + 1} 180 front_back`,
    `place template entitytester:wall_edge ${edgeMaxX - width - 1} ${yValue + 1} ${edgeMaxZ + 1} 180`,
    `fill ${edgeMinX + width + 4} ${yValue + 1} ${edgeMinZ - 1} ${edgeMaxX - width - 4} ${yValue + 3} ${edgeMinZ - 1} cobblestone`,
    `fill ${edgeMinX + width + 4} ${yValue + 4} ${edgeMinZ} ${edgeMaxX - width - 4} ${yValue + 4} ${edgeMinZ} spruce_log[axis=x]`,
    `fill ${edgeMinX + width + 4} ${yValue + 4} ${edgeMinZ - 1} ${edgeMaxX - width - 4} ${yValue + 4} ${edgeMinZ - 1} dark_oak_stairs[facing=south]`,
    `fill ${edgeMinX + width + 4} ${yValue + 1} ${edgeMaxZ + 1} ${edgeMaxX - width - 4} ${yValue + 3} ${edgeMaxZ + 1} cobblestone`,
    `fill ${edgeMinX + width + 4} ${yValue + 4} ${edgeMaxZ} ${edgeMaxX - width - 4} ${yValue + 4} ${edgeMaxZ} spruce_log[axis=x]`,
    `fill ${edgeMinX + width + 4} ${yValue + 4} ${edgeMaxZ + 1} ${edgeMaxX - width - 4} ${yValue + 4} ${edgeMaxZ + 1} dark_oak_stairs`,
    `fill ${edgeMinX - 1} ${yValue + 1} ${edgeMinZ - 1} ${edgeMinX - 1} ${yValue + 3} ${edgeMinZ - 1} cobblestone_wall`,
    `fill ${edgeMaxX + 1} ${yValue + 1} ${edgeMinZ - 1} ${edgeMaxX + 1} ${yValue + 3} ${edgeMinZ - 1} cobblestone_wall`,
    `fill ${edgeMinX - 1} ${yValue + 1} ${edgeMaxZ + 1} ${edgeMinX - 1} ${yValue + 3} ${edgeMaxZ + 1} cobblestone_wall`,
    `fill ${edgeMaxX + 1} ${yValue + 1} ${edgeMaxZ + 1} ${edgeMaxX + 1} ${yValue + 3} ${edgeMaxZ + 1} cobblestone_wall`,
    `setblock ${edgeMinX - 1} ${yValue + 4} ${edgeMinZ - 1} dark_oak_slab`,
    `setblock ${edgeMaxX + 1} ${yValue + 4} ${edgeMinZ - 1} dark_oak_slab`,
    `setblock ${edgeMinX - 1} ${yValue + 4} ${edgeMaxZ + 1} dark_oak_slab`,
    `setblock ${edgeMaxX + 1} ${yValue + 4} ${edgeMaxZ + 1} dark_oak_slab`,
    `function entitytester:create_controls`,
    `place template entitytester:floor_blocks -4 ${yValue + 1} ${edgeMinZ - 1}`,
    `setblock -4 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"Border"','"Corners"','""']},is_waxed:true}`,
    `setblock -2 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"West -> East"','"Borders"','""']},is_waxed:true}`,
    `setblock 0 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"Main"','"Floor"','""']},is_waxed:true}`,
    `setblock 2 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"North -> South"','"Borders"','""']},is_waxed:true}`,
    `setblock 4 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"Entity"','"Platforms"','""']},is_waxed:true}`,
    `setblock -2 ${yValue + 3} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"Load"','"Floor"','""']},is_waxed:true}`,
    `setblock 2 ${yValue + 3} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:['""','"Reset"','"Floor"','""']},is_waxed:true}`,
    `setblock -1 ${yValue + 3} ${edgeMinZ - 1} spruce_log[axis=z]`,
    `setblock 1 ${yValue + 3} ${edgeMinZ - 1} spruce_log[axis=z]`,
    `setblock -1 ${yValue + 3} ${edgeMinZ} stone_button[facing=south]`,
    `setblock 1 ${yValue + 3} ${edgeMinZ} stone_button[facing=south]`,
    `setblock -1 ${yValue + 3} ${edgeMinZ -2} command_block{Command:"function entitytester:create_floor"}`,
    `setblock 1 ${yValue + 3} ${edgeMinZ -2} command_block{Command:"function entitytester:reset_floor"}`,
    `scoreboard players set global entitytester_last_structure ${rectangleWidth << 10 | rectangleLength}`
  )

  expStep(6, edgeMinX + 1, width, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue + 1} ${edgeMinZ - 1} ${end} ${yValue + 6} ${edgeMinZ} ${pos} ${yValue + 1} ${edgeMinZ - 1}`)
  })

  expStep(-6, edgeMaxX - 1, -width, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue + 1} ${edgeMinZ - 1} ${end} ${yValue + 6} ${edgeMinZ} ${pos} ${yValue + 1} ${edgeMinZ - 1}`)
  })

  expStep(6, edgeMinX + 1, width, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue + 1} ${edgeMaxZ} ${end} ${yValue + 6} ${edgeMaxZ + 1} ${pos} ${yValue + 1} ${edgeMaxZ}`)
  })

  expStep(-6, edgeMaxX - 1, -width, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue + 1} ${edgeMaxZ} ${end} ${yValue + 6} ${edgeMaxZ + 1} ${pos} ${yValue + 1} ${edgeMaxZ}`)
  })

  expStep(6, edgeMinZ + 1, rectangleLength + 9, (start, end, pos) => {
    commands.push(`clone ${edgeMinX - 1} ${yValue + 1} ${start} ${edgeMinX} ${yValue + 6} ${end} ${edgeMinX - 1} ${yValue + 1} ${pos}`)
  })

  expStep(6, edgeMinZ + 1, rectangleLength + 9, (start, end, pos) => {
    commands.push(`clone ${edgeMaxX} ${yValue + 1} ${start} ${edgeMaxX + 1} ${yValue + 6} ${end} ${edgeMaxX} ${yValue + 1} ${pos}`)
  })

  fs.writeFileSync(path.join(functions, `create_structure_${name}.mcfunction`), commands.join("\n"))
  structures.push(name)
}

function clearStructure(rectangleWidth, rectangleLength) {
  const minX = -Math.floor(rectangleWidth / 2)
  const maxX = Math.ceil(rectangleWidth / 2) - 1
  const minZ = -rectangleLength + 1
  const maxZ = 0

  const commands = [
    "function entitytester:kill",
    `fill ${minX - 6} 319 ${minZ - 7} ${maxX + 6} 319 ${maxZ + 7} air`,
    `fill ${minX - 6} ${yValue + 1} ${minZ - 7} ${maxX + 6} ${yValue + 6} ${maxZ + 7} air`,
    `fill ${minX - 6} ${yValue} ${minZ - 6} ${maxX + 6} ${yValue} ${maxZ + 6} grass_block`
  ]

  fs.writeFileSync(path.join(functions, `clear_structure_${rectangleWidth}x${rectangleLength}.mcfunction`), commands.join("\n"))
}

function createFloor(width, rectangleWidth, rectangleLength, entities, large = []) {
  const minX = -Math.floor(rectangleWidth / 2)
  const maxX = Math.ceil(rectangleWidth / 2) - 1
  const minZ = -rectangleLength + 1
  const maxZ = 0

  const edgeMinX = minX - 5
  const edgeMaxX = maxX + 5
  const edgeMinZ = minZ - 5
  const edgeMaxZ = maxZ + 5

  const commands = [
    `clone 0 ${yValue + 1} ${edgeMinZ} 0 ${yValue + 1} ${edgeMinZ} ${minX} ${yValue} ${minZ}`,
    `clone -2 ${yValue + 1} ${edgeMinZ} -2 ${yValue + 1} ${edgeMinZ} ${minX} ${yValue} ${minZ - 1}`,
    `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${minX - 1} ${yValue} ${minZ}`,
    `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${maxX + 1} ${yValue} ${minZ}`,
    `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${minX - 1} ${yValue} ${minZ - 1}`,
    `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${maxX + 1} ${yValue} ${minZ - 1}`
  ]

  expStep(1, minX, rectangleWidth, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue} ${minZ} ${end} ${yValue} ${minZ - 1} ${pos} ${yValue} ${minZ - 1}`)
  })

  expStep(1, minZ, rectangleLength, (start, end, pos) => {
    commands.push(`clone ${minX - 1} ${yValue} ${start} ${maxX + 1} ${yValue} ${end} ${minX - 1} ${yValue} ${pos}`)
  })

  commands.push(`clone ${minX - 1} ${yValue} ${minZ - 1} ${maxX + 1} ${yValue} ${minZ - 1} ${minX - 1} ${yValue} ${maxZ + 1}`)

  const offset = large.length ? 15 : 3

  if (large.length) {
    const startX = minX + ((rectangleWidth + 2) - (large.length * 6 + 1)) / 2
    const startZ = minZ + 5

    commands.push(
      `clone 4 ${yValue + 1} ${edgeMinZ} 4 ${yValue + 1} ${edgeMinZ} ${startX} ${yValue} ${startZ}`,
      `clone -2 ${yValue + 1} ${edgeMinZ} -2 ${yValue + 1} ${edgeMinZ} ${startX} ${yValue} ${startZ - 1}`,
      `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${startX - 1} ${yValue} ${startZ}`,
      `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${startX + 5} ${yValue} ${startZ}`,
      `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${startX - 1} ${yValue} ${startZ - 1}`,
      `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${startX + 5} ${yValue} ${startZ - 1}`
    )

    expStep(1, startX, 5, (start, end, pos) => {
      commands.push(`clone ${start} ${yValue} ${startZ} ${end} ${yValue} ${startZ - 1} ${pos} ${yValue} ${startZ - 1}`)
    })

    expStep(1, startZ, 5, (start, end, pos) => {
      commands.push(`clone ${startX - 1} ${yValue} ${start} ${startX + 5} ${yValue} ${end} ${startX - 1} ${yValue} ${pos}`)
    })

    commands.push(`clone ${startX - 1} ${yValue} ${startZ - 1} ${startX + 5} ${yValue} ${startZ - 1} ${startX - 1} ${yValue} ${startZ + 5}`)

    expStep(6, startX, large.length * 6, (start, end, pos) => {
      commands.push(`clone ${start} ${yValue} ${startZ - 1} ${end} ${yValue} ${startZ + 5} ${pos} ${yValue} ${startZ - 1}`)
    })
  }

  const startX = minX + (rectangleWidth - (width * 2 + 1)) / 2
  const startZ = minZ + offset
  commands.push(
    `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${startX} ${yValue} ${startZ}`,
    `clone -2 ${yValue + 1} ${edgeMinZ} -2 ${yValue + 1} ${edgeMinZ} ${startX + 1} ${yValue} ${startZ}`,
    `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${startX + 2} ${yValue} ${startZ}`,
    `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${startX} ${yValue} ${startZ + 1}`,
    `clone 4 ${yValue + 1} ${edgeMinZ} 4 ${yValue + 1} ${edgeMinZ} ${startX + 1} ${yValue} ${startZ + 1}`,
    `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${startX + 2} ${yValue} ${startZ + 1}`,
    `clone ${startX} ${yValue} ${startZ} ${startX + 2} ${yValue} ${startZ} ${startX} ${yValue} ${startZ + 2}`
  )

  expStep(2, startX + 1, width * 2, (start, end, pos) => {
    commands.push(`clone ${start} ${yValue} ${startZ} ${end} ${yValue} ${startZ + 2} ${pos} ${yValue} ${startZ}`)
  })

  let rows = entities.length / width

  if (rows - Math.trunc(rows)) {
    commands.push(`clone ${startX} ${yValue} ${startZ} ${startX + entities.length % width * 2} ${yValue} ${startZ + 2} ${startX + (width * 2 - entities.length % width * 2) / 2} ${yValue} ${startZ + Math.trunc(rows) * 6}`)
  }

  expStep(6, startZ, Math.floor(rows) * 6, (start, end, pos) => {
    commands.push(`clone ${startX} ${yValue} ${start} ${startX + width * 2} ${yValue} ${end} ${startX} ${yValue} ${pos}`)
  })

  fs.writeFileSync(path.join(functions, `create_floor_${rectangleWidth}x${rectangleLength}_${entities.length}_${large.length}.mcfunction`), commands.join("\n"))
}

function setBlock(commands, block, x, z) {
  const blockstates = []
  if (block.blockstate) {
    for (const [key, value] of Object.entries(block.blockstate)) {
      blockstates.push(`${key}=${value}`)
    }
  }
  commands.push(`setblock ${x} ${yValue + 1} ${z} ${block.id}${blockstates.length ? `[${blockstates.join(",")}]` : ""}`)
  if (block.behind) {
    setBlock(commands, block.behind, x, z - 1)
  }
}

const evokerFangs = {}
function spawnEntity(name, commands, commands2, entity, x, z, baby) {
  if (entity.type === "block") {
    setBlock(commands, entity, x, z)
  } else {
    if (entity.id === "evoker_fangs") {
      evokerFangs[name] = [x, z]
      return
    }
    if (entity.block) {
      setBlock(commands, entity.block, x, z)
    }
    if (entity.burns) {
      commands.push(`setblock ${x} 319 ${z} tinted_glass`)
    }
    let nbt = `{${entity.nbt?.DelayedAI ? "" : "NoAI:1,"}NoGravity:1,Silent:1,PersistenceRequired:1,Invulnerable:1${baby ? (entity.id === "armor_stand" ? ",Small:1" : `,Age:-2147483648,IsBaby:1`) : ""}`
    if (entity.nbt && Object.keys(entity.nbt).length) {
      if (entity.root) {
        nbt += `,${entity.root}:{`
      }
      const properties = []
      for (const [key, value] of Object.entries(entity.nbt)) {
        if (key === "DelayedAI") continue
        properties.push(`${key}:${value}`)
      }
      if (entity.root) {
        nbt += properties.join() + "}"
      } else {
        nbt += "," + properties.join()
      }
    }
    nbt += `}`
    commands2.push(`${entity.id === "wither" ? "execute if score global entitytester_wither matches 1 run " : ""}summon ${entity.id} ${x + (entity.offset?.[0] ?? 0)} ${yValue + 1 + (entity.offset?.[1] ?? 0)} ${z + (entity.offset?.[2] ?? 0)} ${nbt}`)
  }
}

function spawnEntities(name, width, rectangleWidth, rectangleLength, entities, large = [], baby) {
  const commands = [`function entitytester:clear_entities_${rectangleWidth}x${rectangleLength}`]
  const commands2 = []

  if (large.length) {
    const startX = -Math.floor(rectangleWidth / 2) + ((rectangleWidth + 2) - (large.length * 6 + 1)) / 2 + 2

    for (let [i, entity] of large.entries()) {
      spawnEntity(name, commands, commands2, entity, startX + i * 6, -rectangleLength + 1 + 7, baby)
    }
  }

  const startX = -Math.floor(rectangleWidth / 2) + (rectangleWidth - (width * 2 + 1)) / 2 + 1
  const startZ = -rectangleLength + 1 + (large.length ? 16 : 4)
  for (let [i, entity] of entities.entries()) {
    let x = startX + (i % width) * 2
    const z = startZ + Math.floor(i / width) * 6
    if (Math.ceil((i + 1) / width) === Math.ceil(entities.length / width) && entities.length % width) {
      x += (width * 2 - entities.length % width * 2) / 2
    }
    spawnEntity(name, commands, commands2, entity, x, z, baby)
  }

  commands.push(`schedule function entitytester:spawn_${name}_entities_2 1t`)
  commands2.push("schedule function entitytester:update_delayed_ai 4t")

  fs.writeFileSync(path.join(functions, `spawn_${name}_entities.mcfunction`), commands.join("\n"))
  fs.writeFileSync(path.join(functions, `spawn_${name}_entities_2.mcfunction`), commands2.join("\n"))
}

function clearEntities(rectangleWidth, rectangleLength) {
  fs.writeFileSync(path.join(functions, `clear_entities_${rectangleWidth}x${rectangleLength}.mcfunction`), [
    "function entitytester:kill",
    `fill ${-Math.floor(rectangleWidth / 2)} 319 ${-rectangleLength + 1} ${Math.ceil(rectangleWidth / 2) - 1} 319 0 air`,
    `fill ${-Math.floor(rectangleWidth / 2)} ${yValue + 1} ${-rectangleLength + 1} ${Math.ceil(rectangleWidth / 2) - 1} ${yValue + 1} 0 air`
  ].join("\n"))
}

function toggle(name, regenerate, updateControls = true) {
  const commands = [
    `scoreboard players add global entitytester_${name} 1`,
    `execute if score global entitytester_${name} matches 2.. run scoreboard players set global entitytester_${name} 0`
  ]
  if (regenerate === "structure") {
    commands.push("function entitytester:create_structure")
  } else if (regenerate === "entities") {
    commands.push("function entitytester:spawn_entities")
  }
  if (updateControls) {
    commands.push("function entitytester:update_controls")
  }
  fs.writeFileSync(path.join(functions, `toggle_${name}.mcfunction`), commands.join("\n"))
}

toggle("mode", "structure", false)
toggle("sort", "entities")
toggle("variants", "structure", false)
toggle("wither", "entities")

// Kill Entities
fs.writeFileSync(path.join(functions, "kill.mcfunction"), [
  "tp @e[type=!player] 0 -100 0",
  "kill @e[type=!player]"
].join("\n"))

// Delete Structure
fs.writeFileSync(path.join(functions, "delete_structure.mcfunction"), [
  "function entitytester:clear_structure",
  `scoreboard players set global entitytester_loaded 0`
].join("\n"))

// Spawn Entities
fs.writeFileSync(path.join(functions, "spawn_entities.mcfunction"), [
  "execute if score global entitytester_mode matches 0 run execute if score global entitytester_sort matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:spawn_normal_alphabetical_entities",
  "execute if score global entitytester_mode matches 0 run execute if score global entitytester_sort matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:spawn_normal_alphabetical_variants_entities",
  "execute if score global entitytester_mode matches 0 run execute if score global entitytester_sort matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:spawn_normal_releasedate_entities",
  "execute if score global entitytester_mode matches 0 run execute if score global entitytester_sort matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:spawn_normal_releasedate_variants_entities",
  "execute if score global entitytester_mode matches 1 run execute if score global entitytester_sort matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:spawn_baby_alphabetical_entities",
  "execute if score global entitytester_mode matches 1 run execute if score global entitytester_sort matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:spawn_baby_alphabetical_variants_entities",
  "execute if score global entitytester_mode matches 1 run execute if score global entitytester_sort matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:spawn_baby_releasedate_entities",
  "execute if score global entitytester_mode matches 1 run execute if score global entitytester_sort matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:spawn_baby_releasedate_variants_entities",
  "scoreboard players set global entitytester_entities_loaded 1"
].join("\n"))

// Create Controls
{
  const edgeMaxZ = 5

  const commands = [
    `setblock -2 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"Instagram","underlined":true,"bold":true}','""','"@ewan.howell"','""']},is_waxed:true}`,
    `setblock -1 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"Website","underlined":true,"bold":true}','""','"ewanhowell.com"','""']},is_waxed:true}`,
    `setblock 0 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"Map By","underlined":true,"bold":true}','""','"Ewan Howell"','""']},is_waxed:true}`,
    `setblock 1 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"YouTube","underlined":true,"bold":true}','""','"Ewan Howell"','""']},is_waxed:true}`,
    `setblock 2 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"Twitter","underlined":true,"bold":true}','""','"@ewanhowell5195"','""']},is_waxed:true}`,
    `setblock 3 ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['""','"Spawn"','"Entities"','""']},is_waxed:true}`,
    `setblock 2 ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['""','"Clear"','"Entities"','""']},is_waxed:true}`,
    "function entitytester:update_controls"
  ]

  function addControl(func, x) {
    commands.push(
      `setblock ${x} ${yValue + 2} ${edgeMaxZ + 1} spruce_log[axis=z]`,
      `setblock ${x} ${yValue + 2} ${edgeMaxZ} stone_button`,
      `setblock ${x} ${yValue + 2} ${edgeMaxZ + 2} command_block{Command:"function entitytester:${func}"}`,
    )
  }
  addControl("spawn_entities", 3)
  addControl("clear_entities", 2)
  addControl("toggle_mode", 0)
  addControl("toggle_sort", -1)
  addControl("toggle_variants", -2)
  addControl("toggle_wither", -3)

  fs.writeFileSync(path.join(functions, "create_controls.mcfunction"), commands.join("\n"))
}

// Update Controls
{
  const edgeMaxZ = 5

  const commands = [`fill -3 ${yValue + 1} ${edgeMaxZ} 0 ${yValue + 1} ${edgeMaxZ} air`]

  function addControl(variable, name, option1, option2, x) {
    commands.push(
      `execute if score global entitytester_${variable} matches 0 run setblock ${x} ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"${name}","underlined":true,"bold":true}','""','{"text":"${option1}","bold":true,"color":"white"}','{"text":"${option2}"}']},is_waxed:true}`,
      `execute if score global entitytester_${variable} matches 1 run setblock ${x} ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:['{"text":"${name}","underlined":true,"bold":true}','""','{"text":"${option1}"}','{"text":"${option2}","bold":true,"color":"white"}']},is_waxed:true}`,
    )
  }

  addControl("mode", "Mode", "Normal", "Babies", 0)
  addControl("sort", "Sort", "Alphabetical", "Release Date", -1)
  addControl("variants", "Variants", "Off", "On", -2)
  addControl("wither", "Spawn Wither", "Off", "On", -3)

  fs.writeFileSync(path.join(functions, "update_controls.mcfunction"), commands.join("\n"))
}

// Update Delayed AI
fs.writeFileSync(path.join(functions, "update_delayed_ai.mcfunction"), "execute as @e[type=!minecraft:player] run data merge entity @s {NoAI:1}")

// Normal
const normalEntityWidth = 16

const normalWidth = Math.max((normalEntityWidth * 2) + 7, entities.large.length * 6 + 9)
const normalLength = Math.ceil(entities.normal.length / normalEntityWidth) * 6 + 15

createStructure(normalWidth, normalLength)
clearStructure(normalWidth, normalLength)
createFloor(normalEntityWidth, normalWidth, normalLength, entities.normal, entities.large)
spawnEntities("normal_alphabetical", normalEntityWidth, normalWidth, normalLength, entities.normal.slice().sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id)), entities.large)
spawnEntities("normal_releasedate", normalEntityWidth, normalWidth, normalLength, entities.normal, entities.large)
clearEntities(normalWidth, normalLength)

// Baby
const babyEntityWidth = 10

const babies = entities.normal.filter(e => e.baby)

const babyWidth = babyEntityWidth * 2 + 7
const babyLength = Math.ceil(babies.length / babyEntityWidth) * 6 + 3

createStructure(babyWidth, babyLength)
clearStructure(babyWidth, babyLength)
createFloor(babyEntityWidth, babyWidth, babyLength, babies)
spawnEntities("baby_alphabetical", babyEntityWidth, babyWidth, babyLength, babies.slice().sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id)), [], true)
spawnEntities("baby_releasedate", babyEntityWidth, babyWidth, babyLength, babies, [], true)
clearEntities(babyWidth, babyLength)

// Variants
function generateVariants(entity) {
  if (entity.type === "block") {
    const blocks = []
    for (const variant of entity.variants) {
      const block = structuredClone(entity)
      delete block.variants
      block.id = variant.id ?? variant
      if (block.behind) {
        block.behind.id = variant
      }
      if (variant.blockstate) {
        block.blockstate = variant.blockstate
      }
      blocks.push(block)
    }
    return blocks
  }

  const keys = Object.keys(entity.variants)
  const combinations = []

  function shouldSkip(currentCombination) {
    if (!entity.constraints) return false

    return entity.constraints.some(condition => 
      Object.entries(condition).every(([key, value]) => 
        currentCombination[key] === value
      )
    )
  }

  function combine(currentCombination, depth) {
    if (depth === keys.length) {
      if (shouldSkip(currentCombination)) return

      const newEntity = structuredClone(entity)

      newEntity.nbt = Object.fromEntries(
        Object.entries({
          ...(entity.variant_nbt ?? {}),
          ...currentCombination
        }).filter(([k, v]) => v !== null)
      )
      
      if (entity.id === "panda") {
        if (newEntity.nbt.MainGene === "weak") {
          newEntity.nbt.HiddenGene = "weak"
        } else if (newEntity.nbt.MainGene === "brown") {
          newEntity.nbt.HiddenGene = "brown"
        }
      }

      delete newEntity.variant_nbt
      delete newEntity.variants
      delete newEntity.constraints

      if (newEntity.nbt.id) {
        newEntity.id = newEntity.nbt.id
        delete newEntity.nbt.id
      }


      combinations.push(newEntity)
      return
    }

    const key = keys[depth]
    entity.variants[key].forEach(value => {
      combine({ ...currentCombination, [key]: value }, depth + 1)
    })
  }

  combine({}, 0)
  return combinations
}

// Normal Variants
const normalEntityVariantsWidth = 34

function getVariants(entities) {
  const list = []
  for (const entity of entities) {
    if (!entity.variants) continue
    const entities = []
    if (entity.type === "block" || !Array.isArray(entity.variants)) {
      entities.push(entity)
    } else {
      for (const [i, v] of entity.variants.entries()) {
        const newEntity = structuredClone(entity)
        newEntity.variants = v
        if (Array.isArray(entity.variant_nbt)) {
          newEntity.variant_nbt = entity.variant_nbt[i]
        }
        entities.push(newEntity)
      }
    }
    for (const entity of entities) {
      const variants = generateVariants(entity)
      for (const variant of variants) {
        list.push(variant)
      }
    }
  }
  return list
}

const normalVariants = getVariants(entities.normal)
const largeVariants = getVariants(entities.large)

const normalVariantsWidth = Math.max((normalEntityVariantsWidth * 2) + 7, largeVariants.length * 6 + 9)
const normalVariantsLength = Math.ceil(normalVariants.length / normalEntityVariantsWidth) * 6 + 15

createStructure(normalVariantsWidth, normalVariantsLength)
clearStructure(normalVariantsWidth, normalVariantsLength)
createFloor(normalEntityVariantsWidth, normalVariantsWidth, normalVariantsLength, normalVariants, largeVariants)
spawnEntities("normal_alphabetical_variants", normalEntityVariantsWidth, normalVariantsWidth, normalVariantsLength, normalVariants.slice().sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id)), largeVariants)
spawnEntities("normal_releasedate_variants", normalEntityVariantsWidth, normalVariantsWidth, normalVariantsLength, normalVariants, largeVariants)
clearEntities(normalVariantsWidth, normalVariantsLength)

// Baby Variants
const babyEntityVariantsWidth = 16

const babyVariants = normalVariants.filter(e => {
  if (e.root === "VillagerData" && e.nbt.profession !== "none") return
  return e.baby
})

const babyVariantsWidth = babyEntityVariantsWidth * 2 + 7
const babyVariantsLength = Math.ceil(babyVariants.length / babyEntityVariantsWidth) * 6 + 3

createStructure(babyVariantsWidth, babyVariantsLength)
clearStructure(babyVariantsWidth, babyVariantsLength)
createFloor(babyEntityVariantsWidth, babyVariantsWidth, babyVariantsLength, babyVariants)
spawnEntities("baby_alphabetical_variants", babyEntityVariantsWidth, babyVariantsWidth, babyVariantsLength, babyVariants.slice().sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id)), [], true)
spawnEntities("baby_releasedate_variants", babyEntityVariantsWidth, babyVariantsWidth, babyVariantsLength, babyVariants, [], true)
clearEntities(babyVariantsWidth, babyVariantsLength)

// Clear Structure
{
  const commands = ["scoreboard players set global entitytester_entities_loaded 0"]

  for (const structure of structures) {
    const [ width, length ] = structure.split("x")
    commands.push(`execute if score global entitytester_last_structure matches ${width << 10 | length} run function entitytester:clear_structure_${width}x${length}`)
  }

  fs.writeFileSync(path.join(functions, "clear_structure.mcfunction"), commands.join("\n"))
}

// Copy Floor Customisation
{
  const commands = []

  for (const structure of structures) {
    const [ width, length ] = structure.split("x")
    commands.push(`execute if score global entitytester_loaded matches 1 run execute if score global entitytester_last_structure matches ${width << 10 | length} run clone -4 ${yValue + 1} ${-length - 4} 4 ${yValue + 1} ${-length - 4} -4 0 0`)
  }

  fs.writeFileSync(path.join(functions, "copy_floor_customisation.mcfunction"), commands.join("\n"))
}

// Paste Floor Customisation
{
  const commands = []

  for (const structure of structures) {
    const [ width, length ] = structure.split("x")
    commands.push(`execute if score global entitytester_loaded matches 1 run execute if score global entitytester_last_structure matches ${width << 10 | length} run clone -4 0 0 4 0 0 -4 ${yValue + 1} ${-length - 4}`)
  }

  commands.push(
    "fill -4 0 0 4 0 0 air",
    "scoreboard players set global entitytester_loaded 1"
  )

  fs.writeFileSync(path.join(functions, "paste_floor_customisation.mcfunction"), commands.join("\n"))
}

// Clear Entities
{
  const commands = ["scoreboard players set global entitytester_entities_loaded 0"]

  for (const structure of structures) {
    const [ width, length ] = structure.split("x")
    commands.push(`execute if score global entitytester_last_structure matches ${width << 10 | length} run function entitytester:clear_entities_${width}x${length}`)
  }

  fs.writeFileSync(path.join(functions, "clear_entities.mcfunction"), commands.join("\n"))
}

// Evoker Fangs
fs.writeFileSync(path.join(functions, "spawn_evoker_fangs.mcfunction"), [
  `execute if score global entitytester_entities_loaded matches 1 run execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run execute if score global entitytester_sort matches 0 run summon evoker_fangs ${evokerFangs.normal_alphabetical[0]} ${yValue + 1.25} ${evokerFangs.normal_alphabetical[1]} {Silent:1}`,
  `execute if score global entitytester_entities_loaded matches 1 run execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run execute if score global entitytester_sort matches 1 run summon evoker_fangs ${evokerFangs.normal_releasedate[0]} ${yValue + 1.25} ${evokerFangs.normal_releasedate[1]} {Silent:1}`,
  "schedule function entitytester:spawn_evoker_fangs 24t"
].join("\n"))

// Create Structure
fs.writeFileSync(path.join(functions, "create_structure.mcfunction"), [
  `function entitytester:copy_floor_customisation`,
  `function entitytester:clear_structure`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_${normalWidth}x${normalLength}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_${babyWidth}x${babyLength}`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_${normalVariantsWidth}x${normalVariantsLength}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_${babyVariantsWidth}x${babyVariantsLength}`,
  `function entitytester:paste_floor_customisation`,
  "function entitytester:create_floor"
].join("\n"))

// Create Floor
fs.writeFileSync(path.join(functions, "create_floor.mcfunction"), [
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:create_floor_${normalWidth}x${normalLength}_${entities.normal.length}_${entities.large.length}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:create_floor_${babyWidth}x${babyLength}_${babies.length}_0`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:create_floor_${normalVariantsWidth}x${normalVariantsLength}_${normalVariants.length}_${largeVariants.length}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:create_floor_${babyVariantsWidth}x${babyVariantsLength}_${babyVariants.length}_0`,
  "function entitytester:spawn_entities"
].join("\n"))

// Reset Floor
fs.writeFileSync(path.join(functions, "reset_floor.mcfunction"), [
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-normalLength - 5}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-babyLength - 5}`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-normalVariantsLength - 5}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-babyVariantsLength - 5}`,
  "function entitytester:create_floor"
].join("\n"))

// Load
fs.writeFileSync(path.join(functions, "load.mcfunction"), [
  'scoreboard objectives add entitytester_loaded dummy "Entity Tester Loaded"',
  'scoreboard objectives add entitytester_entities_loaded dummy "Entity Tester Entities Loaded"',
  'scoreboard objectives add entitytester_last_structure dummy "Entity Tester Last Structure"',
  'scoreboard objectives add entitytester_temp dummy "Entity Tester Temp"',
  'scoreboard objectives add entitytester_mode dummy "Entity Tester Mode"',
  'scoreboard objectives add entitytester_sort dummy "Entity Tester Sort"',
  'scoreboard objectives add entitytester_variants dummy "Entity Tester Variants"',
  'scoreboard objectives add entitytester_wither dummy "Entity Tester Wither"',
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_mode matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_mode 0",
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_sort matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_sort 0",
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_variants matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_variants 0",
  "function entitytester:spawn_evoker_fangs",
  'tellraw @a "Entity Tester has loaded"'
].join("\n"))

// Tick
fs.writeFileSync(path.join(functions, "tick.mcfunction"), [
  "kill @e[type=item]"
].join("\n"))