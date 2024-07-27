const {REST, Routes} = require('discord.js')
//const {REST} = require('discord.js')
const dotenv = require('dotenv')
const fs = require('node:fs')
const path = require('node:path')

dotenv.config()

const commands = []
const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)

for(const folder of commandFolders){
    const commandsPath = path.join(foldersPath, folder)
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
    for(const file of commandFiles){
        const filePath = path.join(commandsPath,file)
        const command = require(filePath)
        if('data' in command && 'execute' in command){
            commands.push(command.data.toJSON())
        }else{
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`)
        }
    }
}

const rest = new REST().setToken(process.env.discord_token);

rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
/*
(async () => {
    try{
        console.log(`Started regresing ${commands.length} application (/) commands.`)
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
            { body: commands },
        )
        console.log(`Successfully reloaded ${data.length} application (/) commands.`)
    } catch(error){
        console.error(error)
    }
})

 */