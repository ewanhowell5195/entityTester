fill -25 -60 -68 25 -55 6 air
fill -24 -61 -67 24 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -24 -60 -68
place template entitytester:wall_segment 18 -60 -68
place template entitytester:wall_segment -18 -60 6 180
place template entitytester:wall_segment 24 -60 6 180
place template entitytester:wall_segment -25 -60 -61 counterclockwise_90
place template entitytester:wall_segment 25 -60 -67 clockwise_90
place template entitytester:wall_edge -5 -60 -68
place template entitytester:wall_edge 5 -60 -68 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -68 2 -58 -68 cobblestone
fill -2 -57 -67 2 -57 -67 spruce_log[axis=x]
fill -2 -57 -68 2 -57 -68 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -25 -60 -68 -25 -58 -68 cobblestone_wall
fill 25 -60 -68 25 -58 -68 cobblestone_wall
fill -25 -60 6 -25 -58 6 cobblestone_wall
fill 25 -60 6 25 -58 6 cobblestone_wall
setblock -25 -57 -68 dark_oak_slab
setblock 25 -57 -68 dark_oak_slab
setblock -25 -57 6 dark_oak_slab
setblock 25 -57 6 dark_oak_slab
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
scoreboard players set global entitytester_last_structure 39999
clone -23 -60 -68 -18 -55 -67 -17 -60 -68
clone -23 -60 -68 -18 -55 -67 -11 -60 -68
clone 23 -60 -68 18 -55 -67 12 -60 -68
clone 23 -60 -68 18 -55 -67 6 -60 -68
clone -23 -60 5 -18 -55 6 -17 -60 5
clone -23 -60 5 -18 -55 6 -11 -60 5
clone 23 -60 5 18 -55 6 12 -60 5
clone 23 -60 5 18 -55 6 6 -60 5
clone -25 -60 -66 -24 -55 -61 -25 -60 -60
clone -25 -60 -66 -24 -55 -55 -25 -60 -54
clone -25 -60 -66 -24 -55 -43 -25 -60 -42
clone -25 -60 -66 -24 -55 -43 -25 -60 -18
clone 24 -60 -66 25 -55 -61 24 -60 -60
clone 24 -60 -66 25 -55 -55 24 -60 -54
clone 24 -60 -66 25 -55 -43 24 -60 -42
clone 24 -60 -66 25 -55 -43 24 -60 -18