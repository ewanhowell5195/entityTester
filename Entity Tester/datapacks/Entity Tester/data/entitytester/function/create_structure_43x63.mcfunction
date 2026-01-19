fill -27 -60 -68 27 -55 6 air
fill -26 -61 -67 26 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -26 -60 -68
place template entitytester:wall_segment 20 -60 -68
place template entitytester:wall_segment -20 -60 6 180
place template entitytester:wall_segment 26 -60 6 180
place template entitytester:wall_segment -27 -60 -61 counterclockwise_90
place template entitytester:wall_segment 27 -60 -67 clockwise_90
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
fill -27 -60 -68 -27 -58 -68 cobblestone_wall
fill 27 -60 -68 27 -58 -68 cobblestone_wall
fill -27 -60 6 -27 -58 6 cobblestone_wall
fill 27 -60 6 27 -58 6 cobblestone_wall
setblock -27 -57 -68 dark_oak_slab
setblock 27 -57 -68 dark_oak_slab
setblock -27 -57 6 dark_oak_slab
setblock 27 -57 6 dark_oak_slab
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
scoreboard players set global entitytester_last_structure 44095
clone -25 -60 -68 -20 -55 -67 -19 -60 -68
clone -25 -60 -68 -20 -55 -67 -13 -60 -68
clone 25 -60 -68 20 -55 -67 14 -60 -68
clone 25 -60 -68 20 -55 -67 8 -60 -68
clone -25 -60 5 -20 -55 6 -19 -60 5
clone -25 -60 5 -20 -55 6 -13 -60 5
clone 25 -60 5 20 -55 6 14 -60 5
clone 25 -60 5 20 -55 6 8 -60 5
clone -27 -60 -66 -26 -55 -61 -27 -60 -60
clone -27 -60 -66 -26 -55 -55 -27 -60 -54
clone -27 -60 -66 -26 -55 -43 -27 -60 -42
clone -27 -60 -66 -26 -55 -43 -27 -60 -18
clone 26 -60 -66 27 -55 -61 26 -60 -60
clone 26 -60 -66 27 -55 -55 26 -60 -54
clone 26 -60 -66 27 -55 -43 26 -60 -42
clone 26 -60 -66 27 -55 -43 26 -60 -18