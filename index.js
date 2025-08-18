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

function getLargeEntitiesPerRow(normalEntityWidth) {
  const maxRowWidth = (normalEntityWidth * 2) + 1
  return Math.floor((maxRowWidth + 1) / 6)
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
    `setblock -4 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}`,
    `setblock -2 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}`,
    `setblock 0 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}`,
    `setblock 2 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}`,
    `setblock 4 ${yValue + 2} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}`,
    `setblock -2 ${yValue + 3} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}`,
    `setblock 2 ${yValue + 3} ${edgeMinZ} oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}`,
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

  const largePerRow = getLargeEntitiesPerRow(width)

  let offset
  if (large.length) {
    const largeRowCount = Math.ceil(large.length / largePerRow)
    offset = largeRowCount * 11 + 4
  } else {
    offset = 3
  }

  if (large.length) {
    const largeRowCount = Math.ceil(large.length / largePerRow)

    const largeStartX = minX + (rectangleWidth - (largePerRow * 6 - 1)) / 2
    const largeStartZ = minZ + 5

    for (let row = 0; row < largeRowCount; row++) {
      const rowZ = largeStartZ + row * 11
      const rowStart = row * largePerRow
      const rowLength = Math.min(largePerRow, large.length - rowStart)

      let rowX = largeStartX
      if (row === largeRowCount - 1 && rowLength < largePerRow) {
        rowX += (largePerRow * 6 - rowLength * 6) / 2
      }

      commands.push(
        `clone 4 ${yValue + 1} ${edgeMinZ} 4 ${yValue + 1} ${edgeMinZ} ${rowX} ${yValue} ${rowZ}`,
        `clone -2 ${yValue + 1} ${edgeMinZ} -2 ${yValue + 1} ${edgeMinZ} ${rowX} ${yValue} ${rowZ - 1}`,
        `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${rowX - 1} ${yValue} ${rowZ}`,
        `clone 2 ${yValue + 1} ${edgeMinZ} 2 ${yValue + 1} ${edgeMinZ} ${rowX + 5} ${yValue} ${rowZ}`,
        `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${rowX - 1} ${yValue} ${rowZ - 1}`,
        `clone -4 ${yValue + 1} ${edgeMinZ} -4 ${yValue + 1} ${edgeMinZ} ${rowX + 5} ${yValue} ${rowZ - 1}`
      )

      expStep(1, rowX, 5, (start, end, pos) => {
        commands.push(`clone ${start} ${yValue} ${rowZ} ${end} ${yValue} ${rowZ - 1} ${pos} ${yValue} ${rowZ - 1}`)
      })

      expStep(1, rowZ, 5, (start, end, pos) => {
        commands.push(`clone ${rowX - 1} ${yValue} ${start} ${rowX + 5} ${yValue} ${end} ${rowX - 1} ${yValue} ${pos}`)
      })

      commands.push(`clone ${rowX - 1} ${yValue} ${rowZ - 1} ${rowX + 5} ${yValue} ${rowZ - 1} ${rowX - 1} ${yValue} ${rowZ + 5}`)

      expStep(6, rowX, rowLength * 6, (start, end, pos) => {
        commands.push(`clone ${start} ${yValue} ${rowZ - 1} ${end} ${yValue} ${rowZ + 5} ${pos} ${yValue} ${rowZ - 1}`)
      })
    }
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
  if (block.fill) {
    commands.push(`fill ${x + block.fill[0]} ${yValue + 1 + block.fill[1]} ${z + block.fill[2]} ${x + block.fill[3]} ${yValue + 1 + block.fill[4]} ${z + block.fill[5]} ${block.id}${blockstates.length ? `[${blockstates.join(",")}]` : ""}`)
  } else {
    commands.push(`setblock ${x} ${yValue + 1} ${z} ${block.id}${blockstates.length ? `[${blockstates.join(",")}]` : ""}`)
  }
}

function makeEntity(entity, baby, isPassenger = false) {
  let isBaby = false
  if (baby === true) {
    isBaby = true
  } else if (baby === "tag" && entity.baby === true) {
    isBaby = true
  }

  let nbt = `{${entity.nbt?.DelayedAI ? "" : "NoAI:1,"}NoGravity:1,Silent:1,PersistenceRequired:1,Invulnerable:1${isBaby ? (entity.id === "armor_stand" ? ",Small:1" : `,Age:-2147483648,IsBaby:1`) : ""}`
  if (entity.nbt && Object.keys(entity.nbt).length) {
    if (entity.root) {
      nbt += `,${entity.root}:{`
    }
    const props = []
    for (const [key, value] of Object.entries(entity.nbt)) {
      if (key === "DelayedAI") continue
      props.push(`${key}:${value}`)
    }
    if (entity.root) {
      nbt += props.join() + "}"
    } else if (props.length) {
      nbt += "," + props.join()
    }
  }

  if (entity.passenger) {
    nbt += `,Passengers:[${makeEntity(entity.passenger, "tag", true)}]`
  }

  nbt += `}`
  return isPassenger ? `{id:"minecraft:${entity.id}",${nbt.slice(1)}` : nbt
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
    let offset = [0, 0, 0]
    if (entity.offset) {
      offset = entity.offset
    }
    let ghastRopes
    if (entity.id === "happy_ghast" && entity.nbt?.equipment?.includes("_with_ropes")) {
      ghastRopes = true
      entity.nbt.equipment = entity.nbt.equipment.replace("_with_ropes", "")
    }
    const entityData = makeEntity(entity, baby)
    commands2.push(`${entity.id === "wither" ? "execute if score global entitytester_wither matches 1 run " : ""}summon ${entity.id} ${x + offset[0]} ${yValue + 1 + offset[1]} ${z + offset[2]} ${entityData}`)
    if (ghastRopes) {
      commands2.push(`summon oak_boat ${x + offset[0]} ${yValue + 1 + offset[1] - 4.35} ${z + offset[2]}`)
      commands2.push(`execute positioned ${x + offset[0]} ${yValue + 1 + offset[1]} ${z + offset[2]} run data modify entity @n[type=oak_boat] leash.UUID set from entity @n[type=happy_ghast] UUID`)
    }
  }
  if (entity.behind) {
    const behind = {
      ...entity.behind,
      id: entity.behind.id ?? entity.id,
      type: entity.behind.type ?? entity.type
    }
    spawnEntity(name, commands, commands2, behind, x, z - 1, baby)
  }
}

