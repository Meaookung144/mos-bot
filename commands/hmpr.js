
module.exports = {
    name: "hmpr",
    description: "hmpr",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        let t = args.slice(0).join(" ");

		message.channel.send(`<:mouseclickcursor:916913555914252309>  ขั้นตอนการติดตั้งและ ตั้งค่าเว็บไซต์ HMPR เมื่อแอดมินแจ้งว่าติดตั้งเสร็จเรียบร้อยแล้ว

1  ให้ท่านทำการสมัคร สมาชิก ของเว็บไซต์ของท่าน จากนั้น ทำการแจ้ง Username ของท่าน เพื่อ ให้ แอดมินให้ยศ เพื่อเข้าสู่หลังบ้าน  โดยที่หลักการการตั้ง Username คือ Username ยาวมากกว่า 3 ตัวแต่น้อยกว่า 16 ตัว `);
		message.channel.send(`https://media.discordapp.net/attachments/874088215798226944/1055475784216739930/image.png?width=469&height=527`);
		message.channel.send(`2  เมื่อแอดมินให้ยศเรียบร้อยแล้วให้กดที่ Icon รูปตัวคน   >  แล้วเลือก  หลังบ้าน`);
		message.channel.send(`https://media.discordapp.net/attachments/874088215798226944/1055476166288486400/image.png?width=226&height=389`);
		message.channel.send(`3 จากนั้น ทำการเลือกเมนูตรงแถบเมนูด้านข้่าง หรือ Side Bar > ตั้งค่าทั่วไป > ตั้งค่าข้อมูลเว็บไซต์`);
		message.channel.send(`https://media.discordapp.net/attachments/874088215798226944/1055476408262082570/image.png?width=340&height=261`);
		message.channel.send(`4 หากท่าน Config ไม่เป็น ท่านสามารถเลือกรับชมวิดีโอสาธิตการ ตั้งค่าเว็บไซตฺ์ ได้ที่ กรอบ วิธีการใช้งาน

เพิ่มเติม ในส่วนของ การตั้งค่าเว็บไซต์ ท่านสามารถใช้ Html tag ต่างๆได้ เช่น <br> <a> <hr> <li> <ul> เป็นต้น ในเฉพาะส่วนของ รายละเอียดส่วนท้ายของเว็บ ประกาศของเว็บ เท่านั้น`);
		message.channel.send(`https://media.discordapp.net/attachments/874088215798226944/1055477095758831667/image.png?width=901&height=527`);
		message.channel.send(` ?  หากท่านมีคำถามที่สงสัยเพิ่มเติม หรือ ต้องการสอบถามข้อมูลเพิ่มเติมในด้านต่าง สามารถสอบถาม แอดมินได้ ใน Ticket นี้ครับ`);

        message.channel.send(`<#997125382916554862> สำหรับห้องนี้จะใช้สำหรับการประกาศต่างๆของเว็บนะครับ สามาถดูประกาศ อัพเดตหรือว่าแจ้งเว็บมีปัญหาได้เลยนะครับ
        \n <#1040633002864152606> ห้องนี้จะแจ้งข้อกำหนดการให้บริการเว็บไซต์ระบบเช่า และ กฏการใช้งาน กรุณาอ่านด้วยนะครับ
        \n <#997125680854736917>  ห้องนี้ใช้ในการพูดคุยติดต่อสื่อสารกับผู้ใช้งานเว็บไซต์คนอื่นแจ้งบัคหรือปัญหาแบบส่วนรวมและสามารถขอระบบหรือเสนอระบบต่างๆได้เลยนะครับ
        \n <:hmprwhite:1029035095958495262> สำหรับ Ticket เว็บนี้จะอยู่กับท่านไปตลอดการใช้งานเว็บไซต์นะครับ
        \n<:incorrectnonotnotcheck:916913350041026610> ไม่ต้องกดปิด ticket ครับผม`)
        
    }
};