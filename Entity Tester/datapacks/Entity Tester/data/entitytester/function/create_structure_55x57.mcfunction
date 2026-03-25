fill -33 -60 -62 33 -55 6 air
fill -32 -61 -61 32 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -32 -60 -62
place template entitytester:wall_segment 26 -60 -62
place template entitytester:wall_segment -26 -60 6 180
place template entitytester:wall_segment 32 -60 6 180
place template entitytester:wall_segment -33 -60 -55 counterclockwise_90
place template entitytester:wall_segment 33 -60 -61 clockwise_90
place template entitytester:wall_edge -7 -60 -62
place template entitytester:wall_edge 7 -60 -62 none front_back
place template entitytester:wall_edge -7 -60 6 180 front_back
place template entitytester:wall_edge 7 -60 6 180
fill -4 -60 -62 4 -58 -62 cobblestone
fill -4 -57 -61 4 -57 -61 spruce_log[axis=x]
fill -4 -57 -62 4 -57 -62 dark_oak_stairs[facing=south]
fill -4 -60 6 4 -58 6 cobblestone
fill -4 -57 5 4 -57 5 spruce_log[axis=x]
fill -4 -57 6 4 -57 6 dark_oak_stairs
fill -33 -60 -62 -33 -58 -62 cobblestone_wall
fill 33 -60 -62 33 -58 -62 cobblestone_wall
fill -33 -60 6 -33 -58 6 cobblestone_wall
fill 33 -60 6 33 -58 6 cobblestone_wall
setblock -33 -57 -62 dark_oak_slab
setblock 33 -57 -62 dark_oak_slab
setblock -33 -57 6 dark_oak_slab
setblock 33 -57 6 dark_oak_slab
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
scoreboard players set global entitytester_last_structure 56377
clone -31 -60 -62 -26 -55 -61 -25 -60 -62
clone -31 -60 -62 -20 -55 -61 -19 -60 -62
clone 31 -60 -62 26 -55 -61 20 -60 -62
clone 31 -60 -62 20 -55 -61 8 -60 -62
clone -31 -60 5 -26 -55 6 -25 -60 5
clone -31 -60 5 -20 -55 6 -19 -60 5
clone 31 -60 5 26 -55 6 20 -60 5
clone 31 -60 5 20 -55 6 8 -60 5
clone -33 -60 -60 -32 -55 -55 -33 -60 -54
clone -33 -60 -60 -32 -55 -49 -33 -60 -48
clone -33 -60 -60 -32 -55 -37 -33 -60 -36
clone -33 -60 -60 -32 -55 -43 -33 -60 -12
clone 32 -60 -60 33 -55 -55 32 -60 -54
clone 32 -60 -60 33 -55 -49 32 -60 -48
clone 32 -60 -60 33 -55 -37 32 -60 -36
clone 32 -60 -60 33 -55 -43 32 -60 -12