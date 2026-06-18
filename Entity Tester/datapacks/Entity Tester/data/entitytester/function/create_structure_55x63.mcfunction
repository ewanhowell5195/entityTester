fill -33 -60 -68 33 -55 6 air
fill -32 -61 -67 32 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -32 -60 -68
place template entitytester:wall_segment 26 -60 -68
place template entitytester:wall_segment -26 -60 6 180
place template entitytester:wall_segment 32 -60 6 180
place template entitytester:wall_segment -33 -60 -61 counterclockwise_90
place template entitytester:wall_segment 33 -60 -67 clockwise_90
place template entitytester:wall_edge -7 -60 -68
place template entitytester:wall_edge 7 -60 -68 none front_back
place template entitytester:wall_edge -7 -60 6 180 front_back
place template entitytester:wall_edge 7 -60 6 180
fill -4 -60 -68 4 -58 -68 cobblestone
fill -4 -57 -67 4 -57 -67 spruce_log[axis=x]
fill -4 -57 -68 4 -57 -68 dark_oak_stairs[facing=south]
fill -4 -60 6 4 -58 6 cobblestone
fill -4 -57 5 4 -57 5 spruce_log[axis=x]
fill -4 -57 6 4 -57 6 dark_oak_stairs
fill -33 -60 -68 -33 -58 -68 cobblestone_wall
fill 33 -60 -68 33 -58 -68 cobblestone_wall
fill -33 -60 6 -33 -58 6 cobblestone_wall
fill 33 -60 6 33 -58 6 cobblestone_wall
setblock -33 -57 -68 dark_oak_slab
setblock 33 -57 -68 dark_oak_slab
setblock -33 -57 6 dark_oak_slab
setblock 33 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -68
setblock -4 -59 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -67 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -68 spruce_log[axis=z]
setblock 1 -58 -68 spruce_log[axis=z]
setblock -1 -58 -67 stone_button[facing=south]
setblock 1 -58 -67 stone_button[facing=south]
setblock -1 -58 -69 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -69 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 56383
clone -31 -60 -68 -26 -55 -67 -25 -60 -68
clone -31 -60 -68 -20 -55 -67 -19 -60 -68
clone 31 -60 -68 26 -55 -67 20 -60 -68
clone 31 -60 -68 20 -55 -67 8 -60 -68
clone -31 -60 5 -26 -55 6 -25 -60 5
clone -31 -60 5 -20 -55 6 -19 -60 5
clone 31 -60 5 26 -55 6 20 -60 5
clone 31 -60 5 20 -55 6 8 -60 5
clone -33 -60 -66 -32 -55 -61 -33 -60 -60
clone -33 -60 -66 -32 -55 -55 -33 -60 -54
clone -33 -60 -66 -32 -55 -43 -33 -60 -42
clone -33 -60 -66 -32 -55 -43 -33 -60 -18
clone 32 -60 -66 33 -55 -61 32 -60 -60
clone 32 -60 -66 33 -55 -55 32 -60 -54
clone 32 -60 -66 33 -55 -43 32 -60 -42
clone 32 -60 -66 33 -55 -43 32 -60 -18