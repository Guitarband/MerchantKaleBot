const { Events, Collection, EmbedBuilder, AttachmentBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js')
const weapon_data = require('../resources/weapon_data.json')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        const command = interaction.client.commands.get(interaction.commandName)
        if (!command) {
            if(interaction.isStringSelectMenu() || interaction.isButton()){
                let itemId = undefined
                let command = undefined
                let itemEmbed = undefined
                let itemButton = undefined

                if(interaction.customId === 'selecto'){
                    itemId = interaction.values[0]
                    command = 'info'
                }
                else{
                    itemId = interaction.customId.split(':')[2]
                    command = interaction.customId.split(':')[0]
                }

                const attachment = new AttachmentBuilder(
                    `${weapon_data[itemId].image}`,
                )
                attachment.name = 'thumbnail.png'

                if(command === 'stats'){
                    itemEmbed = new EmbedBuilder()
                        .setColor(0x0099ff)
                        .setTitle(weapon_data[itemId].name)
                        .setThumbnail(`attachment://${attachment.name}`)
                        .setFooter({text:`${weapon_data[itemId].type}`})

                    itemEmbed.addFields({name:'> Attack                                         ', value: ' '})
                    for(let attribute of weapon_data[itemId].attack){
                        itemEmbed.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                    }

                    itemEmbed.addFields({name:'> Guard                                           ', value: ' '})
                    for(let attribute of weapon_data[itemId].guard){
                        itemEmbed.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                    }

                    itemEmbed.addFields({name:'> Scaling                                          ', value: ' '})
                    for(let attribute of weapon_data[itemId].scaling){
                        itemEmbed.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                    }

                    itemEmbed.addFields({name:'> Requires                                          ', value: ' '})
                    for(let attribute of weapon_data[itemId].requirements){
                        itemEmbed.addFields({name:`*${attribute.name}*`, value:`${attribute.value}`, inline: true})
                    }

                    itemButton = new ButtonBuilder()
                        .setCustomId(`info:weapon:${itemId}`)
                        .setLabel('Show Info')
                        .setStyle(ButtonStyle.Primary)


                }
                else{
                    itemEmbed = new EmbedBuilder()
                        .setColor(0x0099ff)
                        .setTitle(weapon_data[itemId].name)
                        .setImage(`attachment://${attachment.name}`)
                        .setDescription(`*${weapon_data[itemId].description}*`)
                        .setFooter({text:`${weapon_data[itemId].type}`})

                    itemButton = new ButtonBuilder()
                        .setCustomId(`stats:weapon:${itemId}`)
                        .setLabel('Show Stats')
                        .setStyle(ButtonStyle.Primary)

                }

                const row = new ActionRowBuilder()
                    .addComponents(itemButton)

                await interaction.update({
                    embeds: [itemEmbed],
                    components: [row],
                    content: '\u200B',
                    files: [attachment]
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