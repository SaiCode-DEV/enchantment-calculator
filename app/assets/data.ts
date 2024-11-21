const data = {
    enchants: {
        protection: {
            levelMax: 4,
            weight: 1,
            incompatible: ["blast_protection", "fire_protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        aqua_affinity: {
            levelMax: 1,
            weight: 2,
            incompatible: [],
            items: ["helmet", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        bane_of_arthropods: {
            levelMax: 5,
            weight: 1,
            incompatible: ["smite", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace"],
            treasure: false,
            tradable: true
        },
        blast_protection: {
            levelMax: 4,
            weight: 2,
            incompatible: ["fire_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        channeling: {
            levelMax: 1,
            weight: 4,
            incompatible: ["riptide"],
            items: ["trident"],
            treasure: false,
            tradable: true
        },
        depth_strider: {
            levelMax: 3,
            weight: 2,
            incompatible: ["frost_walker"],
            items: ["boots"],
            treasure: false,
            tradable: true
        },
        efficiency: {
            levelMax: 5,
            weight: 1,
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe", "shears"],
            treasure: false,
            tradable: true
        },
        feather_falling: {
            levelMax: 4,
            weight: 1,
            incompatible: [],
            items: ["boots"],
            treasure: false,
            tradable: true
        },
        fire_aspect: {
            levelMax: 2,
            weight: 2,
            incompatible: [],
            items: ["sword", "mace"],
            treasure: false,
            tradable: true
        },
        fire_protection: {
            levelMax: 4,
            weight: 1,
            incompatible: ["blast_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        flame: {
            levelMax: 1,
            weight: 2,
            incompatible: [],
            items: ["bow"],
            treasure: false,
            tradable: true
        },
        fortune: {
            levelMax: 3,
            weight: 2,
            incompatible: ["silk_touch"],
            items: ["pickaxe", "shovel", "axe", "hoe"],
            treasure: false,
            tradable: true
        },
        frost_walker: {
            levelMax: 2,
            weight: 2,
            incompatible: ["depth_strider"],
            items: ["boots"],
            treasure: true,
            tradable: true,
        },
        impaling: {
            levelMax: 5,
            weight: 2,
            incompatible: [],
            items: ["trident"],
            treasure: false,
            tradable: true
        },
        infinity: {
            levelMax: 1,
            weight: 4,
            incompatible: ["mending"],
            items: ["bow"],
            treasure: false,
            tradable: true
        },
        knockback: {
            levelMax: 2,
            weight: 1,
            incompatible: [],
            items: ["sword"],
            treasure: false,
            tradable: true
        },
        looting: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["sword"],
            treasure: false,
            tradable: true
        },
        loyalty: {
            levelMax: 3,
            weight: 1,
            incompatible: ["riptide"],
            items: ["trident"],
            treasure: false,
            tradable: true
        },
        luck_of_the_sea: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["fishing_rod"],
            treasure: false,
            tradable: true
        },
        lure: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["fishing_rod"],
            treasure: false,
            tradable: true
        },
        mending: {
            levelMax: 1,
            weight: 2,
            incompatible: ["infinity"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace"
            ],
            treasure: true,
            tradable: true
        },
        multishot: {
            levelMax: 1,
            weight: 2,
            incompatible: ["piercing"],
            items: ["crossbow"],
            treasure: false,
            tradable: true
        },
        piercing: {
            levelMax: 4,
            weight: 1,
            incompatible: ["multishot"],
            items: ["crossbow"],
            treasure: false,
            tradable: true
        },
        power: {
            levelMax: 5,
            weight: 1,
            incompatible: [],
            items: ["bow"],
            treasure: false,
            tradable: true
        },
        projectile_protection: {
            levelMax: 4,
            weight: 1,
            incompatible: ["protection", "blast_protection", "fire_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        punch: {
            levelMax: 2,
            weight: 2,
            incompatible: [],
            items: ["bow"],
            treasure: false,
            tradable: true
        },
        quick_charge: {
            levelMax: 3,
            weight: 1,
            incompatible: [],
            items: ["crossbow"],
            treasure: false,
            tradable: true
        },
        respiration: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["helmet", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        riptide: {
            levelMax: 3,
            weight: 2,
            incompatible: ["channeling", "loyalty"],
            items: ["trident"],
            treasure: false,
            tradable: true
        },
        sharpness: {
            levelMax: 5,
            weight: 1,
            incompatible: ["bane_of_arthropods", "smite"],
            items: ["sword", "axe"],
            treasure: false,
            tradable: true
        },
        silk_touch: {
            levelMax: 1,
            weight: 4,
            incompatible: ["fortune"],
            items: ["pickaxe", "shovel", "axe", "hoe"],
            treasure: false,
            tradable: true
        },
        smite: {
            levelMax: 5,
            weight: 1,
            incompatible: ["bane_of_arthropods", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace"],
            treasure: false,
            tradable: true
        },
        soul_speed: {
            levelMax: 3,
            weight: 4,
            incompatible: [],
            items: ["boots"],
            treasure: true,
            tradable: false,
        },
        sweeping: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["sword"],
            treasure: false,
            tradable: true
        },
        swift_sneak: {
            levelMax: 3,
            weight: 4,
            incompatible: [],
            items: ["leggings"],
            treasure: true,
            tradable: false,
        },
        thorns: {
            levelMax: 3,
            weight: 4,
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"],
            treasure: false,
            tradable: true
        },
        unbreaking: {
            levelMax: 3,
            weight: 1,
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace"
            ],
            treasure: false,
            tradable: true
        },
        binding_curse: {
            levelMax: 1,
            weight: 4,
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "elytra", "pumpkin", "helmet", "turtle_shell"],
            treasure: true,
            tradable: true,
        },
        vanishing_curse: {
            levelMax: 1,
            weight: 4,
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "pumpkin",
                "helmet", "trident", "turtle_shell", "crossbow", "mace"
            ],
            treasure: true,

            tradable: true,
        },
        density: {
            levelMax: 5,
            weight: 1,
            incompatible: ["breach", "smite", "bane_of_arthropods"],
            items: ["mace"],
            treasure: false,
            tradable: true
        },
        breach: {
            levelMax: 4,
            weight: 2,
            incompatible: ["density", "smite", "bane_of_arthropods"],
            items: ["mace"],
            treasure: false,
            tradable: true
        },
        wind_burst: {
            levelMax: 3,
            weight: 2,
            incompatible: [],
            items: ["mace"],
            treasure: true,
            tradable: false,
        }
    },
    items: [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'turtle_shell',
        'elytra',

        'sword',
        'axe',
        'mace',
        'trident',
        'pickaxe',
        'shovel',
        'hoe',
        'bow',
        'shield',
        'crossbow',
        'brush',

        'fishing_rod',
        'shears',
        'flint_and_steel',
        'carrot_on_a_stick',
        'warped_fungus_on_a_stick',
        'pumpkin',
        'book',
    ]
};

export default data;