function spawnEntities(name, width, rectangleWidth, rectangleLength, entities, large = [], baby) {
  const commands = [`function entitytester:clear_entities_${rectangleWidth}x${rectangleLength}`]
  const commands2 = []

  const largePerRow = getLargeEntitiesPerRow(width)
  const largeRowCount = Math.ceil(large.length / largePerRow)

  if (largeRowCount) {
    const largeStartX = -Math.floor(rectangleWidth / 2) + (rectangleWidth - (largePerRow * 6 - 1)) / 2 + 2
    const largeStartZ = -rectangleLength + 1 + 7

    for (let [i, entity] of large.entries()) {
      let x = largeStartX + (i % largePerRow) * 6
      const z = largeStartZ + Math.floor(i / largePerRow) * 11

      if (Math.ceil((i + 1) / largePerRow) === largeRowCount && large.length % largePerRow) {
        x += (largePerRow * 6 - (large.length % largePerRow) * 6) / 2
      }

      spawnEntity(name, commands, commands2, entity, x, z, baby)
    }
  }

  const startX = -Math.floor(rectangleWidth / 2) + (rectangleWidth - (width * 2 + 1)) / 2 + 1

  let startZ = -rectangleLength + 5
  if (largeRowCount) {
    startZ += largeRowCount * 11 + 1
  }

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
    `fill ${-Math.floor(rectangleWidth / 2)} ${yValue + 1} ${-rectangleLength + 1} ${Math.ceil(rectangleWidth / 2) - 1} ${yValue + 4} 0 air`
  ].join("\n"))
}

