setblock -2 -58 5 oak_wall_sign{front_text:{messages:[{"text":"Instagram","underlined":true,"bold":true},"","@ewan.howell",""]},is_waxed:true}
setblock -1 -58 5 oak_wall_sign{front_text:{messages:[{"text":"Website","underlined":true,"bold":true},"","ewanhowell.com",""]},is_waxed:true}
setblock 0 -58 5 oak_wall_sign{front_text:{messages:[{"text":"Map By","underlined":true,"bold":true},"","Ewan Howell",""]},is_waxed:true}
setblock 1 -58 5 oak_wall_sign{front_text:{messages:[{"text":"YouTube","underlined":true,"bold":true},"","Ewan Howell",""]},is_waxed:true}
setblock 2 -58 5 oak_wall_sign{front_text:{messages:[{"text":"Twitter","underlined":true,"bold":true},"","@ewanhowell5195",""]},is_waxed:true}
setblock 3 -60 5 oak_wall_sign{front_text:{messages:["","Spawn","Entities",""]},is_waxed:true}
setblock 2 -60 5 oak_wall_sign{front_text:{messages:["","Clear","Entities",""]},is_waxed:true}
function entitytester:update_controls
setblock 3 -59 6 spruce_log[axis=z]
setblock 3 -59 5 stone_button
setblock 3 -59 7 command_block{Command:"function entitytester:spawn_entities"}
setblock 2 -59 6 spruce_log[axis=z]
setblock 2 -59 5 stone_button
setblock 2 -59 7 command_block{Command:"function entitytester:clear_entities"}
setblock 0 -59 6 spruce_log[axis=z]
setblock 0 -59 5 stone_button
setblock 0 -59 7 command_block{Command:"function entitytester:cycle_mode"}
setblock -1 -59 6 spruce_log[axis=z]
setblock -1 -59 5 stone_button
setblock -1 -59 7 command_block{Command:"function entitytester:cycle_sort"}
setblock -2 -59 6 spruce_log[axis=z]
setblock -2 -59 5 stone_button
setblock -2 -59 7 command_block{Command:"function entitytester:cycle_variants"}
setblock -3 -59 6 spruce_log[axis=z]
setblock -3 -59 5 stone_button
setblock -3 -59 7 command_block{Command:"function entitytester:cycle_wither"}