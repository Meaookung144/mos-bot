
module.exports = {
    name: "tryweb",
    description: "tryweb",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        let t = args.slice(0).join(" ");

        message.channel.send(`<a:ashield01849929380875862056:874525183652818954> ตัวอย่างหน้าเว็บระบบเช่า HMPR
        \nเว็บไซต์ : https://rent.p5shop.in.th
        Username : admin_rent
        Password : admin_rent
        `)
        
    }
};