fill -25 -60 -74 25 -55 6 air
fill -24 -61 -73 24 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -24 -60 -74
place template entitytester:wall_segment 18 -60 -74
place template entitytester:wall_segment -18 -60 6 180
place template entitytester:wall_segment 24 -60 6 180
place template entitytester:wall_segment -25 -60 -67 counterclockwise_90
place template entitytester:wall_segment 25 -60 -73 clockwise_90
place template entitytester:wall_edge -5 -60 -74
place template entitytester:wall_edge 5 -60 -74 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -74 2 -58 -74 cobblestone
fill -2 -57 -73 2 -57 -73 spruce_log[axis=x]
fill -2 -57 -74 2 -57 -74 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -25 -60 -74 -25 -58 -74 cobblestone_wall
fill 25 -60 -74 25 -58 -74 cobblestone_wall
fill -25 -60 6 -25 -58 6 cobblestone_wall
fill 25 -60 6 25 -58 6 cobblestone_wall
setblock -25 -57 -74 dark_oak_slab
setblock 25 -57 -74 dark_oak_slab
setblock -25 -57 6 dark_oak_slab
setblock 25 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -74
setblock -4 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Border"','"Corners"','""']},is_waxed:true}
setblock -2 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"West -> East"','"Borders"','""']},is_waxed:true}
setblock 0 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Main"','"Floor"','""']},is_waxed:true}
setblock 2 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"North -> South"','"Borders"','""']},is_waxed:true}
setblock 4 -59 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Entity"','"Platforms"','""']},is_waxed:true}
setblock -2 -58 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Load"','"Floor"','""']},is_waxed:true}
setblock 2 -58 -73 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Reset"','"Floor"','""']},is_waxed:true}
setblock -1 -58 -74 spruce_log[axis=z]
setblock 1 -58 -74 spruce_log[axis=z]
setblock -1 -58 -73 stone_button[facing=south]
setblock 1 -58 -73 stone_button[facing=south]
setblock -1 -58 -75 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -75 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 40005
clone -23 -60 -74 -18 -55 -73 -17 -60 -74
clone -23 -60 -74 -18 -55 -73 -11 -60 -74
clone 23 -60 -74 18 -55 -73 12 -60 -74
clone 23 -60 -74 18 -55 -73 6 -60 -74
clone -23 -60 5 -18 -55 6 -17 -60 5
clone -23 -60 5 -18 -55 6 -11 -60 5
clone 23 -60 5 18 -55 6 12 -60 5
clone 23 -60 5 18 -55 6 6 -60 5
clone -25 -60 -72 -24 -55 -67 -25 -60 -66
clone -25 -60 -72 -24 -55 -61 -25 -60 -60
clone -25 -60 -72 -24 -55 -49 -25 -60 -48
clone -25 -60 -72 -24 -55 -43 -25 -60 -24
clone 24 -60 -72 25 -55 -67 24 -60 -66
clone 24 -60 -72 25 -55 -61 24 -60 -60
clone 24 -60 -72 25 -55 -49 24 -60 -48
clone 24 -60 -72 25 -55 -43 24 -60 -24