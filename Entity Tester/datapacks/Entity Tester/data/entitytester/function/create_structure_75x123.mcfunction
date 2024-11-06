fill -43 -60 -128 43 -55 6 air
fill -42 -61 -127 42 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -42 -60 -128
place template entitytester:wall_segment 36 -60 -128
place template entitytester:wall_segment -36 -60 6 180
place template entitytester:wall_segment 42 -60 6 180
place template entitytester:wall_segment -43 -60 -121 counterclockwise_90
place template entitytester:wall_segment 43 -60 -127 clockwise_90
place template entitytester:wall_edge -5 -60 -128
place template entitytester:wall_edge 5 -60 -128 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -128 2 -58 -128 cobblestone
fill -2 -57 -127 2 -57 -127 spruce_log[axis=x]
fill -2 -57 -128 2 -57 -128 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -43 -60 -128 -43 -58 -128 cobblestone_wall
fill 43 -60 -128 43 -58 -128 cobblestone_wall
fill -43 -60 6 -43 -58 6 cobblestone_wall
fill 43 -60 6 43 -58 6 cobblestone_wall
setblock -43 -57 -128 dark_oak_slab
setblock 43 -57 -128 dark_oak_slab
setblock -43 -57 6 dark_oak_slab
setblock 43 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -128
setblock -4 -59 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Border"','"Corners"','""']},is_waxed:true}
setblock -2 -59 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"West -> East"','"Borders"','""']},is_waxed:true}
setblock 0 -59 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Main"','"Floor"','""']},is_waxed:true}
setblock 2 -59 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"North -> South"','"Borders"','""']},is_waxed:true}
setblock 4 -59 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Entity"','"Platforms"','""']},is_waxed:true}
setblock -2 -58 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Load"','"Floor"','""']},is_waxed:true}
setblock 2 -58 -127 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Reset"','"Floor"','""']},is_waxed:true}
setblock -1 -58 -128 spruce_log[axis=z]
setblock 1 -58 -128 spruce_log[axis=z]
setblock -1 -58 -127 stone_button[facing=south]
setblock 1 -58 -127 stone_button[facing=south]
setblock -1 -58 -129 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -129 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 76923
clone -41 -60 -128 -36 -55 -127 -35 -60 -128
clone -41 -60 -128 -30 -55 -127 -29 -60 -128
clone -41 -60 -128 -30 -55 -127 -17 -60 -128
clone 41 -60 -128 36 -55 -127 30 -60 -128
clone 41 -60 -128 30 -55 -127 18 -60 -128
clone 41 -60 -128 30 -55 -127 6 -60 -128
clone -41 -60 5 -36 -55 6 -35 -60 5
clone -41 -60 5 -30 -55 6 -29 -60 5
clone -41 -60 5 -30 -55 6 -17 -60 5
clone 41 -60 5 36 -55 6 30 -60 5
clone 41 -60 5 30 -55 6 18 -60 5
clone 41 -60 5 30 -55 6 6 -60 5
clone -43 -60 -126 -42 -55 -121 -43 -60 -120
clone -43 -60 -126 -42 -55 -115 -43 -60 -114
clone -43 -60 -126 -42 -55 -103 -43 -60 -102
clone -43 -60 -126 -42 -55 -79 -43 -60 -78
clone -43 -60 -126 -42 -55 -91 -43 -60 -30
clone 42 -60 -126 43 -55 -121 42 -60 -120
clone 42 -60 -126 43 -55 -115 42 -60 -114
clone 42 -60 -126 43 -55 -103 42 -60 -102
clone 42 -60 -126 43 -55 -79 42 -60 -78
clone 42 -60 -126 43 -55 -91 42 -60 -30