function cycle(name, count, regenerate, updateControls = true) {
  const commands = [
    `scoreboard players add global entitytester_${name} 1`,
    `execute if score global entitytester_${name} matches ${count}.. run scoreboard players set global entitytester_${name} 0`
  ]
  if (regenerate === "structure") {
    commands.push("function entitytester:create_structure")
  } else if (regenerate === "entities") {
    commands.push("function entitytester:spawn_entities")
  }
  if (updateControls) {
    commands.push("function entitytester:update_controls")
  }
  fs.writeFileSync(path.join(functions, `cycle_${name}.mcfunction`), commands.join("\n"))
}

cycle("mode", 3, "structure", false)
cycle("sort", 2, "entities")
cycle("variants", 2, "structure", false)
cycle("wither", 2, "entities")

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
{
  const modes = [
    { id: 0, key: "normal" },
    { id: 1, key: "baby" },
    { id: 2, key: "jockey" }
  ]
  const sorts = [
    { id: 0, key: "alphabetical" },
    { id: 1, key: "releasedate" }
  ]
  const variants = [
    { id: 0, prefix: "" },
    { id: 1, prefix: "variants_" }
  ]

  const lines = []
  for (const m of modes) {
    for (const s of sorts) {
      for (const v of variants) {
        lines.push(
          `execute if score global entitytester_mode matches ${m.id} run execute if score global entitytester_sort matches ${s.id} run execute if score global entitytester_variants matches ${v.id} run function entitytester:spawn_${m.key}_${v.prefix}${s.key}_entities`
        )
      }
    }
  }
  lines.push("scoreboard players set global entitytester_entities_loaded 1")

  fs.writeFileSync(path.join(functions, "spawn_entities.mcfunction"), lines.join("\n"))
}

