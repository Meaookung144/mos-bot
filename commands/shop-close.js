    module.exports = {
        name: "shop-close",
        description: "close shop",
    
        async run (client, message, args){
    
        
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
            message.channel.send('https://media.discordapp.net/attachments/943318331077853224/943518627452293140/74a3dac7957716f4.png?width=881&height=330')
        }
    };
    