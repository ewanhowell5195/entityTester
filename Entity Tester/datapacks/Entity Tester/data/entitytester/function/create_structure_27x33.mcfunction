fill -19 -60 -38 19 -55 6 air
fill -18 -61 -37 18 -61 5 stone_bricks
setblock 0 -61 3 gold_block
place template entitytester:wall_segment -18 -60 -38
place template entitytester:wall_segment 12 -60 -38
place template entitytester:wall_segment -12 -60 6 180
place template entitytester:wall_segment 18 -60 6 180
place template entitytester:wall_segment -19 -60 -31 counterclockwise_90
place template entitytester:wall_segment 19 -60 -37 clockwise_90
place template entitytester:wall_edge -5 -60 -38
place template entitytester:wall_edge 5 -60 -38 none front_back
place template entitytester:wall_edge -5 -60 6 180 front_back
place template entitytester:wall_edge 5 -60 6 180
fill -2 -60 -38 2 -58 -38 cobblestone
fill -2 -57 -37 2 -57 -37 spruce_log[axis=x]
fill -2 -57 -38 2 -57 -38 dark_oak_stairs[facing=south]
fill -2 -60 6 2 -58 6 cobblestone
fill -2 -57 5 2 -57 5 spruce_log[axis=x]
fill -2 -57 6 2 -57 6 dark_oak_stairs
fill -19 -60 -38 -19 -58 -38 cobblestone_wall
fill 19 -60 -38 19 -58 -38 cobblestone_wall
fill -19 -60 6 -19 -58 6 cobblestone_wall
fill 19 -60 6 19 -58 6 cobblestone_wall
setblock -19 -57 -38 dark_oak_slab
setblock 19 -57 -38 dark_oak_slab
setblock -19 -57 6 dark_oak_slab
setblock 19 -57 6 dark_oak_slab
function entitytester:create_controls
place template entitytester:floor_blocks -4 -60 -38
setblock -4 -59 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Border"','"Corners"','""']},is_waxed:true}
setblock -2 -59 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"West -> East"','"Borders"','""']},is_waxed:true}
setblock 0 -59 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Main"','"Floor"','""']},is_waxed:true}
setblock 2 -59 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"North -> South"','"Borders"','""']},is_waxed:true}
setblock 4 -59 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Entity"','"Platforms"','""']},is_waxed:true}
setblock -2 -58 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Load"','"Floor"','""']},is_waxed:true}
setblock 2 -58 -37 oak_wall_sign[facing="south"]{front_text:{messages:['""','"Reset"','"Floor"','""']},is_waxed:true}
setblock -1 -58 -38 spruce_log[axis=z]
setblock 1 -58 -38 spruce_log[axis=z]
setblock -1 -58 -37 stone_button[facing=south]
setblock 1 -58 -37 stone_button[facing=south]
setblock -1 -58 -39 command_block{Command:"function entitytester:create_floor"}
setblock 1 -58 -39 command_block{Command:"function entitytester:reset_floor"}
scoreboard players set global entitytester_last_structure 27681
clone -17 -60 -38 -12 -55 -37 -11 -60 -38
clone 17 -60 -38 12 -55 -37 6 -60 -38
clone -17 -60 5 -12 -55 6 -11 -60 5
clone 17 -60 5 12 -55 6 6 -60 5
clone -19 -60 -36 -18 -55 -31 -19 -60 -30
clone -19 -60 -36 -18 -55 -25 -19 -60 -24
clone -19 -60 -36 -18 -55 -19 -19 -60 -12
clone 18 -60 -36 19 -55 -31 18 -60 -30
clone 18 -60 -36 19 -55 -25 18 -60 -24
clone 18 -60 -36 19 -55 -19 18 -60 -12