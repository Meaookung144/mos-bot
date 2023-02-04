module.exports = {
    name: "outyt",
    description: "out yt",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`╭・ʚ ?  ɞ・วิธีออกจากกลุ่มครอบครัว Youtube
  ︰หนึ่ง・ให้ลูกค้าเข้าลิงค์  https://families.google.com/
  ︰สอง・จากนั้นเข้าสู่ระบบเมลที่จะออกจากกลุ่มครอบครัว
  ︰สาม・จากนั้นให้กดสามขีดที่มุมบนซ้าย ☰
  ︰สี่・กดออกจากครอบครัวได้เลย
  ╰・ʚ เย้ ɞ・ เสร็จเรียบร้อย`)
        
    }
};