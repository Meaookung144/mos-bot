
module.exports = {
    name: "longyt",
    description: "long yt",

    async run (client, message, args){
       
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`❧────༺♢༻────☙
    ╭・ YT PREMIUM ต่อเมล ( BY P5 SHOP ) ◝ ⊹ 
    ︰หัวบ้าน ・ ${args[0]} 
    ︰เมลลูกค้า・ ${args[1]} 
    ︰สามารถไปกดรับ YT PREMIUM  ใน Gmail เพื่อเปิดใช้งานได้เลยนะครับ
    ︰เเละเเจ้งทางร้านด้วยว่ารับหรือยัง
    ︰หมดอายุ : 00/0/2565 [ ควรแจ้งต่อก่อน 1-3 วัน ]
    ╰ ・ลิงค์สำหรับลูกค้าเข้ากลุ่มแจ้งต่อเมล https://line.me/R/ti/g/x_n9EkqyVM
    ❧────༺♢༻────☙
    
    https://cdn.discordapp.com/attachments/874088217689870397/936942717886414869/yt.png
    https://cdn.discordapp.com/attachments/874088217689870397/936942717588627466/yt_by_p5shop.png`)
    }
};