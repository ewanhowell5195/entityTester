function entitytester:clear_entities_39x63
setblock -3 -60 -46 white_banner
setblock 1 -60 -46 red_bed
setblock 1 -60 -47 red_bed[part=head]
setblock 5 -60 -46 bell
setblock 11 319 -46 tinted_glass
setblock -11 -60 -40 chest[facing=south]
setblock -9 -60 -40 chest[facing=west,type=left]
setblock -9 -60 -41 chest[facing=west,type=right]
setblock 1 -60 -40 conduit[waterlogged=false]
setblock 9 -60 -40 creeper_head[rotation=8]
setblock 11 -60 -40 decorated_pot
setblock -15 -60 -34 dragon_head[rotation=8]
setblock -13 319 -34 tinted_glass
setblock -9 -60 -34 enchanting_table
setblock -5 -60 -34 ender_chest[facing=south]
setblock 15 -60 -34 oak_wall_hanging_sign[facing=south]
setblock -5 -60 -28 oak_fence
setblock -3 -60 -28 lectern[facing=south,has_book=true]
setblock -15 319 -22 tinted_glass
setblock -7 -60 -22 piglin_head[rotation=8]
setblock -3 -60 -22 player_head[rotation=8]
setblock -11 -60 -16 shulker_box
setblock -7 -60 -16 oak_sign
setblock -5 -60 -16 oak_wall_sign[facing=south]
setblock -1 319 -16 tinted_glass
setblock 3 -60 -16 skeleton_skull[rotation=8]
setblock -15 319 -10 tinted_glass
setblock -7 -60 -10 trapped_chest[facing=south]
setblock -5 -60 -10 trapped_chest[facing=west,type=left]
setblock -5 -60 -11 trapped_chest[facing=west,type=right]
setblock -6 -60 -4 wither_skeleton_skull[rotation=8]
setblock 2 319 -4 tinted_glass
setblock 4 -60 -4 zombie_head[rotation=8]
setblock 8 319 -4 tinted_glass
schedule function entitytester:spawn_normal_alphabetical_entities_2 1t