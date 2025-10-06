function entitytester:copy_floor_customisation
function entitytester:clear_structure
execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_39x63
execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_27x33
execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 0 run function entitytester:create_structure_25x21
execute if score global entitytester_mode matches 0 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_103x133
execute if score global entitytester_mode matches 1 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_55x69
execute if score global entitytester_mode matches 2 run execute if score global entitytester_variants matches 1 run function entitytester:create_structure_71x57
function entitytester:paste_floor_customisation
function entitytester:create_floor