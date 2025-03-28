fill -43 -60 -134 43 -55 6 air
fill -42 -61 -133 42 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -42 -60 -134
place template entitytester:wall_segment 36 -60 -134
place template entitytester:wall_segment -36 -60 6 180
place template entitytester:wall_segment 42 -60 6 180
place template entitytester:wall_segment -43 -60 -127 counterclockwise_90
place template entitytester:wall_segment 43 -60 -133 clockwise_90
place template entitytester:wall_edge -5 -60 -134
place template entitytester:wall_edge 5 -60 -134 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -134 2 -58 -134 cobblestone
fill -2 -57 -133 2 -57 -133 spruce_log[axis=x]
fill -2 -57 -134 2 -57 -134 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -43 -60 -134 -43 -58 -134 cobblestone_wall
fill 43 -60 -134 43 -58 -134 cobblestone_wall
fill -43 -60 6 -43 -58 6 cobblestone_wall
fill 43 -60 6 43 -58 6 cobblestone_wall
setblock -43 -57 -134 dark_oak_slab
setblock 43 -57 -134 dark_oak_slab
setblock -43 -57 6 dark_oak_slab
setblock 43 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -134
setblock -4 -59 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -133 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -134 spruce_log[axis=z]
setblock 1 -58 -134 spruce_log[axis=z]
setblock -1 -58 -133 stone_button[facing=south]
setblock 1 -58 -133 stone_button[facing=south]
setblock -1 -58 -135 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -135 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 76929
clone -41 -60 -134 -36 -55 -133 -35 -60 -134
clone -41 -60 -134 -30 -55 -133 -29 -60 -134
clone -41 -60 -134 -30 -55 -133 -17 -60 -134
clone 41 -60 -134 36 -55 -133 30 -60 -134
clone 41 -60 -134 30 -55 -133 18 -60 -134
clone 41 -60 -134 30 -55 -133 6 -60 -134
clone -41 -60 5 -36 -55 6 -35 -60 5
clone -41 -60 5 -30 -55 6 -29 -60 5
clone -41 -60 5 -30 -55 6 -17 -60 5
clone 41 -60 5 36 -55 6 30 -60 5
clone 41 -60 5 30 -55 6 18 -60 5
clone 41 -60 5 30 -55 6 6 -60 5
clone -43 -60 -132 -42 -55 -127 -43 -60 -126
clone -43 -60 -132 -42 -55 -121 -43 -60 -120
clone -43 -60 -132 -42 -55 -109 -43 -60 -108
clone -43 -60 -132 -42 -55 -85 -43 -60 -84
clone -43 -60 -132 -42 -55 -91 -43 -60 -36
clone 42 -60 -132 43 -55 -127 42 -60 -126
clone 42 -60 -132 43 -55 -121 42 -60 -120
clone 42 -60 -132 43 -55 -109 42 -60 -108
clone 42 -60 -132 43 -55 -85 42 -60 -84
clone 42 -60 -132 43 -55 -91 42 -60 -36