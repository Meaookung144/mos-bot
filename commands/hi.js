module.exports = {
    name: "hi",
    description: "hi",

    async run (client, message, args){

        
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`<:cashmoneycheck:916913842636865557> สวัสดีครับ P5 SHOP ยินดีให้บริการครับ <:cashmoneycheck:916913842636865557> 
        <a:918153692128100412:919906823769825321>  แจ้งสื่งที่ต้องการได้เลยครับ <a:9420mcbeespin:916933018411757578>`)
        
    }
};