
module.exports = {
    name: "webplan",
    description: "webplan",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        let t = args.slice(0).join(" ");

        message.channel.send(`PLAN ราคาค่าเช่าเว็บ HMPR`)
        message.channel.send(`https://media.discordapp.net/attachments/874088215798226944/1031542335965777950/hmpr-plan-rentweb2.png`)
        
    }
};