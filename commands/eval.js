const Discord  = require("discord.js");
const beautify = require("beautify");  
const { RichEmbed } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
name: "eval",
aliases: ["ee", "evaluate"],
description: "Evaluate",
run: async (client, message, args) => {
    if (message.author.id !== '494104713797828608') {
     return message.channel.send("You are not owner!")
    }

    if (!args[0]) {
        return message.channel.send("Put something to Evaluate.")
    }

    try {

        if (args.join(" ").toLowerCase().includes("token")){
            return message.channel.send("no token for u.")
        }

    
    
    const toEval = args.join(" ");

    //Stuff
    const helpembed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setDescription('My prefix is .')
    .addField('**Currency** [Beta]', "bal, daily, work")
    .addField('**Fun**', "meme")
    .addField('**Giveaway**', "gstart, gcreate, gend, greroll")
    .addField('**Utilities**', "avatar, calc, ping, say, roleinfo, invite")
    .addField('**Moderation**', "kick")
    .setFooter("Page 1/1 • Mos bot Beta.")
    const adminembed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setDescription('My prefix is .')
    .addField('**Currency** [Beta]', "bal, daily, work")
    .addField('**Fun**', "meme")
    .addField('**Giveaway**', "gstart, gcreate, gend, greroll")
    .addField('**Utilities**', "avatar, calc, ping, say, roleinfo, invite")
    .addField('**Moderation**', "kick")
    .setFooter("Page 1/1 • Mos bot Beta. [Dev]"+" • "+`${client.ws.ping} ms`)
    const devembed = new Discord.MessageEmbed()
    .setTitle('Dev')
    .setDescription('For you.')
    .addField('Prefix is "."', 'eval, f-del, f-gcreate, f-greroll, f-gstart, f-kick, f-everyone, gp')
    .setFooter(`${client.ws.ping} ms`)
    const { MessageFlags } = require("discord.js");
    const db = require("quick.db");
    const randomPuppy = require('random-puppy');
    const ms = require('ms');
    const math = require('mathjs');
    const ytdl = require('ytdl-core');
    //Stuff
    
    const evaluted = eval(toEval);
    

    let evalembed = new Discord.MessageEmbed()
    .setFooter(`Evaluated in ${client.ws.ping} ms`)
    .setTitle("Evaluation")
    .addField("Input:", `\`\`\`ks\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
    .addField("Output:", evaluted)

    message.channel.send(evalembed)

    } catch(e) {
        let amount = Math.floor(Math.random() * 150);
        let ping = client.ws.ping
        let evalms = (ping-amount);
        let Eembed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(e)
        .setFooter(`Evaluated in ${evalms - Math.floor(Math.random() * 150)}  ms`)

        message.channel.send(Eembed)
    }



}}
