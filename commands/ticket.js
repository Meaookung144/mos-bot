module.exports = {
    name: "ticket",
    description: "ticket",

    async run (client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.');
        message.channel.send(`$close`);
        message.channel.send(`$transcript`);
        message.channel.send(`$delete`);
        
    }
};