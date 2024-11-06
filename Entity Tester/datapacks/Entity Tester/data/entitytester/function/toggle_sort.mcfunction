scoreboard players add global entitytester_sort 1
execute if score global entitytester_sort matches 2.. run scoreboard players set global entitytester_sort 0
function entitytester:spawn_entities
function entitytester:update_controls