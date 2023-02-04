module.exports = {
    name: "qrpay",
    description: "qr pay",

    async run (client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
    let amt = args[0]
      message.channel.send(`https://promptpay.io/0653192342/${amt}`)
    }
};
