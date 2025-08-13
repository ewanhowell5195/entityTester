fill -41 -60 -56 41 -55 6 air
fill -40 -61 -55 40 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -40 -60 -56
place template entitytester:wall_segment 34 -60 -56
place template entitytester:wall_segment -34 -60 6 180
place template entitytester:wall_segment 40 -60 6 180
place template entitytester:wall_segment -41 -60 -49 counterclockwise_90
place template entitytester:wall_segment 41 -60 -55 clockwise_90
place template entitytester:wall_edge -9 -60 -56
place template entitytester:wall_edge 9 -60 -56 none front_back
place template entitytester:wall_edge -9 -60 6 180 front_back
place template entitytester:wall_edge 9 -60 6 180
fill -6 -60 -56 6 -58 -56 cobblestone
fill -6 -57 -55 6 -57 -55 spruce_log[axis=x]
fill -6 -57 -56 6 -57 -56 dark_oak_stairs[facing=south]
fill -6 -60 6 6 -58 6 cobblestone
fill -6 -57 5 6 -57 5 spruce_log[axis=x]
fill -6 -57 6 6 -57 6 dark_oak_stairs
fill -41 -60 -56 -41 -58 -56 cobblestone_wall
fill 41 -60 -56 41 -58 -56 cobblestone_wall
fill -41 -60 6 -41 -58 6 cobblestone_wall
fill 41 -60 6 41 -58 6 cobblestone_wall
setblock -41 -57 -56 dark_oak_slab
setblock 41 -57 -56 dark_oak_slab
setblock -41 -57 6 dark_oak_slab
setblock 41 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -56
setblock -4 -59 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","Border","Corners",""]},is_waxed:true}
setblock -2 -59 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","West -> East","Borders",""]},is_waxed:true}
setblock 0 -59 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","Main","Floor",""]},is_waxed:true}
setblock 2 -59 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","North -> South","Borders",""]},is_waxed:true}
setblock 4 -59 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","Entity","Platforms",""]},is_waxed:true}
setblock -2 -58 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","Load","Floor",""]},is_waxed:true}
setblock 2 -58 -55 oak_wall_sign[facing="south"]{front_text:{messages:["","Reset","Floor",""]},is_waxed:true}
setblock -1 -58 -56 spruce_log[axis=z]
setblock 1 -58 -56 spruce_log[axis=z]
setblock -1 -58 -55 stone_button[facing=south]
setblock 1 -58 -55 stone_button[facing=south]
setblock -1 -58 -57 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -57 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 72755
clone -39 -60 -56 -34 -55 -55 -33 -60 -56
clone -39 -60 -56 -28 -55 -55 -27 -60 -56
clone -39 -60 -56 -34 -55 -55 -15 -60 -56
clone 39 -60 -56 34 -55 -55 28 -60 -56
clone 39 -60 -56 28 -55 -55 16 -60 -56
clone 39 -60 -56 34 -55 -55 10 -60 -56
clone -39 -60 5 -34 -55 6 -33 -60 5
clone -39 -60 5 -28 -55 6 -27 -60 5
clone -39 -60 5 -34 -55 6 -15 -60 5
clone 39 -60 5 34 -55 6 28 -60 5
clone 39 -60 5 28 -55 6 16 -60 5
clone 39 -60 5 34 -55 6 10 -60 5
clone -41 -60 -54 -40 -55 -49 -41 -60 -48
clone -41 -60 -54 -40 -55 -43 -41 -60 -42
clone -41 -60 -54 -40 -55 -31 -41 -60 -30
clone -41 -60 -54 -40 -55 -43 -41 -60 -6
clone 40 -60 -54 41 -55 -49 40 -60 -48
clone 40 -60 -54 41 -55 -43 40 -60 -42
clone 40 -60 -54 41 -55 -31 40 -60 -30
clone 40 -60 -54 41 -55 -43 40 -60 -6