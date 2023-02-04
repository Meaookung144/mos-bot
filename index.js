const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' })
const config = require('./config.json');
const db = require('quick.db');
const { GiveawaysManager } = require('discord-giveaways');
const { join } = require('path');
const { readdirSync } = require('fs');
const { token, default_prefix } = require('./config.json');
client.commands= new Discord.Collection();
client.config = config;



/*
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#Fbe4ff",
        reaction: "🎉"
    }
});
*/

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
//Handler
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}
//Handler

//check
client.on("error", console.error);

client.once("ready", () => {
    console.log("I am ready!");
    client.user.setStatus(`idle`);
  });
//check



//Handler
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;
    

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);
            console.log(command);

        } catch (error){
            console.error(error);
        }
    }
})
//Handler

client.login(token);