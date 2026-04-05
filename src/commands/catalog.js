const { EmbedBuilder } = require("discord.js");
const {
  buildEvalEmbed,
  createTextCommand,
  formatEvalValue,
  readOption,
  sanitizeEvalOutput
} = require("./helpers");

function ensureValue(value, message) {
  if (value == null || value === "") {
    throw new Error(message);
  }

  return value;
}

function parseAmount(context, optionName, fallbackIndex, missingMessage) {
  const raw = readOption(context, optionName, fallbackIndex);
  ensureValue(raw, missingMessage);

  const amount = Number(raw);
  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Please provide a valid amount.");
  }

  return amount;
}

function parseText(context, optionName, fallbackIndex, missingMessage) {
  return ensureValue(readOption(context, optionName, fallbackIndex), missingMessage);
}

const commands = [
  createTextCommand({
    name: "eval",
    description: "Evaluate JavaScript as the bot owner.",
    permission: "owner",
    options: [
      {
        name: "code",
        description: "JavaScript to evaluate",
        required: true
      }
    ],
    async execute(context) {
      const code = parseText(context, "code", 0, "Put something to Evaluate.");
      if (String(code).toLowerCase().includes("token")) {
        return "no token for u.";
      }

      try {
        const value = await Promise.resolve(eval(code));
        const output = sanitizeEvalOutput(formatEvalValue(value), context.config);
        return buildEvalEmbed({
          code,
          output,
          title: "Evaluation",
          footer: `Evaluated for ${context.user.tag || context.user.username}`
        });
      } catch (error) {
        return {
          embeds: [
            new EmbedBuilder()
              .setTitle("Error")
              .setDescription(String(error).slice(0, 4000))
          ]
        };
      }
    }
  }),
  createTextCommand({
    name: "hi",
    description: "Send the P5 Shop greeting.",
    permission: "admin",
    async execute() {
      return `<:cashmoneycheck:916913842636865557> สวัสดีครับ P5 SHOP ยินดีให้บริการครับ <:cashmoneycheck:916913842636865557>\n<a:918153692128100412:919906823769825321>  แจ้งสื่งที่ต้องการได้เลยครับ <a:9420mcbeespin:916933018411757578>`;
    }
  }),
  createTextCommand({
    name: "hmpr",
    description: "Send HMPR website setup instructions.",
    permission: "admin",
    async execute() {
      return [
        "<:mouseclickcursor:916913555914252309>  ขั้นตอนการติดตั้งและ ตั้งค่าเว็บไซต์ HMPR เมื่อแอดมินแจ้งว่าติดตั้งเสร็จเรียบร้อยแล้ว\n\n1  ให้ท่านทำการสมัคร สมาชิก ของเว็บไซต์ของท่าน จากนั้น ทำการแจ้ง Username ของท่าน เพื่อ ให้ แอดมินให้ยศ เพื่อเข้าสู่หลังบ้าน  โดยที่หลักการการตั้ง Username คือ Username ยาวมากกว่า 3 ตัวแต่น้อยกว่า 16 ตัว",
        "https://media.discordapp.net/attachments/874088215798226944/1055475784216739930/image.png?width=469&height=527",
        "2  เมื่อแอดมินให้ยศเรียบร้อยแล้วให้กดที่ Icon รูปตัวคน   >  แล้วเลือก  หลังบ้าน",
        "https://media.discordapp.net/attachments/874088215798226944/1055476166288486400/image.png?width=226&height=389",
        "3 จากนั้น ทำการเลือกเมนูตรงแถบเมนูด้านข้่าง หรือ Side Bar > ตั้งค่าทั่วไป > ตั้งค่าข้อมูลเว็บไซต์",
        "https://media.discordapp.net/attachments/874088215798226944/1055476408262082570/image.png?width=340&height=261",
        "4 หากท่าน Config ไม่เป็น ท่านสามารถเลือกรับชมวิดีโอสาธิตการ ตั้งค่าเว็บไซตฺ์ ได้ที่ กรอบ วิธีการใช้งาน\n\nเพิ่มเติม ในส่วนของ การตั้งค่าเว็บไซต์ ท่านสามารถใช้ Html tag ต่างๆได้ เช่น <br> <a> <hr> <li> <ul> เป็นต้น ในเฉพาะส่วนของ รายละเอียดส่วนท้ายของเว็บ ประกาศของเว็บ เท่านั้น",
        "https://media.discordapp.net/attachments/874088215798226944/1055477095758831667/image.png?width=901&height=527",
        "?  หากท่านมีคำถามที่สงสัยเพิ่มเติม หรือ ต้องการสอบถามข้อมูลเพิ่มเติมในด้านต่าง สามารถสอบถาม แอดมินได้ ใน Ticket นี้ครับ",
        "<#997125382916554862> สำหรับห้องนี้จะใช้สำหรับการประกาศต่างๆของเว็บนะครับ สามาถดูประกาศ อัพเดตหรือว่าแจ้งเว็บมีปัญหาได้เลยนะครับ\n\n<#1040633002864152606> ห้องนี้จะแจ้งข้อกำหนดการให้บริการเว็บไซต์ระบบเช่า และ กฏการใช้งาน กรุณาอ่านด้วยนะครับ\n\n<#997125680854736917>  ห้องนี้ใช้ในการพูดคุยติดต่อสื่อสารกับผู้ใช้งานเว็บไซต์คนอื่นแจ้งบัคหรือปัญหาแบบส่วนรวมและสามารถขอระบบหรือเสนอระบบต่างๆได้เลยนะครับ\n\n<:hmprwhite:1029035095958495262> สำหรับ Ticket เว็บนี้จะอยู่กับท่านไปตลอดการใช้งานเว็บไซต์นะครับ\n\n<:incorrectnonotnotcheck:916913350041026610> ไม่ต้องกดปิด ticket ครับผม"
      ];
    }
  }),
  createTextCommand({
    name: "inyt",
    description: "Send YouTube invitation instructions.",
    permission: "admin",
    async execute() {
      return `<:YT05:922359969016324107> วิธีการตอบรับคำเชิญ Youtube [ BY P5 SHOP ]\n1. เข้าแอพ Gmail / เว็บ Gmail\n2. จะมีลิงก์ของยูทูปส่งไป\n3. จิ้มลิงก์ ➤ เลื่อนลงมา\n4. กด ACCEPT INVITATION\n5. กด GET STARTED\n6. เลือกเมลให้ตรงกับที่ให้ทางร้านมา\n7. กด MORE\n8. กด JOIN FAMILY\n9. กด VIEW FAMILY\n10. กด เรียบร้อยแล้ว เข้าใช้งานในแอพได้เลย ถ้าเข้าแอพแล้วยังไม่เป็น Premium ให้รีแอปทีหนึ่งครับ\n\nhttps://media.discordapp.net/attachments/997118315459788891/997118691185528882/yt.png`;
    }
  }),
  createTextCommand({
    name: "keygen",
    description: "Send Netflix rules.",
    permission: "admin",
    async execute() {
      return `✦ กรุณาอ่านก่อนเข้าใช้ NETFLIX P5 SHOP •₊˚。\n\n♡🔑 1จอ ต่อ1คน เป็นจอส่วนตัว ไม่มีการหารร่วม\n♡🖥️ เข้าใช้ทีละอุปกรณ์ ดูทีละเครื่อง\n♡🗝 ไม่อนุญาตให้นำไปแชร์หรือขายต่อ\n♡🔐 ตั้งรหัสพินเองได้เลย\n♡🪑 ห้ามเปลี่ยนรหัสเมล\n♡🧺 ห้ามเข้าใช้โปรไฟล์ของคนอื่น\n♡🔑 1 โปรไฟล์ ล็อคอินหลายเครื่องได้ แต่ต้องเปิดทีละเครื่อง\n♡🍂 แจ้งโปรไฟล์หลังการเปลื่ยนชื่อภายใน 24 ชม. หลังการสั่งซื้อ\n♡🌲 แจ้งต่อเมลก่อน 1-3 วันก่อนหมดอายุ [ บางแอคต่อไม่ได้ ]\n♡🧵 รับเคลมหากเข้าไม่ได้ ยกเว้นบล็อคโซน\n\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
    }
  }),
  createTextCommand({
    name: "longyt",
    description: "Send long-form YouTube premium instructions.",
    permission: "admin",
    options: [
      {
        name: "head",
        description: "Headline or package name",
        required: true
      },
      {
        name: "email",
        description: "Customer email",
        required: true
      }
    ],
    async execute(context) {
      const head = parseText(context, "head", 0, "Please provide the headline.");
      const email = parseText(context, "email", 1, "Please provide the customer email.");

      return `❧────༺♢༻────☙\n╭・ YT PREMIUM ต่อเมล ( BY P5 SHOP ) ◝ ⊹\n︰หัวบ้าน ・ ${head}\n︰เมลลูกค้า・ ${email}\n︰สามารถไปกดรับ YT PREMIUM  ใน Gmail เพื่อเปิดใช้งานได้เลยนะครับ\n︰เเละเเจ้งทางร้านด้วยว่ารับหรือยัง\n︰หมดอายุ : 00/0/2565 [ ควรแจ้งต่อก่อน 1-3 วัน ]\n╰ ・ลิงค์สำหรับลูกค้าเข้ากลุ่มแจ้งต่อเมล https://line.me/R/ti/g/x_n9EkqyVM\n❧────༺♢༻────☙\n\nhttps://cdn.discordapp.com/attachments/874088217689870397/936942717886414869/yt.png\nhttps://cdn.discordapp.com/attachments/874088217689870397/936942717588627466/yt_by_p5shop.png`;
    }
  }),
  createTextCommand({
    name: "nf",
    description: "Send Netflix rules.",
    permission: "admin",
    async execute() {
      return `✦ กรุณาอ่านก่อนเข้าใช้ NETFLIX P5 SHOP •₊˚。\n\n♡🔑 1จอ ต่อ1คน เป็นจอส่วนตัว ไม่มีการหารร่วม\n♡🖥️ เข้าใช้ทีละอุปกรณ์ ดูทีละเครื่อง\n♡🗝 ไม่อนุญาตให้นำไปแชร์หรือขายต่อ\n♡🔐 ตั้งรหัสพินเองได้เลย\n♡🪑 ห้ามเปลี่ยนรหัสเมล\n♡🧺 ห้ามเข้าใช้โปรไฟล์ของคนอื่น\n♡🔑 1 โปรไฟล์ ล็อคอินหลายเครื่องได้ แต่ต้องเปิดทีละเครื่อง\n♡🍂 แจ้งโปรไฟล์หลังการเปลื่ยนชื่อภายใน 24 ชม. หลังการสั่งซื้อ\n♡🌲 แจ้งต่อเมลก่อน 1-3 วันก่อนหมดอายุ [ บางแอคต่อไม่ได้ ]\n♡🧵 รับเคลมหากเข้าไม่ได้ ยกเว้นบล็อคโซน\n\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
    }
  }),
  createTextCommand({
    name: "otp",
    description: "Send OTP instructions.",
    permission: "admin",
    async execute() {
      return "การรับ OTP ต้องบอกว่าจะรับก่อนแล้วห้ามกด Login เลยทันที ต้องรอให้ทีมงานของเราบอกว่า Login ได้ก่อน มิเช่นนั้น Otp จะไม่ส่งมา\n<:bag:916912869839351858>  รอสักครู่ก่อนนะครับ <:bag:916912869839351858>\nโปรดส่งเบอร์ทิ้งไว้ที่นี่ เพื่อความสะดวกของแอดมินครับ ขอบคุณครับ <a:ap_catlove1702701537155088414:874539670527176764>";
    }
  }),
  createTextCommand({
    name: "outyt",
    description: "Send instructions to leave a YouTube family group.",
    permission: "admin",
    async execute() {
      return "╭・ʚ ?  ɞ・วิธีออกจากกลุ่มครอบครัว Youtube\n︰หนึ่ง・ให้ลูกค้าเข้าลิงค์  https://families.google.com/\n︰สอง・จากนั้นเข้าสู่ระบบเมลที่จะออกจากกลุ่มครอบครัว\n︰สาม・จากนั้นให้กดสามขีดที่มุมบนซ้าย ☰\n︰สี่・กดออกจากครอบครัวได้เลย\n╰・ʚ เย้ ɞ・ เสร็จเรียบร้อย";
    }
  }),
  createTextCommand({
    name: "pay",
    description: "Send payment instructions.",
    permission: "admin",
    options: [
      {
        name: "amount",
        description: "Payment amount",
        required: true,
        type: "number"
      }
    ],
    async execute(context) {
      const amount = parseAmount(context, "amount", 0, "ใส่ค่าด้วย");
      const fee = (amount * 1.02).toFixed(2);

      return [
        amount > 1000
          ? "https://media.discordapp.net/attachments/997118315459788891/997118557034909786/Payment.png"
          : "https://media.discordapp.net/attachments/874088215798226944/1033671238792515634/payment11-scb.png",
        `หากท่านโอนเงินผ่าน ทรูมั่นนี่วอลเล็ทกรุณาโอนเงินมากกว่าหรือเท่ากับ ${fee} บาท\n\n(แต่หากท่านโอนผ่านช่องทางอื่นเช่น ธนาคาร สแกน QR Prompt pay ผ่านทรูมั่นนี่วอลเล็ท / ธนาคาร ท่านสามารถชำระเงินจำนวน ${amount} บาทได้เลยไม่ต้องชำระค่าธรรมเนียม)\n\n<:incorrectnonotnotcheck:916913350041026610> ไม่รับซองของขวัญ Aungpao\n<a:bc7:855859841951465492>  ไม่มีนโยบายการคืนเงินกรุณาตรวจสอบก่อนการชำระเงิน`
      ];
    }
  }),
  createTextCommand({
    name: "qrpay",
    description: "Generate a PromptPay URL.",
    permission: "admin",
    options: [
      {
        name: "amount",
        description: "Payment amount",
        required: true,
        type: "number"
      }
    ],
    async execute(context) {
      const amount = parseAmount(context, "amount", 0, "Please provide an amount.");
      return `https://promptpay.io/0653192342/${amount}`;
    }
  }),
  createTextCommand({
    name: "shop-close",
    description: "Send the shop closed image.",
    permission: "admin",
    async execute() {
      return "https://media.discordapp.net/attachments/943318331077853224/943518627452293140/74a3dac7957716f4.png?width=881&height=330";
    }
  }),
  createTextCommand({
    name: "shop-open",
    description: "Send the shop open image.",
    permission: "admin",
    async execute() {
      return "https://media.discordapp.net/attachments/943318331077853224/943518627209031680/768715d22635d4b1.png?width=881&height=330";
    }
  }),
  createTextCommand({
    name: "spay",
    description: "Send special payment instructions.",
    permission: "admin",
    options: [
      {
        name: "amount",
        description: "Payment amount",
        required: true,
        type: "number"
      }
    ],
    async execute(context) {
      const amount = parseAmount(context, "amount", 0, "ใส่ค่าด้วย");
      const fee = (amount * 1.2).toFixed(2);

      return [
        "https://media.discordapp.net/attachments/874088215798226944/1033671238792515634/payment11-scb.png",
        `หากท่านโอนเงินผ่าน ทรูมั่นนี่วอลเล็ทกรุณาโอนเงินมากกว่าหรือเท่ากับ ${fee} บาท\n\n(แต่หากท่านโอนผ่านช่องทางอื่นเช่น ธนาคาร สแกน QR Prompt pay ผ่านทรูมั่นนี่วอลเล็ท / ธนาคาร ท่านสามารถชำระเงินจำนวน ${amount} บาทได้เลยไม่ต้องชำระค่าธรรมเนียม)\n\n<:incorrectnonotnotcheck:916913350041026610> ไม่รับซองของขวัญ Aungpao\n<a:bc7:855859841951465492>  ไม่มีนโยบายการคืนเงินกรุณาตรวจสอบก่อนการชำระเงิน`
      ];
    }
  }),
  createTextCommand({
    name: "spot",
    description: "Send Spotify usage rules.",
    permission: "admin",
    async execute() {
      return "**โปรดอ่านให้ละเอียดครบถ้วนก่อนการใช้งาน**\n\nขอความร่วมมือคุณลูกค้า ปิด Location / GPS หรืออะไรก็ตามที่เกี่ยวข้อง (ทั้งตัวเครื่องและตัวแอพ) ตลอดการใช้งานของลูกค้า เน้นย้ำว่า **ปิด GPS ตัวเครื่อง ตลอด การใช้งาน**\n\nหากหลุด Premium ทางร้านขออนุญาต**ปรับ 2,000 บาทนะครับ** และทางร้านจะไม่รับผิดชอบใดๆ ทั้งสิ้น\n\nหากมีข้อสงสัยในการปิด GPS หรือข้อสงสัยในการใช้งานใดๆ ทางร้าน P5SHOP ยินดีให้บริการเสมอนะครับ สามารถติดต่อสอบถามได้ทันที\n\nขอบคุณที่ใช้บริการครับ";
    }
  }),
  createTextCommand({
    name: "ticket",
    description: "Send ticket close helper commands.",
    permission: "admin",
    async execute() {
      return ["$close", "$transcript", "$delete"];
    }
  }),
  createTextCommand({
    name: "tryweb",
    description: "Send HMPR website example credentials.",
    permission: "admin",
    async execute() {
      return "<a:ashield01849929380875862056:874525183652818954> ตัวอย่างหน้าเว็บระบบเช่า HMPR\nเว็บไซต์ : https://rent.p5shop.in.th\nUsername : admin_rent\nPassword : admin_rent";
    }
  }),
  createTextCommand({
    name: "ty",
    description: "Send the thank-you message.",
    permission: "admin",
    async execute() {
      return "<:netherstar:916933016662728765> ขอบคุณที่ใช้บริการ P5 SHOP นะครับ <:netherstar:916933016662728765>\nถ้าถูกใจ ฝากเครดิต <:credit:854305886306828289> ให้เราที่ <#997090728943558686> ด้วยนะครับ\nแล้วแวะมาอุดหนุนใหม่นะคร้าบบบ <:congrats:924517045696090152>\nถ้าไม่มีอะไรแล้ว กดปิด ticket โดยพิมพ์ $close ได้เลยครับผม <a:9420mcbeespin:916933018411757578>\n<a:bc7:855859841951465492> อย่าลืม Save ข้อความสินค้าไว้ก่อนจะปิด Ticket นะครับ";
    }
  }),
  createTextCommand({
    name: "wait",
    description: "Send the order wait message.",
    permission: "admin",
    options: [
      {
        name: "duration",
        description: "Expected delivery time",
        required: true
      }
    ],
    async execute(context) {
      const duration = parseText(context, "duration", 0, "Please provide the expected duration.");
      return `↷ ︶꒷₊˚ <:cashmoneycheck:916913842636865557> รับออเดอร์เรียบร้อยครับ ๑ ‧ ₊ *\n\n⊹₊꒷︶꒷ <a:wait:929921846512611368> โดยปกติสินค้าใช้เวลาจัดส่งไม่เกิน ${duration} ครับผม ꒷︶꒷꒦\n\n༺ ⋆ 𓈒 ♱ ขอบคุณที่ใช้บริการ P5 SHOP คร้าบ ♱ 𓈒 ⋆ ༻`;
    }
  }),
  createTextCommand({
    name: "webplan",
    description: "Send the HMPR web plan image.",
    permission: "admin",
    async execute() {
      return [
        "PLAN ราคาค่าเช่าเว็บ HMPR",
        "https://media.discordapp.net/attachments/874088215798226944/1031542335965777950/hmpr-plan-rentweb2.png"
      ];
    }
  }),
  createTextCommand({
    name: "prefix",
    description: "View or update the guild prefix fallback.",
    permission: "admin",
    options: [
      {
        name: "value",
        description: "New prefix to save for this server",
        required: false
      }
    ],
    async execute(context) {
      if (!context.guildId) {
        return "This command can only be used in a server.";
      }

      const nextPrefix = readOption(context, "value", 0);
      if (!nextPrefix) {
        const currentPrefix = context.store.getPrefix(context.guildId);
        return `Current prefix: \`${currentPrefix}\``;
      }

      context.store.setPrefix(context.guildId, String(nextPrefix).trim());
      return `Updated prefix to \`${String(nextPrefix).trim()}\``;
    }
  })
];

module.exports = {
  commands
};
