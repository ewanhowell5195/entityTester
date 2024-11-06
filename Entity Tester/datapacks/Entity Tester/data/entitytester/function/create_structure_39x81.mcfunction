fill -25 -60 -86 25 -55 6 air
fill -24 -61 -85 24 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -24 -60 -86
place template entitytester:wall_segment 18 -60 -86
place template entitytester:wall_segment -18 -60 6 180
place template entitytester:wall_segment 24 -60 6 180
place template entitytester:wall_segment -25 -60 -79 counterclockwise_90
place template entitytester:wall_segment 25 -60 -85 clockwise_90
place template entitytester:wall_edge -5 -60 -86
place template entitytester:wall_edge 5 -60 -86 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -86 2 -58 -86 cobblestone
fill -2 -57 -85 2 -57 -85 spruce_log[axis=x]
fill -2 -57 -86 2 -57 -86 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -25 -60 -86 -25 -58 -86 cobblestone_wall
fill 25 -60 -86 25 -58 -86 cobblestone_wall
fill -25 -60 6 -25 -58 6 cobblestone_wall
fill 25 -60 6 25 -58 6 cobblestone_wall
setblock -25 -57 -86 dark_oak_slab
setblock 25 -57 -86 dark_oak_slab
setblock -25 -57 6 dark_oak_slab
setblock 25 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -86
setblock -4 -59 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Border"','"Corners"','""']},is_waxed:true}
setblock -2 -59 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"West -> East"','"Borders"','""']},is_waxed:true}
setblock 0 -59 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Main"','"Floor"','""']},is_waxed:true}
setblock 2 -59 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"North -> South"','"Borders"','""']},is_waxed:true}
setblock 4 -59 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Entity"','"Platforms"','""']},is_waxed:true}
setblock -2 -58 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Load"','"Floor"','""']},is_waxed:true}
setblock 2 -58 -85 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Reset"','"Floor"','""']},is_waxed:true}
setblock -1 -58 -86 spruce_log[axis=z]
setblock 1 -58 -86 spruce_log[axis=z]
setblock -1 -58 -85 stone_button[facing=south]
setblock 1 -58 -85 stone_button[facing=south]
setblock -1 -58 -87 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -87 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 40017
clone -23 -60 -86 -18 -55 -85 -17 -60 -86
clone -23 -60 -86 -18 -55 -85 -11 -60 -86
clone 23 -60 -86 18 -55 -85 12 -60 -86
clone 23 -60 -86 18 -55 -85 6 -60 -86
clone -23 -60 5 -18 -55 6 -17 -60 5
clone -23 -60 5 -18 -55 6 -11 -60 5
clone 23 -60 5 18 -55 6 12 -60 5
clone 23 -60 5 18 -55 6 6 -60 5
clone -25 -60 -84 -24 -55 -79 -25 -60 -78
clone -25 -60 -84 -24 -55 -73 -25 -60 -72
clone -25 -60 -84 -24 -55 -61 -25 -60 -60
clone -25 -60 -84 -24 -55 -43 -25 -60 -36
clone 24 -60 -84 25 -55 -79 24 -60 -78
clone 24 -60 -84 25 -55 -73 24 -60 -72
clone 24 -60 -84 25 -55 -61 24 -60 -60
clone 24 -60 -84 25 -55 -43 24 -60 -36