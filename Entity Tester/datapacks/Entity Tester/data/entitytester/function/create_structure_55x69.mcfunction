fill -33 -60 -74 33 -55 6 air
fill -32 -61 -73 32 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -32 -60 -74
place template entitytester:wall_segment 26 -60 -74
place template entitytester:wall_segment -26 -60 6 180
place template entitytester:wall_segment 32 -60 6 180
place template entitytester:wall_segment -33 -60 -67 counterclockwise_90
place template entitytester:wall_segment 33 -60 -73 clockwise_90
place template entitytester:wall_edge -7 -60 -74
place template entitytester:wall_edge 7 -60 -74 none front_back
place template entitytester:wall_edge -7 -60 6 180 front_back
place template entitytester:wall_edge 7 -60 6 180
fill -4 -60 -74 4 -58 -74 cobblestone
fill -4 -57 -73 4 -57 -73 spruce_log[axis=x]
fill -4 -57 -74 4 -57 -74 dark_oak_stairs[facing=south]
fill -4 -60 6 4 -58 6 cobblestone
fill -4 -57 5 4 -57 5 spruce_log[axis=x]
fill -4 -57 6 4 -57 6 dark_oak_stairs
fill -33 -60 -74 -33 -58 -74 cobblestone_wall
fill 33 -60 -74 33 -58 -74 cobblestone_wall
fill -33 -60 6 -33 -58 6 cobblestone_wall
fill 33 -60 6 33 -58 6 cobblestone_wall
setblock -33 -57 -74 dark_oak_slab
setblock 33 -57 -74 dark_oak_slab
setblock -33 -57 6 dark_oak_slab
setblock 33 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -74
setblock -4 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -73 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -74 spruce_log[axis=z]
setblock 1 -58 -74 spruce_log[axis=z]
setblock -1 -58 -73 stone_button[facing=south]
setblock 1 -58 -73 stone_button[facing=south]
setblock -1 -58 -75 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -75 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 56389
clone -31 -60 -74 -26 -55 -73 -25 -60 -74
clone -31 -60 -74 -20 -55 -73 -19 -60 -74
clone 31 -60 -74 26 -55 -73 20 -60 -74
clone 31 -60 -74 20 -55 -73 8 -60 -74
clone -31 -60 5 -26 -55 6 -25 -60 5
clone -31 -60 5 -20 -55 6 -19 -60 5
clone 31 -60 5 26 -55 6 20 -60 5
clone 31 -60 5 20 -55 6 8 -60 5
clone -33 -60 -72 -32 -55 -67 -33 -60 -66
clone -33 -60 -72 -32 -55 -61 -33 -60 -60
clone -33 -60 -72 -32 -55 -49 -33 -60 -48
clone -33 -60 -72 -32 -55 -43 -33 -60 -24
clone 32 -60 -72 33 -55 -67 32 -60 -66
clone 32 -60 -72 33 -55 -61 32 -60 -60
clone 32 -60 -72 33 -55 -49 32 -60 -48
clone 32 -60 -72 33 -55 -43 32 -60 -24