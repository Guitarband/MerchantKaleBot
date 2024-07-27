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
                            {name: 'Thrusting Swords', value: 'thrustingsword'},
                            {name: 'Heavy Thrusting Swords', value: 'heavythrustingsword'},
                        )
                )
        )
    ,
    async execute(interaction){
        if(interaction.options.getSubcommand() === 'type'){
            const weaponType = interaction.options.getString('weapon_type')
            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId('selecto')
                .setPlaceholder(`Select a weapon...`)
            if (weaponType === 'dagger'){
                selectMenu.addOptions([
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.dagger.name}`)
                        .setDescription(`${weapon_data.dagger.minidesc}`)
                        .setValue(`dagger`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.parrying_dagger.name}`)
                        .setDescription(`${weapon_data.parrying_dagger.minidesc}`)
                        .setValue(`parrying_dagger`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.misericorde.name}`)
                        .setDescription(`${weapon_data.misericorde.minidesc}`)
                        .setValue(`misericorde`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.great_knife.name}`)
                        .setDescription(`${weapon_data.great_knife.minidesc}`)
                        .setValue(`great_knife`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.bloodstained_dagger.name}`)
                        .setDescription(`${weapon_data.bloodstained_dagger.minidesc}`)
                        .setValue(`bloodstained_dagger`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.erdsteel_dagger.name}`)
                        .setDescription(`${weapon_data.erdsteel_dagger.minidesc}`)
                        .setValue(`erdsteel_dagger`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.wakizashi.name}`)
                        .setDescription(`${weapon_data.wakizashi.minidesc}`)
                        .setValue(`wakizashi`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.celebrants_sickle.name}`)
                        .setDescription(`${weapon_data.celebrants_sickle.minidesc}`)
                        .setValue(`celebrants_sickle`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.ivory_sickle.name}`)
                        .setDescription(`${weapon_data.ivory_sickle.minidesc}`)
                        .setValue(`ivory_sickle`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.crystal_knife.name}`)
                        .setDescription(`${weapon_data.crystal_knife.minidesc}`)
                        .setValue(`crystal_knife`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.scorpions_stinger.name}`)
                        .setDescription(`${weapon_data.scorpions_stinger.minidesc}`)
                        .setValue(`scorpions_stinger`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.cinquedea.name}`)
                        .setDescription(`${weapon_data.cinquedea.minidesc}`)
                        .setValue(`cinquedea`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.glintstone_kris.name}`)
                        .setDescription(`${weapon_data.glintstone_kris.minidesc}`)
                        .setValue(`glintstone_kris`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.reduvia.name}`)
                        .setDescription(`${weapon_data.reduvia.minidesc}`)
                        .setValue(`reduvia`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.blade_of_calling.name}`)
                        .setDescription(`${weapon_data.blade_of_calling.minidesc}`)
                        .setValue(`blade_of_calling`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.black_knife.name}`)
                        .setDescription(`${weapon_data.black_knife.minidesc}`)
                        .setValue(`black_knife`),
                ])
            }
            if (weaponType === 'straightsword'){
                selectMenu.addOptions([
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.short_sword.name}`)
                        .setDescription(`${weapon_data.short_sword.minidesc}`)
                        .setValue(`short_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.longsword.name}`)
                        .setDescription(`${weapon_data.longsword.minidesc}`)
                        .setValue(`longsword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.broadsword.name}`)
                        .setDescription(`${weapon_data.broadsword.minidesc}`)
                        .setValue(`broadsword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.weathered_straight_sword.name}`)
                        .setDescription(`${weapon_data.weathered_straight_sword.minidesc}`)
                        .setValue(`weathered_straight_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.lordsworns_straight_sword.name}`)
                        .setDescription(`${weapon_data.lordsworns_straight_sword.minidesc}`)
                        .setValue(`lordsworns_straight_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.nobles_slender_sword.name}`)
                        .setDescription(`${weapon_data.nobles_slender_sword.minidesc}`)
                        .setValue(`nobles_slender_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.cane_sword.name}`)
                        .setDescription(`${weapon_data.cane_sword.minidesc}`)
                        .setValue(`cane_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.warhawks_talon.name}`)
                        .setDescription(`${weapon_data.warhawks_talon.minidesc}`)
                        .setValue(`warhawks_talon`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.lazuli_glintstone_sword.name}`)
                        .setDescription(`${weapon_data.lazuli_glintstone_sword.minidesc}`)
                        .setValue(`lazuli_glintstone_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.carian_knights_sword.name}`)
                        .setDescription(`${weapon_data.carian_knights_sword.minidesc}`)
                        .setValue(`carian_knights_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.crystal_sword.name}`)
                        .setDescription(`${weapon_data.crystal_sword.minidesc}`)
                        .setValue(`crystal_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.rotten_crystal_sword.name}`)
                        .setDescription(`${weapon_data.rotten_crystal_sword.minidesc}`)
                        .setValue(`rotten_crystal_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.miquellan_knights_sword.name}`)
                        .setDescription(`${weapon_data.miquellan_knights_sword.minidesc}`)
                        .setValue(`miquellan_knights_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.ornamental_straight_sword.name}`)
                        .setDescription(`${weapon_data.ornamental_straight_sword.minidesc}`)
                        .setValue(`ornamental_straight_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.golden_ephitaph.name}`)
                        .setDescription(`${weapon_data.golden_ephitaph.minidesc}`)
                        .setValue(`golden_ephitaph`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.sword_of_st_trina.name}`)
                        .setDescription(`${weapon_data.sword_of_st_trina.minidesc}`)
                        .setValue(`sword_of_st_trina`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.regalia_of_eochaid.name}`)
                        .setDescription(`${weapon_data.regalia_of_eochaid.minidesc}`)
                        .setValue(`regalia_of_eochaid`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.coded_sword.name}`)
                        .setDescription(`${weapon_data.coded_sword.minidesc}`)
                        .setValue(`coded_sword`),
                    new StringSelectMenuOptionBuilder()
                        .setLabel(`${weapon_data.sword_of_night_and_flame.name}`)
                        .setDescription(`${weapon_data.sword_of_night_and_flame.minidesc}`)
                        .setValue(`sword_of_night_and_flame`),
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