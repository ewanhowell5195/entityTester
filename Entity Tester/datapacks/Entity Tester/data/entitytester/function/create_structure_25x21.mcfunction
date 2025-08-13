fill -18 -60 -26 18 -55 6 air
fill -17 -61 -25 17 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -17 -60 -26
place template entitytester:wall_segment 11 -60 -26
place template entitytester:wall_segment -11 -60 6 180
place template entitytester:wall_segment 17 -60 6 180
place template entitytester:wall_segment -18 -60 -19 counterclockwise_90
place template entitytester:wall_segment 18 -60 -25 clockwise_90
place template entitytester:wall_edge -10 -60 -26
place template entitytester:wall_edge 10 -60 -26 none front_back
place template entitytester:wall_edge -10 -60 6 180 front_back
place template entitytester:wall_edge 10 -60 6 180
fill -7 -60 -26 7 -58 -26 cobblestone
fill -7 -57 -25 7 -57 -25 spruce_log[axis=x]
fill -7 -57 -26 7 -57 -26 dark_oak_stairs[facing=south]
fill -7 -60 6 7 -58 6 cobblestone
fill -7 -57 5 7 -57 5 spruce_log[axis=x]
fill -7 -57 6 7 -57 6 dark_oak_stairs
fill -18 -60 -26 -18 -58 -26 cobblestone_wall
fill 18 -60 -26 18 -58 -26 cobblestone_wall
fill -18 -60 6 -18 -58 6 cobblestone_wall
fill 18 -60 6 18 -58 6 cobblestone_wall
setblock -18 -57 -26 dark_oak_slab
setblock 18 -57 -26 dark_oak_slab
setblock -18 -57 6 dark_oak_slab
setblock 18 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -26
setblock -4 -59 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -25 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -26 spruce_log[axis=z]
setblock 1 -58 -26 spruce_log[axis=z]
setblock -1 -58 -25 stone_button[facing=south]
setblock 1 -58 -25 stone_button[facing=south]
setblock -1 -58 -27 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -27 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 25621
clone -18 -60 -24 -17 -55 -19 -18 -60 -18
clone -18 -60 -24 -17 -55 -13 -18 -60 -12
clone -18 -60 -24 -17 -55 -19 -18 -60 0
clone 17 -60 -24 18 -55 -19 17 -60 -18
clone 17 -60 -24 18 -55 -13 17 -60 -12
clone 17 -60 -24 18 -55 -19 17 -60 0