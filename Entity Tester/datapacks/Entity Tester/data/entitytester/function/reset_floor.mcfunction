execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 -60 -68
execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run place template entitytester:floor_blocks -4 -60 -38
execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 -60 -134
execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run place template entitytester:floor_blocks -4 -60 -104
function entitytester:create_floor