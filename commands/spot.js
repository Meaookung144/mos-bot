module.exports = {
    name: "spot",
    description: "spot",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You Don\'t have permissions.')
    message.channel.send(`
    **โปรดอ่านให้ละเอียดครบถ้วนก่อนการใช้งาน**

ขอความร่วมมือคุณลูกค้า ปิด Location / GPS หรืออะไรก็ตามที่เกี่ยวข้อง (ทั้งตัวเครื่องและตัวแอพ) ตลอดการใช้งานของลูกค้า เน้นย้ำว่า **ปิด GPS ตัวเครื่อง ตลอด การใช้งาน**

หากหลุด Premium ทางร้านขออนุญาต**ปรับ 2,000 บาทนะครับ** และทางร้านจะไม่รับผิดชอบใดๆ ทั้งสิ้น

หากมีข้อสงสัยในการปิด GPS หรือข้อสงสัยในการใช้งานใดๆ ทางร้าน P5SHOP ยินดีให้บริการเสมอนะครับ สามารถติดต่อสอบถามได้ทันที

ขอบคุณที่ใช้บริการครับ`)
    }
};
