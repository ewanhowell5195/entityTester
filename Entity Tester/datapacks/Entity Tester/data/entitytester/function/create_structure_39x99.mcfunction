fill -25 -60 -104 25 -55 6 air
fill -24 -61 -103 24 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -24 -60 -104
place template entitytester:wall_segment 18 -60 -104
place template entitytester:wall_segment -18 -60 6 180
place template entitytester:wall_segment 24 -60 6 180
place template entitytester:wall_segment -25 -60 -97 counterclockwise_90
place template entitytester:wall_segment 25 -60 -103 clockwise_90
place template entitytester:wall_edge -5 -60 -104
place template entitytester:wall_edge 5 -60 -104 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -104 2 -58 -104 cobblestone
fill -2 -57 -103 2 -57 -103 spruce_log[axis=x]
fill -2 -57 -104 2 -57 -104 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -25 -60 -104 -25 -58 -104 cobblestone_wall
fill 25 -60 -104 25 -58 -104 cobblestone_wall
fill -25 -60 6 -25 -58 6 cobblestone_wall
fill 25 -60 6 25 -58 6 cobblestone_wall
setblock -25 -57 -104 dark_oak_slab
setblock 25 -57 -104 dark_oak_slab
setblock -25 -57 6 dark_oak_slab
setblock 25 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -104
setblock -4 -59 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -103 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -104 spruce_log[axis=z]
setblock 1 -58 -104 spruce_log[axis=z]
setblock -1 -58 -103 stone_button[facing=south]
setblock 1 -58 -103 stone_button[facing=south]
setblock -1 -58 -105 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -105 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 40035
clone -23 -60 -104 -18 -55 -103 -17 -60 -104
clone -23 -60 -104 -18 -55 -103 -11 -60 -104
clone 23 -60 -104 18 -55 -103 12 -60 -104
clone 23 -60 -104 18 -55 -103 6 -60 -104
clone -23 -60 5 -18 -55 6 -17 -60 5
clone -23 -60 5 -18 -55 6 -11 -60 5
clone 23 -60 5 18 -55 6 12 -60 5
clone 23 -60 5 18 -55 6 6 -60 5
clone -25 -60 -102 -24 -55 -97 -25 -60 -96
clone -25 -60 -102 -24 -55 -91 -25 -60 -90
clone -25 -60 -102 -24 -55 -79 -25 -60 -78
clone -25 -60 -102 -24 -55 -55 -25 -60 -54
clone -25 -60 -102 -24 -55 -91 -25 -60 -6
clone 24 -60 -102 25 -55 -97 24 -60 -96
clone 24 -60 -102 25 -55 -91 24 -60 -90
clone 24 -60 -102 25 -55 -79 24 -60 -78
clone 24 -60 -102 25 -55 -55 24 -60 -54
clone 24 -60 -102 25 -55 -91 24 -60 -6