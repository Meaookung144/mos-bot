
module.exports = {
    name: "inyt",
    description: "yt",

    async run (client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
        message.channel.send(`<:YT05:922359969016324107> วิธีการตอบรับคำเชิญ Youtube [ BY P5 SHOP ]
        1. เข้าแอพ Gmail / เว็บ Gmail
        2. จะมีลิงก์ของยูทูปส่งไป
        3. จิ้มลิงก์ ➤ เลื่อนลงมา
        4. กด ACCEPT INVITATION
        5. กด GET STARTED 
        6. เลือกเมลให้ตรงกับที่ให้ทางร้านมา
        7. กด MORE
        8. กด JOIN FAMILY 
        9. กด VIEW FAMILY 
        10. กด เรียบร้อยแล้ว เข้าใช้งานในแอพได้เลย ถ้าเข้าแอพแล้วยังไม่เป็น Premium ให้รีแอปทีหนึ่งครับ
        
        https://media.discordapp.net/attachments/997118315459788891/997118691185528882/yt.png`)
        
    }
};