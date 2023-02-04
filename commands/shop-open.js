module.exports = {
    name: "shop-open",
    description: "open shop",

    async run (client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
    message.channel.send('https://media.discordapp.net/attachments/943318331077853224/943518627209031680/768715d22635d4b1.png?width=881&height=330')
    }
};
