fill -57 -60 -132 57 -55 6 air
fill -56 -61 -131 56 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -56 -60 -132
place template entitytester:wall_segment 50 -60 -132
place template entitytester:wall_segment -50 -60 6 180
place template entitytester:wall_segment 56 -60 6 180
place template entitytester:wall_segment -57 -60 -125 counterclockwise_90
place template entitytester:wall_segment 57 -60 -131 clockwise_90
place template entitytester:wall_edge -7 -60 -132
place template entitytester:wall_edge 7 -60 -132 none front_back
place template entitytester:wall_edge -7 -60 6 180 front_back
place template entitytester:wall_edge 7 -60 6 180
fill -4 -60 -132 4 -58 -132 cobblestone
fill -4 -57 -131 4 -57 -131 spruce_log[axis=x]
fill -4 -57 -132 4 -57 -132 dark_oak_stairs[facing=south]
fill -4 -60 6 4 -58 6 cobblestone
fill -4 -57 5 4 -57 5 spruce_log[axis=x]
fill -4 -57 6 4 -57 6 dark_oak_stairs
fill -57 -60 -132 -57 -58 -132 cobblestone_wall
fill 57 -60 -132 57 -58 -132 cobblestone_wall
fill -57 -60 6 -57 -58 6 cobblestone_wall
fill 57 -60 6 57 -58 6 cobblestone_wall
setblock -57 -57 -132 dark_oak_slab
setblock 57 -57 -132 dark_oak_slab
setblock -57 -57 6 dark_oak_slab
setblock 57 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -132
setblock -4 -59 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -131 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -132 spruce_log[axis=z]
setblock 1 -58 -132 spruce_log[axis=z]
setblock -1 -58 -131 stone_button[facing=south]
setblock 1 -58 -131 stone_button[facing=south]
setblock -1 -58 -133 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -133 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 105599
clone -55 -60 -132 -50 -55 -131 -49 -60 -132
clone -55 -60 -132 -44 -55 -131 -43 -60 -132
clone -55 -60 -132 -32 -55 -131 -31 -60 -132
clone 55 -60 -132 50 -55 -131 44 -60 -132
clone 55 -60 -132 44 -55 -131 32 -60 -132
clone 55 -60 -132 32 -55 -131 8 -60 -132
clone -55 -60 5 -50 -55 6 -49 -60 5
clone -55 -60 5 -44 -55 6 -43 -60 5
clone -55 -60 5 -32 -55 6 -31 -60 5
clone 55 -60 5 50 -55 6 44 -60 5
clone 55 -60 5 44 -55 6 32 -60 5
clone 55 -60 5 32 -55 6 8 -60 5
clone -57 -60 -130 -56 -55 -125 -57 -60 -124
clone -57 -60 -130 -56 -55 -119 -57 -60 -118
clone -57 -60 -130 -56 -55 -107 -57 -60 -106
clone -57 -60 -130 -56 -55 -83 -57 -60 -82
clone -57 -60 -130 -56 -55 -91 -57 -60 -34
clone 56 -60 -130 57 -55 -125 56 -60 -124
clone 56 -60 -130 57 -55 -119 56 -60 -118
clone 56 -60 -130 57 -55 -107 56 -60 -106
clone 56 -60 -130 57 -55 -83 56 -60 -82
clone 56 -60 -130 57 -55 -91 56 -60 -34