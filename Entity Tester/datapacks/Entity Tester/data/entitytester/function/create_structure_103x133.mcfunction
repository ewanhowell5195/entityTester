fill -57 -60 -138 57 -55 6 air
fill -56 -61 -137 56 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -56 -60 -138
place template entitytester:wall_segment 50 -60 -138
place template entitytester:wall_segment -50 -60 6 180
place template entitytester:wall_segment 56 -60 6 180
place template entitytester:wall_segment -57 -60 -131 counterclockwise_90
place template entitytester:wall_segment 57 -60 -137 clockwise_90
place template entitytester:wall_edge -7 -60 -138
place template entitytester:wall_edge 7 -60 -138 none front_back
place template entitytester:wall_edge -7 -60 6 180 front_back
place template entitytester:wall_edge 7 -60 6 180
fill -4 -60 -138 4 -58 -138 cobblestone
fill -4 -57 -137 4 -57 -137 spruce_log[axis=x]
fill -4 -57 -138 4 -57 -138 dark_oak_stairs[facing=south]
fill -4 -60 6 4 -58 6 cobblestone
fill -4 -57 5 4 -57 5 spruce_log[axis=x]
fill -4 -57 6 4 -57 6 dark_oak_stairs
fill -57 -60 -138 -57 -58 -138 cobblestone_wall
fill 57 -60 -138 57 -58 -138 cobblestone_wall
fill -57 -60 6 -57 -58 6 cobblestone_wall
fill 57 -60 6 57 -58 6 cobblestone_wall
setblock -57 -57 -138 dark_oak_slab
setblock 57 -57 -138 dark_oak_slab
setblock -57 -57 6 dark_oak_slab
setblock 57 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -138
setblock -4 -59 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -137 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -138 spruce_log[axis=z]
setblock 1 -58 -138 spruce_log[axis=z]
setblock -1 -58 -137 stone_button[facing=south]
setblock 1 -58 -137 stone_button[facing=south]
setblock -1 -58 -139 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -139 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 105605
clone -55 -60 -138 -50 -55 -137 -49 -60 -138
clone -55 -60 -138 -44 -55 -137 -43 -60 -138
clone -55 -60 -138 -32 -55 -137 -31 -60 -138
clone 55 -60 -138 50 -55 -137 44 -60 -138
clone 55 -60 -138 44 -55 -137 32 -60 -138
clone 55 -60 -138 32 -55 -137 8 -60 -138
clone -55 -60 5 -50 -55 6 -49 -60 5
clone -55 -60 5 -44 -55 6 -43 -60 5
clone -55 -60 5 -32 -55 6 -31 -60 5
clone 55 -60 5 50 -55 6 44 -60 5
clone 55 -60 5 44 -55 6 32 -60 5
clone 55 -60 5 32 -55 6 8 -60 5
clone -57 -60 -136 -56 -55 -131 -57 -60 -130
clone -57 -60 -136 -56 -55 -125 -57 -60 -124
clone -57 -60 -136 -56 -55 -113 -57 -60 -112
clone -57 -60 -136 -56 -55 -89 -57 -60 -88
clone -57 -60 -136 -56 -55 -91 -57 -60 -40
clone 56 -60 -136 57 -55 -131 56 -60 -130
clone 56 -60 -136 57 -55 -125 56 -60 -124
clone 56 -60 -136 57 -55 -113 56 -60 -112
clone 56 -60 -136 57 -55 -89 56 -60 -88
clone 56 -60 -136 57 -55 -91 56 -60 -40