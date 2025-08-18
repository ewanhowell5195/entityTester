fill -41 -60 -62 41 -55 6 air
fill -40 -61 -61 40 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -40 -60 -62
place template entitytester:wall_segment 34 -60 -62
place template entitytester:wall_segment -34 -60 6 180
place template entitytester:wall_segment 40 -60 6 180
place template entitytester:wall_segment -41 -60 -55 counterclockwise_90
place template entitytester:wall_segment 41 -60 -61 clockwise_90
place template entitytester:wall_edge -9 -60 -62
place template entitytester:wall_edge 9 -60 -62 none front_back
place template entitytester:wall_edge -9 -60 6 180 front_back
place template entitytester:wall_edge 9 -60 6 180
fill -6 -60 -62 6 -58 -62 cobblestone
fill -6 -57 -61 6 -57 -61 spruce_log[axis=x]
fill -6 -57 -62 6 -57 -62 dark_oak_stairs[facing=south]
fill -6 -60 6 6 -58 6 cobblestone
fill -6 -57 5 6 -57 5 spruce_log[axis=x]
fill -6 -57 6 6 -57 6 dark_oak_stairs
fill -41 -60 -62 -41 -58 -62 cobblestone_wall
fill 41 -60 -62 41 -58 -62 cobblestone_wall
fill -41 -60 6 -41 -58 6 cobblestone_wall
fill 41 -60 6 41 -58 6 cobblestone_wall
setblock -41 -57 -62 dark_oak_slab
setblock 41 -57 -62 dark_oak_slab
setblock -41 -57 6 dark_oak_slab
setblock 41 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -62
setblock -4 -59 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -61 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -62 spruce_log[axis=z]
setblock 1 -58 -62 spruce_log[axis=z]
setblock -1 -58 -61 stone_button[facing=south]
setblock 1 -58 -61 stone_button[facing=south]
setblock -1 -58 -63 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -63 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 72761
clone -39 -60 -62 -34 -55 -61 -33 -60 -62
clone -39 -60 -62 -28 -55 -61 -27 -60 -62
clone -39 -60 -62 -34 -55 -61 -15 -60 -62
clone 39 -60 -62 34 -55 -61 28 -60 -62
clone 39 -60 -62 28 -55 -61 16 -60 -62
clone 39 -60 -62 34 -55 -61 10 -60 -62
clone -39 -60 5 -34 -55 6 -33 -60 5
clone -39 -60 5 -28 -55 6 -27 -60 5
clone -39 -60 5 -34 -55 6 -15 -60 5
clone 39 -60 5 34 -55 6 28 -60 5
clone 39 -60 5 28 -55 6 16 -60 5
clone 39 -60 5 34 -55 6 10 -60 5
clone -41 -60 -60 -40 -55 -55 -41 -60 -54
clone -41 -60 -60 -40 -55 -49 -41 -60 -48
clone -41 -60 -60 -40 -55 -37 -41 -60 -36
clone -41 -60 -60 -40 -55 -43 -41 -60 -12
clone 40 -60 -60 41 -55 -55 40 -60 -54
clone 40 -60 -60 41 -55 -49 40 -60 -48
clone 40 -60 -60 41 -55 -37 40 -60 -36
clone 40 -60 -60 41 -55 -43 40 -60 -12