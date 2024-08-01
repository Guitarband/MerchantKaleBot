const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js')
const weapon_data = require('../../resources/weapon_data.json')

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('weapon')
        .setDescription('Display information for a weapon in Elden Ring')
        .addSubcommand(subcommand =>
            subcommand
                .setName('type')
                .setDescription('Searches a weapon type')
                .addStringOption(option =>
                    option
                        .setName('weapon_type')
                        .setDescription('Searches a weapon type')
                        .setRequired(true)
                        .addChoices(
                            {name: 'Daggers', value: 'dagger'},
                            {name: 'Straight Swords', value: 'straightsword'},
                            {name: 'Greatswords', value: 'greatsword'},
                            {name: 'Colossal Swords', value: 'colossalsword'},
                            {name: 'Thrusting Swords(ALL)', value: 'thrustingsword'},
                            {name: 'Curved Swords', value: 'curvedsword'},
                            {name: 'Curved Greatswords', value: 'curvedgreatsword'},
                            {name: 'Katanas', value: 'katana'},
                            {name: 'Twinblades', value: 'twinblade'},
                            {name: 'Axes', value: 'axe'},
                            {name: 'Greataxes', value: 'greataxe'},
                            {name: 'Hammers', value: 'hammer'},
                            {name: 'Flails', value: 'flail'},
                            {name: 'Great Hammers', value: 'greathammer'},
                            {name: 'Colossal Weapons', value: 'colossalweapon'},
                            {name: 'Spears/Lances', value: 'spearlance'},
                            {name: 'Halberds', value: 'halberd'},
                            {name: 'Reapers', value: 'reaper'},
                            {name: 'Whips', value: 'whip'},
                            {name: 'Fists/Claws', value: 'fistclaw'},
                            {name: 'Bows(ALL)', value: 'bow'},
                            {name: 'Crossbows', value: 'crossbow'},
                            {name: 'Ballistas', value: 'ballista'},
                            {name: 'Glintstone Staffs/Sacred Seals', value: 'staffseal'},
                            {name: 'Torches', value: 'torch'},
                        )
                )
        )
    ,
    async execute(interaction){
        if(interaction.options.getSubcommand() === 'type'){
            let weaponArray = []
            const weaponType = interaction.options.getString('weapon_type')
            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId('selecto')
                .setPlaceholder(`Select a weapon...`)
            if (weaponType === 'dagger'){
                weaponArray = [
                    'dagger',
                    'parrying_dagger',
                    'misericorde',
                    'great_knife',
                    'bloodstained_dagger',
                    'erdsteel_dagger',
                    'wakizashi',
                    'celebrants_sickle',
                    'ivory_sickle',
                    'crystal_knife',
                    'scorpions_stinger',
                    'cinquedea',
                    'glintstone_kris',
                    'reduvia',
                    'blade_of_calling',
                    'black_knife',
                    'fire_knights_shortsword',
                    'maingauche'
                ]
            }
            else if (weaponType === 'straightsword'){
                weaponArray = [
                    'short_sword',
                    'longsword',
                    'broadsword',
                    'weathered_straight_sword',
                    'lordsworns_straight_sword',
                    'nobles_slender_sword',
                    'cane_sword',
                    'warhawks_talon',
                    'lazuli_glintstone_sword',
                    'carian_knights_sword',
                    'crystal_sword',
                    'rotten_crystal_sword',
                    'miquellan_knights_sword',
                    'ornamental_straight_sword',
                    'golden_ephitaph',
                    'sword_of_st_trina',
                    'regalia_of_eochaid',
                    'coded_sword',
                    'sword_of_night_and_flame',
                    'velvet_sword_of_st_trina',
                    'stone_sheathed_sword',
                    'sword_of_light',
                    'sword_of_darkness'
                ]
            }
            else if (weaponType === 'greatsword'){
                weaponArray=[
                    'bastard_sword',
                    'claymore',
                    'iron_greatsword',
                    'lordsworns_greatsword',
                    'knights_greatsword',
                    'banished_knights_greatsword',
                    'forked_greatsword',
                    'flamberge',
                    'gargoyles_greatsword',
                    'gargoyles_blackblade',
                    'inseperable_sword',
                    'sword_of_milos',
                    'marias_executioners_sword',
                    'ordoviss_greatsword',
                    'alabaster_lords_sword',
                    'deaths_poker',
                    'helphens_steeple',
                    'blasphemous_blade',
                    'golden_order_greatsword',
                    'dark_moon_greatsword',
                    'sacred_relic_sword',
                    'lizard_greatsword',
                    'greatsword_of_damnation',
                    'greatsword_of_solitude'
                ]
            }
            else if (weaponType === 'colossalsword'){
                weaponArray = [
                    'zweihandler',
                    'greatsword',
                    'watchdogs_greatsword',
                    'trolls_golden_sword',
                    'troll_knights_sword',
                    'royal_greatsword',
                    'grafted_blade_greatsword',
                    'ruins_greatsword',
                    'starscourge_greatsword',
                    'godslayers_greatsword',
                    'malikeths_black_blade',
                    'fire_knights_greatsword',
                    'ancient_meteoric_ore_greatsword',
                    'moonrithyls_knight_sword',
                    'greatsword_of_radhan_lord',
                    'greatsword_of_radhan_light'
                ]
            }
            else if (weaponType === 'thrustingsword'){
                weaponArray = [
                    'rapier',
                    'estoc',
                    'nobles_estoc',
                    'cleanrot_knights_sword',
                    'rogiers_rapier',
                    'antspur_rapier',
                    'frozen_needle',
                    'carian_sorcery_sword',

                    'great_epee',
                    'godskin_sticher',
                    'bloody_helice',
                    'dragon_kings_cragblade',
                    'sword_lance',
                    'queeligns_greatsword'
                ]
            }
            else if (weaponType === 'curvedsword'){
                weaponArray = [
                    'scimitar',
                    'falchion',
                    'shamshir',
                    'grossmesser',
                    'bandits_curved_sword',
                    'shotel',
                    'wakizashi',
                    'scavengers_curved_sword',
                    'mantis_blade',
                    'beastmans_curved_sword',
                    'flowing_curved_sword',
                    'serpentgods_curved_sword',
                    'magma_blade',
                    'nox_flowing_sword',
                    'wing_of_astel',
                    'eclipse_shotel',
                    'spirit_sword',
                    'falx',
                    'dancing_blade_of_ranah',
                    'horned_warriors_sword'
                ]
            }
            else if (weaponType === 'curvedgreatsword'){
                weaponArray = [
                    'dismounter',
                    'omen_cleaver',
                    'monks_flameblade',
                    'beastmans_cleaver',
                    'bloodhounds_fang',
                    'onyx_lords_greatsword',
                    'zamor_curved_sword',
                    'magma_wyrms_scalesword',
                    'morgotts_cursed_sword',
                    'horned_warriors_greatsword',
                    'freyjas_greatsword'
                ]
            }
            else if (weaponType === 'katana'){
                weaponArray = [
                    'uchigatana',
                    'nagakiba',
                    'serpentbone_blade',
                    'meteoric_ore_blade',
                    'moonveil',
                    'rivers_of_blood',
                    'dragonscale_blade',
                    'hand_of_malenia',
                    'starlined_sword',
                    'sword_of_night'
                ]
            }
            else if (weaponType === 'twinblade'){
                weaponArray = [
                    'twinblade',
                    'twinned_knight_swords',
                    'godskin_peeler',
                    'gargoyles_twinblade',
                    'gargoyles_black_blades',
                    'eleonaras_poleblade',
                    'black_steel_twinblade',
                    'euphoria'
                ]
            }
            else if (weaponType === 'axe'){
                weaponArray = [
                    'hand_axe',
                    'forked_hatchet',
                    'battle_axe',
                    'warped_axe',
                    'jawbone_axe',
                    'iron_cleaver',
                    'highland_axe',
                    'celebrants_cleaver',
                    'sacrificial_axe',
                    'icerind_hatchet',
                    'ripple_blade',
                    'stormhawk_axe',
                    'rosus_axe',
                    'forkedtongue_hatchet',
                    'smithscript_axe',
                    'messmer_soldiers_axe',
                    'death_knights_twin_axes'
                ]
            }
            else if (weaponType === 'greataxe'){
                weaponArray = [
                    'greataxe',
                    'crescent_moon_axe',
                    'longhaft_axe',
                    'executioners_greataxe',
                    'great_omenkiller_cleaver',
                    'rusted_anchor',
                    'butchering_knife',
                    'gargoyles_great_axe',
                    'gargoyles_black_axe',
                    'winged_greathorn',
                    'axe_of_godrick',
                    'putrescence_cleaver',
                    'death_knights_longhaft_axe',
                    'bonny_butchering_knife'
                ]
            }
            else if (weaponType === 'hammer'){
                weaponArray = [
                    'club',
                    'curved_club',
                    'spiked_club',
                    'stone_club',
                    'mace',
                    'morning_star',
                    'warpick',
                    'hammer',
                    'monks_flamemace',
                    'varres_bouquet',
                    'envoys_horn',
                    'nox_flowing_hammer',
                    'ringed_finger',
                    'scepter_of_the_allknowing',
                    'marikas_hammer',
                    'flowerstone_gavel'
                ]
            }
            else if (weaponType === 'flail'){
                weaponArray = [
                    'flail',
                    'nightrider_flail',
                    'chainlink_flail',
                    'family_heads',
                    'bastards_stars',
                    'serpent_flail'
                ]
            }
            else if (weaponType === 'greathammer'){
                weaponArray = [
                    'large_club',
                    'curved_great_club',
                    'great_mace',
                    'pickaxe',
                    'brick_hammer',
                    'battle_hammer',
                    'rotten_battle_hammer',
                    'celebrants_skull',
                    'great_stars',
                    'greathorn_hammer',
                    'envoys_long_horn',
                    'cranial_vessel_candlestand',
                    'beastclaw_greathammer',
                    'devourers_scepter',
                    'black_steel_greathammer',
                    'smithscript_greathammer'
                ]
            }
            else if (weaponType === 'colossalweapon'){
                weaponArray = [
                    'duelist_greataxe',
                    'rotten_greataxe',
                    'golems_halberd',
                    'giantcrusher',
                    'prelates_inferno_crozier',
                    'great_club',
                    'trolls_hammer',
                    'dragon_greatclaw',
                    'watchdogs_staff',
                    'staff_of_the_avatar',
                    'rotten_staff',
                    'envoys_greathorn',
                    'ghizas_wheel',
                    'fallingstar_beast_jaw',
                    'axe_of_godfrey',
                    'bloodfiends_arm',
                    'anvil_hammer',
                    'devonias_hammer',
                    'shadow_sunflower_blossom',
                    'gazing_finger'
                ]
            }
            else if (weaponType === 'spearlance'){
                weaponArray = [
                    'short_spear',
                    'iron_spear',
                    'spear',
                    'partisan',
                    'pike',
                    'spiked_spear',
                    'cross_naginata',
                    'claymans_harpoon',
                    'celebrants_ribrake',
                    'torchpole',
                    'inquisitors_girandole',
                    'crystal_spear',
                    'rotten_crystal_spear',
                    'cleanrot_spear',
                    'death_ritual_spear',
                    'bold_of_gransax',
                    'smithscript_spear',
                    'swift_spear',
                    'bloodfiends_fork',

                    'lance',
                    'treespear',
                    'serpenthunter',
                    'silurias_tree',
                    'vykes_war_spear',
                    'mohgwyns_sacred_spear',
                ]
            }
            else if (weaponType === 'halberd'){
                weaponArray = [
                    'halberd',
                    'banished_knights_halberd',
                    'lucerne',
                    'glaive',
                    'vulgar_militia_shotel',
                    'vulgar_militia_saw',
                    'guardians_swordspear',
                    'gargoyles_halberd',
                    'gargoyles_black_halberd',
                    'nightrider_glaive',
                    'pests_glaive',
                    'ripple_crescent_halberd',
                    'golden_halberd',
                    'dragon_helberd',
                    'lorettas_war_sickle',
                    'commanders_standard',
                ]
            }
            else if (weaponType === 'reaper'){
                weaponArray = [
                    'scythe',
                    'grave_scythe',
                    'halo_scythe',
                    'winged_scythe',
                ]
            }
            else if (weaponType === 'whip'){
                weaponArray = [
                    'whip',
                    'thorned_whip',
                    'urumi',
                    'hoslows_petal_whip',
                    'magma_whip_candlestick',
                    'giants_red_braid',
                ]
            }
            else if (weaponType === 'fistclaw'){
                weaponArray = [
                    'caestus',
                    'spiked_caestus',
                    'katar',
                    'iron_ball',
                    'star_fist',
                    'clinging_bone',
                    'veterans_prosthesis',
                    'cipher_pata',
                    'grafted_dragon',

                    'hookclaws',
                    'bloodhound_claws',
                    'venomous_fang',
                    'raptor_talons',
                ]
            }
            else if (weaponType === 'bow'){
                weaponArray = [
                    'shortbow',
                    'composite_bow',
                    'red_branch_shortbow',
                    'misbegotten_shortbow',
                    'harp_bow',

                    'albinauric_bow',
                    'black_bow',
                    'pulley_bow',
                    'horn_bow',
                    'serpent_bow',
                    'erdtree_bow',
                    'longbow',

                    'greatbow',
                    'golem_greatbow',
                    'erdtree_greatbow',
                    'lion_greatbow',
                ]
            }
            else if (weaponType === 'crossbow'){
                weaponArray = [
                    'soldiers_crossbow',
                    'light_crossbow',
                    'heavy_crossbow',
                    'arbalest',
                    'crepuss_black_key_crossbow',
                    'pulley_crossbow',
                    'full_moon_crossbow',
                ]
            }
            else if (weaponType === 'ballista'){
                weaponArray = [
                    'hand_ballista',
                    'jar_cannon',
                ]
            }
            else if (weaponType === 'staffseal'){
                weaponArray = [
                    'astrologers_staff',
                    'glintstone_staff',
                    'academy_glintstone_staff',
                    'diggers_staff',
                    'demihuman_queens_staff',
                    'azurs_glintstone_staff',
                    'lusats_glintstone_staff',
                    'carian_glintstone_staff',
                    'carian_glintblade_staff',
                    'carian_regal_scepter',
                    'albinauric_staff',
                    'staff_of_loss',
                    'gelmir_glintstone_staff',
                    'crystal_staff',
                    'rotten_crystal_staff',
                    'meteorite_staff',
                    'staff_of_the_guilty',

                    'finger_seal',
                    'erdtree_seal',
                    'golden_order_seal',

                    'giants_seal',
                    'godslayers_seal',
                    'clawmark_seal',
                    'frenzied_flame_seal',
                    'dragon_communion_seal',
                ]
            }
            else if (weaponType === 'torch'){
                weaponArray = [
                    'torch',
                    'beastrepellent_torch',
                    'steelwire_torch',
                    'sentrys_torch',
                    'ghostflame_torch',
                ]
            }




            for(const weapon of weaponArray){
                let weaponInfo = weapon_data[weapon]
                selectMenu.addOptions([
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weaponInfo.name}`)
                        .setDescription(`${weaponInfo.description.substring(0,100)}`)
                        .setValue(`${weapon}`)
                    ])
            }

            const row = new ActionRowBuilder()
                .addComponents(selectMenu)

            await interaction.reply({
                content:`Select a weapon to view its stats`,
                components: [row],
            })

        }
        else await interaction.reply('Unspecified Command Received')
    }
}