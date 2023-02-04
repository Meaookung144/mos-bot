module.exports = {
    name: "otp",
    description: "otp",

    async run (client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`
        การรับ OTP ต้องบอกว่าจะรับก่อนแล้วห้ามกด Login เลยทันที ต้องรอให้ทีมงานของเราบอกว่า Login ได้ก่อน มิเช่นนั้น Otp จะไม่ส่งมา
<:bag:916912869839351858>  รอสักครู่ก่อนนะครับ <:bag:916912869839351858> 
โปรดส่งเบอร์ทิ้งไว้ที่นี่ เพื่อความสะดวกของแอดมินครับ ขอบคุณครับ <a:ap_catlove1702701537155088414:874539670527176764>
        `);
     
    }
};
