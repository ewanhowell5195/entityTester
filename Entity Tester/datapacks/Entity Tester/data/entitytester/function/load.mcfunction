scoreboard objectives add entitytester_loaded dummy "Entity Tester Loaded"
scoreboard objectives add entitytester_entities_loaded dummy "Entity Tester Entities Loaded"
scoreboard objectives add entitytester_last_structure dummy "Entity Tester Last Structure"
scoreboard objectives add entitytester_temp dummy "Entity Tester Temp"
scoreboard objectives add entitytester_mode dummy "Entity Tester Mode"
scoreboard objectives add entitytester_sort dummy "Entity Tester Sort"
scoreboard objectives add entitytester_variants dummy "Entity Tester Variants"
scoreboard objectives add entitytester_wither dummy "Entity Tester Wither"
scoreboard players set global entitytester_temp 0
execute if score global entitytester_mode matches 0..1 run scoreboard players set global entitytester_temp 1
execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_mode 0
scoreboard players set global entitytester_temp 0
execute if score global entitytester_sort matches 0..1 run scoreboard players set global entitytester_temp 1
execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_sort 0
scoreboard players set global entitytester_temp 0
execute if score global entitytester_variants matches 0..1 run scoreboard players set global entitytester_temp 1
execute if score global entitytester_temp matches 0 run scoreboard players set global entitytester_variants 0
function entitytester:spawn_evoker_fangs
tellraw @a "Entity Tester has loaded"