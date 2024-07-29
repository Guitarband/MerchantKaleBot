const { Events, Collection, EmbedBuilder} = require('discord.js')
const weapon_data = require('../resources/weapon_data.json')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        const command = interaction.client.commands.get(interaction.commandName)
        if (!command) {
            if(interaction.isStringSelectMenu()){
                const weaponInfo = new EmbedBuilder()
                    .setColor(0x0099ff)
                    .setTitle(weapon_data[interaction.values[0]].name)
                    //.setURL(`https://eldenring.wiki.fextralife.com/${weapon_data[interaction.values[0]].name}/`)
                    .setDescription(`*${weapon_data[interaction.values[0]].description}*`)
                    //.setThumbnail(`${weapon_data[interaction.values[0]].thumbnail.trim()}`)

                weaponInfo.addFields({name:'> Attack', value: ' '})
                for(let attribute of weapon_data[interaction.values[0]].attack){
                    weaponInfo.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                }

                weaponInfo.addFields({name:'> Guard', value: ' '})
                for(let attribute of weapon_data[interaction.values[0]].guard){
                    weaponInfo.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                }

                weaponInfo.addFields({name:'> Scaling', value: ' '})
                for(let attribute of weapon_data[interaction.values[0]].scaling){
                    weaponInfo.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                }

                weaponInfo.addFields({name:'> Requires', value: ' '})
                for(let attribute of weapon_data[interaction.values[0]].requirements){
                    weaponInfo.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                }


                weaponInfo
                    .setFooter({text:`${weapon_data[interaction.values[0]].type}`})
                    .setTimestamp()
                await interaction.update({
                    //components: [],
                    embeds: [weaponInfo],
                    content: '\u200B'
                })
                return
            }
            else {
                console.error(`No command matching ${interaction.commandName} was found`)
                return;
            }
        }
        const { cooldowns } = interaction.client;
        if(!cooldowns.has(command.data.name)){
            cooldowns.set(command.data.name, new Collection())
        }

        const now = Date.now()
        const timestamps = cooldowns.get(command.data.name)
        const defaultCooldownDuration = 3
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000

        if(timestamps.has(interaction.user.id)){
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
            if(now < expirationTime){
                const expiredTimestamp = Math.round(expirationTime / 1000)
                return interaction.reply({content:`This command is on cooldown for ${expiredTimestamp}`, ephemeral: true})
            }
        }
        timestamps.set(interaction.user.id, now)
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount)

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            if(interaction.replied || interaction.deferred){
                await interaction.followUp({content: 'There was an error while executing this command!', ephemeral: true })
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true})
            }
        }

    }
}