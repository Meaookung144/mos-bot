module.exports = {
    name: "pay",
    description: "pay",

    async run (client, message, args){
        let amt = args[0];
        if(!amt) return message.channel.send("ใส่ค่าด้วย");
        let fee = parseFloat(amt*1.02);
		if(amt > 1000){
			message.channel.send(`https://media.discordapp.net/attachments/997118315459788891/997118557034909786/Payment.png`)
		}else{
			message.channel.send('https://media.discordapp.net/attachments/874088215798226944/1033671238792515634/payment11-scb.png')
		}

        message.channel.send(`หากท่านโอนเงินผ่าน ทรูมั่นนี่วอลเล็ทกรุณาโอนเงินมากกว่าหรือเท่ากับ ${fee} บาท 
        \n(แต่หากท่านโอนผ่านช่องทางอื่นเช่น ธนาคาร สแกน QR Prompt pay ผ่านทรูมั่นนี่วอลเล็ท / ธนาคาร ท่านสามารถชำระเงินจำนวน ${amt} บาทได้เลยไม่ต้องชำระค่าธรรมเนียม) 
        \n<:incorrectnonotnotcheck:916913350041026610> ไม่รับซองของขวัญ Aungpao 
        \n<a:bc7:855859841951465492>  ไม่มีนโยบายการคืนเงินกรุณาตรวจสอบก่อนการชำระเงิน
        `);
        
    }
};