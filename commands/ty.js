module.exports = {
    name: "ty",
    description: "ty",

    async run (client, message, args){

    
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`<:netherstar:916933016662728765> ขอบคุณที่ใช้บริการ P5 SHOP นะครับ <:netherstar:916933016662728765>
       ถ้าถูกใจ ฝากเครดิต <:credit:854305886306828289> ให้เราที่ <#997090728943558686> ด้วยนะครับ
       แล้วแวะมาอุดหนุนใหม่นะคร้าบบบ <:congrats:924517045696090152>
       ถ้าไม่มีอะไรแล้ว กดปิด ticket โดยพิมพ์ $close ได้เลยครับผม <a:9420mcbeespin:916933018411757578>
       <a:bc7:855859841951465492> อย่าลืม Save ข้อความสินค้าไว้ก่อนจะปิด Ticket นะครับ `)
    }
};

