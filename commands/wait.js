module.exports = {
    name: "wait",
    description: "wait",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('แกไม่มีสิทธิ์!!')
        let t = args.slice(0).join(" ");

        message.channel.send(`
        ↷ ︶꒷₊˚ <:cashmoneycheck:916913842636865557> รับออเดอร์เรียบร้อยครับ ๑ ‧ ₊ * 
    \n⊹₊꒷︶꒷ <a:wait:929921846512611368> โดยปกติสินค้าใช้เวลาจัดส่งไม่เกิน ${t} ครับผม ꒷︶꒷꒦
    \n༺ ⋆ 𓈒 ♱ ขอบคุณที่ใช้บริการ P5 SHOP คร้าบ ♱ 𓈒 ⋆ ༻`)
        
    }
};