// Create Controls
{
  const edgeMaxZ = 5

  const commands = [
    `setblock -2 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:[{"text":"Instagram","underlined":true,"bold":true},"","@ewan.howell",""]},is_waxed:true}`,
    `setblock -1 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:[{"text":"Website","underlined":true,"bold":true},"","ewanhowell.com",""]},is_waxed:true}`,
    `setblock 0 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:[{"text":"Map By","underlined":true,"bold":true},"","Ewan Howell",""]},is_waxed:true}`,
    `setblock 1 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:[{"text":"YouTube","underlined":true,"bold":true},"","Ewan Howell",""]},is_waxed:true}`,
    `setblock 2 ${yValue + 3} ${edgeMaxZ} oak_wall_sign{front_text:{messages:[{"text":"Twitter","underlined":true,"bold":true},"","@ewanhowell5195",""]},is_waxed:true}`,
    `setblock 3 ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:["","Spawn","Entities",""]},is_waxed:true}`,
    `setblock 2 ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:["","Clear","Entities",""]},is_waxed:true}`,
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
  addControl("cycle_mode", 0)
  addControl("cycle_sort", -1)
  addControl("cycle_variants", -2)
  addControl("cycle_wither", -3)

  fs.writeFileSync(path.join(functions, "create_controls.mcfunction"), commands.join("\n"))
}

// Update Controls
{
  const edgeMaxZ = 5

  const commands = [`fill -3 ${yValue + 1} ${edgeMaxZ} 0 ${yValue + 1} ${edgeMaxZ} air`]

  function addControl(variable, name, options, x) {
    for (let i = 0; i < options.length; i++) {
      const msgs = [
        { text: name, underlined: true, bold: true },
        ...options.map((opt, idx) => ({
          text: opt,
          bold: idx === i,
          color: idx === i ? "white" : undefined
        }))
      ]
      while (msgs.length < 4) {
        msgs.splice(1, 0, "")
      }
      commands.push(
        `execute if score global entitytester_${variable} matches ${i} run setblock ${x} ${yValue + 1} ${edgeMaxZ} oak_wall_sign{front_text:{messages:${JSON.stringify(msgs)}},is_waxed:true}`
      )
    }
  }

  addControl("mode", "Mode", ["Normal", "Babies", "Jockeys"], 0)
  addControl("sort", "Sort", ["Alphabetical", "Release Date"], -1)
  addControl("variants", "Variants", ["Off", "On"], -2)
  addControl("wither", "Spawn Wither", ["Off", "On"], -3)

  fs.writeFileSync(path.join(functions, "update_controls.mcfunction"), commands.join("\n"))
}

// Update Delayed AI
fs.writeFileSync(path.join(functions, "update_delayed_ai.mcfunction"), "execute as @e[type=!minecraft:player] run data merge entity @s {NoAI:1}")

// Variants
function generateVariants(entity) {
  if (entity.type === "block") {
    const blocks = []
    for (const variant of entity.variants) {
      const block = structuredClone(entity)
      delete block.variants
      block.id = variant.id ?? variant
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

      const override = entity.variant_data ??= {}

      const { nbt: overrideNbt = {}, ...otherOverrides } = override

      for (const key in otherOverrides) {
        newEntity[key] = otherOverrides[key]
      }

      newEntity.nbt = Object.fromEntries(
        Object.entries({
          ...overrideNbt,
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

function cartesian(arrays) {
  let res = [[]]
  for (const arr of arrays) {
    const next = []
    for (const r of res) for (const v of arr) next.push(r.concat([v]))
    res = next
  }
  return res
}

function passengerVariantList(entity) {
  if (!entity.variants) return [structuredClone(entity)]
  if (!Array.isArray(entity.variants)) return generateVariants(entity)

  const list = []
  for (const [i, v] of entity.variants.entries()) {
    const e = structuredClone(entity)
    e.variants = v
    if (Array.isArray(entity.variant_data)) e.variant_data = entity.variant_data[i]
    for (const g of generateVariants(e)) list.push(g)
  }
  return list
}

function expandPassengersOnEntity(baseEntity) {
  if (!baseEntity.passenger) return [baseEntity]

  const passengers = Array.isArray(baseEntity.passenger) ? baseEntity.passenger : [baseEntity.passenger]

  const expandedPerSeat = passengers.map(p => {
    const baseVariants = passengerVariantList(p)
    const fullyExpanded = []
    for (const bv of baseVariants) {
      for (const pv of expandPassengersOnEntity(bv)) fullyExpanded.push(pv)
    }
    return fullyExpanded
  })

  const combos = cartesian(expandedPerSeat)

  const results = []
  for (const combo of combos) {
    const clone = structuredClone(baseEntity)
    clone.passenger = passengers.length === 1 ? combo[0] : combo
    results.push(clone)
  }
  return results
}

function anyPassengerHasVariants(p) {
  if (!p) return false
  const arr = Array.isArray(p) ? p : [p]
  for (const e of arr) {
    if (e.variants) return true
    if (e.passenger && anyPassengerHasVariants(e.passenger)) return true
  }
  return false
}

function getVariants(entities) {
  const list = []
  for (const entity of entities) {
    if (!entity.variants && !anyPassengerHasVariants(entity.passenger)) continue
    entity.variants ??= {}

    const prepared = []
    if (entity.type === "block" || !Array.isArray(entity.variants)) {
      prepared.push(entity)
    } else {
      for (const [i, v] of entity.variants.entries()) {
        const e = structuredClone(entity)
        e.variants = v
        if (Array.isArray(entity.variant_data)) e.variant_data = entity.variant_data[i]
        prepared.push(e)
      }
    }

    for (const e of prepared) {
      const variants = generateVariants(e)
      for (const v of variants) {
        for (const withPassengers of expandPassengersOnEntity(v)) {
          list.push(withPassengers)
        }
      }
    }
  }
  return list
}

// Add Types
function addType(type, width, normal, large, baby) {
  const normalWidth = (width * 2) + 7

  const largePerRow = getLargeEntitiesPerRow(width)
  const largeRowCount = Math.ceil(large.length / largePerRow)
  const largeHeight = largeRowCount > 0 ? largeRowCount * 11 + 4 : 3

  const normalLength = Math.ceil(normal.length / width) * 6 + largeHeight

  createStructure(normalWidth, normalLength)
  clearStructure(normalWidth, normalLength)
  createFloor(width, normalWidth, normalLength, normal, large)
  spawnEntities(`${type}_alphabetical`, width, normalWidth, normalLength, normal.slice().sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id)), large, baby)
  spawnEntities(`${type}_releasedate`, width, normalWidth, normalLength, normal, large, baby)
  clearEntities(normalWidth, normalLength)

  return [normalWidth, normalLength]
}

// Normal
const normal = entities.normal.filter(e => !e.variants_only)
const large = entities.large.filter(e => !e.variants_only)
const [normalWidth, normalLength] = addType("normal", 16, normal, large)

// Baby
const baby = entities.baby.filter(e => !e.variants_only)
const [babyWidth, babyLength] = addType("baby", 10, baby, [], true)

// Jockey
const jockey = entities.jockey
const [jockeyWidth, jockeyLength] = addType("jockey", 9, jockey, [], "tag")

// Normal Variants
const normalVariants = getVariants(entities.normal)
const largeVariants = getVariants(entities.large)
const [normalVariantsWidth, normalVariantsLength] = addType("normal_variants", 48, normalVariants, largeVariants)

// Baby Variants
const babyVariants = getVariants(entities.baby)
const [babyVariantsWidth, babyVariantsLength] = addType("baby_variants", 24, babyVariants, [], true)

// Jockey Variants
const jockeyVariants = getVariants(entities.jockey)
const [jockeyVariantsWidth, jockeyVariantsLength] = addType("jockey_variants", 32, jockeyVariants, [], "tag")

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
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_${jockeyWidth}x${jockeyLength}`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_${normalVariantsWidth}x${normalVariantsLength}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_${babyVariantsWidth}x${babyVariantsLength}`,
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_${jockeyVariantsWidth}x${jockeyVariantsLength}`,
  `function entitytester:paste_floor_customisation`,
  "function entitytester:create_floor"
].join("\n"))


// Create Floor
fs.writeFileSync(path.join(functions, "create_floor.mcfunction"), [
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:create_floor_${normalWidth}x${normalLength}_${normal.length}_${large.length}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:create_floor_${babyWidth}x${babyLength}_${baby.length}_0`,
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 0 run function entitytester:create_floor_${jockeyWidth}x${jockeyLength}_${jockey.length}_0`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:create_floor_${normalVariantsWidth}x${normalVariantsLength}_${normalVariants.length}_${largeVariants.length}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:create_floor_${babyVariantsWidth}x${babyVariantsLength}_${babyVariants.length}_0`,
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 1 run function entitytester:create_floor_${jockeyVariantsWidth}x${jockeyVariantsLength}_${jockeyVariants.length}_0`,
  "function entitytester:spawn_entities"
].join("\n"))


// Reset Floor
fs.writeFileSync(path.join(functions, "reset_floor.mcfunction"), [
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-normalLength - 5}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-babyLength - 5}`,
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-jockeyLength - 5}`,
  `execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-normalVariantsLength - 5}`,
  `execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-babyVariantsLength - 5}`,
  `execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 ${yValue + 1} ${-jockeyVariantsLength - 5}`,
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
  "execute if score global entitytester_mode matches 0..2 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_mode 0",
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_sort matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_sort 0",
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_variants matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_variants 0",
  "scoreboard players set global entitytester_temp 0",
  "execute if score global entitytester_wither matches 0..1 run scoreboard players set global entitytester_temp 1",
  "execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_wither 0",
  "function entitytester:spawn_evoker_fangs",
  'tellraw @a "Entity Tester has loaded"'
].join("\n"))

// Tick
fs.writeFileSync(path.join(functions, "tick.mcfunction"), [
  "kill @e[type=item]"
].join("\n"))