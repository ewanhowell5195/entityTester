fill -3 -60 5 0 -60 5 air
execute if score global entitytester_mode matches 0 run setblock 0 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Mode","underlined":true,"bold":true},"",{"text":"Normal","bold":true,"color":"white"},{"text":"Babies"}]},is_waxed:true}
execute if score global entitytester_mode matches 1 run setblock 0 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Mode","underlined":true,"bold":true},"",{"text":"Normal"},{"text":"Babies","bold":true,"color":"white"}]},is_waxed:true}
execute if score global entitytester_sort matches 0 run setblock -1 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Sort","underlined":true,"bold":true},"",{"text":"Alphabetical","bold":true,"color":"white"},{"text":"Release Date"}]},is_waxed:true}
execute if score global entitytester_sort matches 1 run setblock -1 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Sort","underlined":true,"bold":true},"",{"text":"Alphabetical"},{"text":"Release Date","bold":true,"color":"white"}]},is_waxed:true}
execute if score global entitytester_variants matches 0 run setblock -2 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Variants","underlined":true,"bold":true},"",{"text":"Off","bold":true,"color":"white"},{"text":"On"}]},is_waxed:true}
execute if score global entitytester_variants matches 1 run setblock -2 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Variants","underlined":true,"bold":true},"",{"text":"Off"},{"text":"On","bold":true,"color":"white"}]},is_waxed:true}
execute if score global entitytester_wither matches 0 run setblock -3 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Spawn Wither","underlined":true,"bold":true},"",{"text":"Off","bold":true,"color":"white"},{"text":"On"}]},is_waxed:true}
execute if score global entitytester_wither matches 1 run setblock -3 -60 5 oak_wall_sign{front_text:{messages:[{"text":"Spawn Wither","underlined":true,"bold":true},"",{"text":"Off"},{"text":"On","bold":true,"color":"white"}]},is_waxed:true}