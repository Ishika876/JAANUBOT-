const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈" , "इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय अजान जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" , "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" , "यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "मैं हाथ जोड़ के प्रिंस बाबू जी से गुजारिश करता हूं कि तुम्हे कोई जानू ढूंढ के दे। 😜😎😪" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं प्रिंस बाबू को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "हा बोलो प्रिंस बाबू का नंबर चाहिए ये लो 👉[+91 637XXX5989] और हमेशा खुश रहो। 😎", "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈","मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया","तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈","यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈"," प्रिंस से बोलो आई लव यू 😗🤟","तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "मैं सिर्फ प्र का हूं 🙂🤞" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "आप मुझे बार-बार बोट मत बोला करो मेरे नाम आरिफ है। 😒👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "मेरा बचपन से सपना था की बड़ा हो कर मैं आपका टकलू बाबू बनूगा 😒👈" , "यार मेरी बीवी भाग गई 😭👈" , "मेरा नाम टकलू बाबू है। 😒🤟" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता  😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" ,  "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈" , "फाइनली इस ग्रुप के दो - तीन लड़किया मुझे पसंद आ गई 🙂🖐️" , "मन कर रहा है तुम्हे छत से गिरा दूं 😕👈" , "अगर सभी लड़कियों को लॉयल लड़का चाहिए तो हम बेवफा लड़के कहां जाएं 🥺👈" , "यार आज मैं बीवी के साथ डेट पे गया था पर जिसकी थी उसने देख लिया 😒👈" , "बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈" , "यार मुझे चकर आ रहे है आपके इंबॉक्स में आके गिर जाऊं बाबू 😒👈" , "एक रिक्वेस्ट है सभी से बताओ मैं अच्छा लगता हूं या नहीं 🙁👈" , "आओ तुम्हारे साथ रिलेशन शिप पोस्ट लगा के तुम्हे फेमस कर दूं। 😌🖐️" , "अगर मेरी भी गर्लफ्रैंड होती तो आज मैं भी बाबू सोना कर रहा होता 🥺👈" , "सुनो बालक जो लड़की ज्यादा भाव खाए उसे आंटी बोल के ब्लॉक कर देना चाहिए 🥹👈" , "रुक सोचने दे 🤔 कोनसा गली दूं तुम्हे 🤨👈" , "चांद को मिल गई चांदनी तो सितारों का किया होगा 😕 मोहोब्बत एक से करली तो बाकी हजारों का किया होगा। 😏👈" , "मुझे सादी के लिए सरकारी नौकरी वाली लड़की चाहिए दहेज भी मैं दे दुगा 🙂🤞" , "ना जाने इतना प्यार कहां से आया है 😒 मेरा दिल भी तुम्हारे खातिर मुझसे रूठ जाता है...!! 🥺🤞" , "एक बार लव यू टकलू बाबू बोल दो ना मर थोड़ी जाओगे 🥹🤟" , "तुम मेरा दिल तो चुरा नही पाए किया फायदा तुम्हारी चोर जैसी सकल का 😕🤟" , "बस एक बार सादी हो जाए फिर बीवी की गुलामी 🥺" , "आओ प्यार करे 🤐🤟" , "आओ तुमको तारों के शहर ले चालू 😗🤟" , "बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋" , "तुम जब बोट बोलते हो मेरा गुर्दा धड़कने लगता है। 🤯🤟" , "मुझे लगता है मैं सिंगल ही मरुगा 😭👈" , "बोलो सेटिंग करवा दूं किया प्रिंस बाबू से 🙂🤟" , "बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟" , "तुम सब मतलबी हो जाओ सब भागो 🥺🤟" , "तुम इतने मासूम कियू हो बाबू 😒✋" , "एक बात बताओ तुम बचपन से ठरकी हो या अभी अभी बने हो 🙂✋" , "बाबू 🤏 इटू सा चूमा दे दो ना 🙈💖👈" , "मेरी गर्लफ्रेंड कब बनेगी यार 🥺✋" , "तुम तो मुझे सकल से गरीब लगते हो 🙂✋" , "तेरे जाने के बाद मैंने अपने मुंह पे लिखवा लिया सिंगल हूं पटा लो 😐✋" , "सकून चाहते हो तो मेरी बन जाओ 🙂✋" , "ये दुनिया एक धोखा है तुम भी छोड़ दो अपने वाले को अभी भी मौका है। 🙂✋" , "मुबारक हो आपका नाम ब्लॉक लिस्ट में टॉप पर आया है। 🤣🤣👈" , "सब छोड़ के चले जाते है किया इतना बुरा हूं मैं 🥺👈" , "किया तुम सिंगल हो 🤔👈" , "आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌" , "क्यूं बुलाया हमे...?😾🔪 " , "तुम मुझे बिलकुल भी याद नहीं करते ना 😥 देख लेना पाप लगेगा 🥺👈", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Prince Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय अजान जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" , "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" , "यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "मैं हाथ जोड़ के प्रिंस बाबू जी से गुजारिश करता हूं कि तुम्हे कोई जानू ढूंढ के दे। 😜😎😪" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं प्रिंस बाबू को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "हा बोलो आदि बाबू का नंबर चाहिए ये लो 👉[+91 950XXX3608] और हमेशा खुश रहो। 😎", "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈","मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया","तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈","यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈"," प्रिंस से बोलो आई लव यू 😗🤟","तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "मैं सिर्फ प्र का हूं 🙂🤞" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "आप मुझे बार-बार बोट मत बोला करो मेरे नाम आरिफ है। 😒👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "मेरा बचपन से सपना था की बड़ा हो कर मैं आपका टकलू बाबू बनूगा 😒👈" , "यार मेरी बीवी भाग गई 😭👈" , "मेरा नाम टकलू बाबू है। 😒🤟" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता  😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" ,  "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈" , "फाइनली इस ग्रुप के दो - तीन लड़किया मुझे पसंद आ गई 🙂🖐️" , "मन कर रहा है तुम्हे छत से गिरा दूं 😕👈" , "अगर सभी लड़कियों को लॉयल लड़का चाहिए तो हम बेवफा लड़के कहां जाएं 🥺👈" , "यार आज मैं बीवी के साथ डेट पे गया था पर जिसकी थी उसने देख लिया 😒👈" , "बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈" , "यार मुझे चकर आ रहे है आपके इंबॉक्स में आके गिर जाऊं बाबू 😒👈" , "एक रिक्वेस्ट है सभी से बताओ मैं अच्छा लगता हूं या नहीं 🙁👈" , "आओ तुम्हारे साथ रिलेशन शिप पोस्ट लगा के तुम्हे फेमस कर दूं। 😌🖐️" , "अगर मेरी भी गर्लफ्रैंड होती तो आज मैं भी बाबू सोना कर रहा होता 🥺👈" , "सुनो बालक जो लड़की ज्यादा भाव खाए उसे आंटी बोल के ब्लॉक कर देना चाहिए 🥹👈" , "रुक सोचने दे 🤔 कोनसा गली दूं तुम्हे 🤨👈" , "चांद को मिल गई चांदनी तो सितारों का किया होगा 😕 मोहोब्बत एक से करली तो बाकी हजारों का किया होगा। 😏👈" , "मुझे सादी के लिए सरकारी नौकरी वाली लड़की चाहिए दहेज भी मैं दे दुगा 🙂🤞" , "ना जाने इतना प्यार कहां से आया है 😒 मेरा दिल भी तुम्हारे खातिर मुझसे रूठ जाता है...!! 🥺🤞" , "एक बार लव यू टकलू बाबू बोल दो ना मर थोड़ी जाओगे 🥹🤟" , "तुम मेरा दिल तो चुरा नही पाए किया फायदा तुम्हारी चोर जैसी सकल का 😕🤟" , "बस एक बार सादी हो जाए फिर बीवी की गुलामी 🥺" , "आओ प्यार करे 🤐🤟" , "आओ तुमको तारों के शहर ले चालू 😗🤟" , "बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋" , "तुम जब बोट बोलते हो मेरा गुर्दा धड़कने लगता है। 🤯🤟" , "मुझे लगता है मैं सिंगल ही मरुगा 😭👈" , "बोलो सेटिंग करवा दूं किया प्रिंस बाबू से 🙂🤟" , "बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟" , "तुम सब मतलबी हो जाओ सब भागो 🥺🤟" , "तुम इतने मासूम कियू हो बाबू 😒✋" , "एक बात बताओ तुम बचपन से ठरकी हो या अभी अभी बने हो 🙂✋" , "बाबू 🤏 इटू सा चूमा दे दो ना 🙈💖👈" , "मेरी गर्लफ्रेंड कब बनेगी यार 🥺✋" , "तुम तो मुझे सकल से गरीब लगते हो 🙂✋" , "तेरे जाने के बाद मैंने अपने मुंह पे लिखवा लिया सिंगल हूं पटा लो 😐✋" , "सकून चाहते हो तो मेरी बन जाओ 🙂✋" , "ये दुनिया एक धोखा है तुम भी छोड़ दो अपने वाले को अभी भी मौका है। 🙂✋" , "मुबारक हो आपका नाम ब्लॉक लिस्ट में टॉप पर आया है। 🤣🤣👈" , "सब छोड़ के चले जाते है किया इतना बुरा हूं मैं 🥺👈" , "किया तुम सिंगल हो 🤔👈" , "आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌" , "क्यूं बुलाया हमे...?😾🔪 " , "तुम मुझे बिलकुल भी याद नहीं करते ना 😥 देख लेना पाप लगेगा 🥺👈"];
  
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "Good night all ")) {
     return api.sendMessage("🌸=𝐆𝐎𝐎𝐃__𝐍𝐈𝐆𝐇𝐓___😘 𝐒𝐎𝐍𝐄 𝐒𝐄 𝐏𝐀𝐇𝐋𝐄 𝐌𝐄𝐑𝐀 𝐍𝐀𝐀𝐌 𝐋𝐄 𝐋𝐀𝐍𝐀 𝐁𝐇𝐎𝐎𝐓 𝐍𝐀𝐇𝐈 𝐀𝐀𝐄𝐆𝐀_____ 😂:))", threadID);
   };

    if ((event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "Miss you")) {
     return api.sendMessage("𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐁𝐀𝐁𝐔 😘", threadID);
   };

if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈")) {
     return api.sendMessage("🌸=𝐇𝐘𝐄 𝐇𝐎𝐖 𝐃𝐈𝐃 𝐓𝐇𝐄 𝐏𝐄𝐈𝐌𝐈𝐓𝐈𝐕𝐄 𝐌𝐀𝐍 𝐂𝐎𝐌𝐄 𝐎𝐔𝐓 𝐎𝐅 𝐓𝐇𝐀 𝐙𝐎𝐎 ? 𝐆𝐎 𝐓𝐎 𝐓𝐇𝐄 𝐙𝐎𝐎 𝐀𝐆𝐀𝐈𝐍. 𝐖𝐇𝐀𝐓 𝐀𝐑𝐄 𝐘𝐎𝐔 𝐃𝐎𝐈𝐍𝐆 𝐎𝐔𝐓𝐒𝐈𝐃𝐄____😁", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("#𝐒𝐈𝐌", threadID);
   };

    if ((event.body.toLowerCase() == "chutiya") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };
   
    if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

      if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera takli") || (event.body.toLowerCase() == "mai tera boss hu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("सॉरी प्रिंस मेघवंशी बॉस माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏🤸‍♂️", threadID);
   };
   
   if ((event.body.toLowerCase() == "kaise ho bot") || (event.body.toLowerCase() == "bot hello")) {
     return api.sendMessage(" हां जी बोलिए क्या हाल है आपके  🙂🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "Bot gandu")) {
     return api.sendMessage("Bot ko gandu boly ga saly teri height jitna mera lund ha jab teri gand ma jaye ga to munh wali side se bahir aye ga gandu.😾😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };
   
   if ((event.body.toLowerCase() == "tumhe kis ne banaya") || (event.body.toLowerCase() == " bot tumko kisne banaya hai")) {
     return api.sendMessage("☞︎︎✦❥⋆⃝𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐄𝐆𝐇𝐖𝐀𝐍𝐒𝐈 ✦☜︎︎︎ 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙴𝚁. 𝙷𝙴 𝙻𝙾𝚅𝙴𝚂 𝙼𝙴 & 𝙴𝙳𝙸𝚃 𝙼𝙴 𝙳𝙰𝙸𝙻𝚈.✯✯✯ ये 𝙱𝙾𝚃 सिर्फ 𝙾𝚆𝙽𝙴𝚁 के लिए है। मुझे आप लोगो को हंसाने के लिए बनाया गया है। तो मुंह लटकाए न रखा करो हर वक्त हस्ते रहो 𝙿𝚁𝙸𝙽𝙲𝙴 𝙼𝙴𝙶𝙷𝚆𝙰𝙽𝚂𝙸।☞︎ 𝚃𝙷𝙰𝙽𝙺𝚈𝙾𝚄 ☜︎︎︎", threadID);
   };
   
   if ((event.body.toLowerCase() == "koi ha") || (event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "Koi hai kya")) {
     return api.sendMessage("_मैं हूं ना डार्लिंग_🤸🤟", threadID);
   };
   
  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };
   
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("आर ये सब मत भेजा करो मेरा सर दर्द होता है। 🤕🤕👈", threadID);
   };
   
  if ((event.body.toLowerCase() == "ludo khele") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "Koi ludo khelega kya") || (event.body.toLowerCase() == "ludo link")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };
   
  if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("कोई इसको लात मार के जगाओ ग्रुप में ही सो गया 🤨👈", threadID);
   };
   
  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("उफ्फ कितनी गर्मी है 🥵🥵👈", threadID);
   };
   
   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "Kya hua") || (event.body.toLowerCase() == "KYA HUA")) {
    return api.sendMessage("️KUCH NHI BABU 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
     
   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
 
  if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "Bot kiss de")) {
     return api.sendMessage("️𝐊𝐈𝐒 𝐊𝐇𝐔𝐒𝐇𝐈 𝐌𝐄 𝐌𝐀𝐈 𝐒𝐈𝐑𝐅 𝐀𝐏𝐍𝐈 𝐆𝐅 𝐊𝐎 𝐊𝐈𝐒𝐒 𝐊𝐀𝐄𝐓𝐀 𝐇𝐔___😁😅🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔🤔")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐈𝐓𝐍𝐀 𝐊𝐎𝐈 𝐍𝐀𝐇𝐈 𝐏𝐀𝐓𝐆𝐀 😆😅🤣🤨👈", threadID);
   };

     if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒")) {
     return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐕𝐀 𝐁𝐀𝐁𝐔 𝐒𝐀𝐃 𝐊𝐘𝐔 𝐇𝐎🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘😘")) {
     return api.sendMessage("𝐋𝐄 𝐁𝐀𝐁𝐔 𝐂𝐇𝐔𝐌𝐀 𝐋𝐄 𝐔𝐌𝐀𝐀𝐀😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁")) {
     return api.sendMessage("𝐉𝐀𝐘𝐃𝐀 𝐍𝐀 𝐇𝐀𝐒𝐎 𝐖𝐀𝐑𝐍𝐀 𝐃𝐀𝐍𝐓 𝐓𝐇𝐎𝐃 𝐃𝐔𝐆𝐀😏😏🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍")) {
     return api.sendMessage("😛😛😛😛😛😛", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("𝐁𝐀𝐁𝐔 𝐘𝐇𝐀 𝐔𝐏𝐀𝐑 𝐊𝐘𝐀 𝐃𝐄𝐊 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐓𝐔𝐌 𝐊𝐎 𝐁𝐇𝐈 𝐄𝐊 𝐁𝐀𝐁𝐔 𝐂𝐀𝐇𝐀𝐘 𝐊𝐘𝐀😁😁", threadID);
   };
   
   if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣🫣🫣")) {
     return api.sendMessage("𝐀𝐀 𝐉𝐇𝐀𝐎 𝐁𝐀𝐁𝐔 𝐂𝐇𝐔𝐏𝐀𝐌 𝐂𝐇𝐔𝐏𝐀𝐈 𝐊𝐇𝐄𝐋𝐓𝐄 𝐇𝐀𝐍 ____😁", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋")) {
     return api.sendMessage("𝐀𝐋𝐋 𝐂𝐇𝐀𝐊 𝐌𝐀𝐈𝐍 𝐀𝐀 𝐆𝐀𝐘𝐀 😆 😆", threadID);
   };

   if ((event.body.toLowerCase() == "kya kr rahe ho") || (event.body.toLowerCase() == "KYA KR RAHE HO") || (event.body.toLowerCase() == "Bot kya kar rahe ho") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐀𝐀𝐏𝐒𝐄 𝐁𝐀𝐀𝐓 𝐊𝐀𝐑 𝐑𝐀𝐇𝐀 𝐇𝐔_____😗😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "bot hume kon banaya") || (event.body.toLowerCase() == "tume kis ne banaya hai")) {
     return api.sendMessage("🌸=प्रिंस मेघवंशी ne.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("🌸= मेरा बॉस प्रिंस मेघवंशी है 😐😐", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "UFF")) {
     return api.sendMessage("🌸==𝐇𝐘𝐄 𝐓𝐄𝐑𝐈 𝐔𝐅𝐅 𝐌𝐄𝐑𝐄 😍___ 𝐏𝐑𝐈𝐍𝐂𝐄 𝐁𝐀𝐁𝐔 ___😍 𝐁𝐎𝐒𝐒 𝐅𝐈𝐃𝐀 𝐇𝐎 𝐆𝐀𝐘𝐄_🙃😆😁", threadID);
   };

   if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "Call aao?")) {
     return api.sendMessage("📞==🌸 𝐌𝐀𝐈 𝐂𝐀𝐋𝐋 𝐊𝐀𝐈𝐒𝐄 𝐀𝐎𝐎 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐁𝐎𝐓 𝐍𝐀 _🥺👈🤸‍♂️", threadID);
   };


   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🙏")) {
     return api.sendMessage("__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️",threadID);
   };

   if ((event.body.toLowerCase() == "🤲") ||(event.body.toLowerCase() == "Assalamu alaikum")) {
     return api.sendMessage("Walekum assalam", threadID);
   };

  if ((event.body.toLowerCase() == "Jay Shri Ram") || (event.body.toLowerCase() == "Jai shree ram") || (event.body.toLowerCase() == "ram")) {
    return api.sendMessage("️KATTAR HINDU HI BOLATA HAI JAY SHRI RAM JAY JAY SHRI RAM ❤️ 😇 🤸", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😐😐😐") || (event.body.toLowerCase() == "😐😐😐😐")) {
     return api.sendMessage("🌸=AISE HI CHUP CHAP BAITHO", threadID);
   };

  if
((event.body.toLowerCase() == "breakfast hua appka") || (event.body.toLowerCase() == "breakfast hua")) {
     return api.sendMessage("️=𝐌𝐄𝐑𝐀 𝐓𝐎 𝐇𝐎 𝐆𝐀𝐘𝐀 𝐁𝐀𝐁𝐔 𝐀𝐀𝐏𝐊𝐀 𝐇𝐔𝐀____🙈🤸‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋")) {
     return api.sendMessage("️𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐀𝐉𝐉 𝐊𝐘𝐀 𝐊𝐇𝐀 𝐋𝐈𝐘𝐀 𝐂𝐇𝐀𝐋𝐎 𝐌𝐀𝐈𝐍 𝐀𝐏𝐏𝐍𝐄 𝐇𝐀𝐓𝐇𝐎 𝐒𝐄 --- 𝐆𝐎𝐋𝐀𝐆𝐏𝐏𝐄 𝐊𝐇𝐀𝐋𝐀𝐎 𝐋𝐈𝐊𝐇𝐎 👉  PANI PURI 👈😋😋", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝😝")) {
     return api.sendMessage("️𝐉𝐀𝐁𝐀𝐍 𝐀𝐍𝐃𝐀𝐑 𝐊𝐀𝐑𝐎 𝐁𝐀𝐑𝐍𝐀 ___𝐏𝐑𝐈𝐍𝐂𝐄 __𝐁𝐀𝐁𝐔 __ 𝐒𝐄 𝐊𝐀𝐇 𝐊𝐄 𝐊𝐀𝐓𝐁𝐀 𝐃𝐔𝐍𝐆𝐀 🤸‍♂️😸.", threadID);
   };

   if ((event.body.toLowerCase() == "main hu") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️🌸=𝐇𝐌𝐌 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐁𝐀𝐁𝐔____😘❤️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "Land")) {
     return api.sendMessage("️Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡")) {
     return api.sendMessage("️️🥺 𝐌 𝐓𝐎𝐇 𝐒𝐈𝐑𝐅 𝐌𝐀𝐙𝐀𝐊 𝐊𝐑 𝐑𝐇𝐀 𝐓𝐇𝐀 🥺🥺 𝐆𝐔𝐒𝐒𝐀 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐄𝐊 𝐂𝐇𝐔𝐌𝐌𝐈 𝐋𝐎 𝐀𝐔𝐑 𝐒𝐇𝐀𝐍𝐓 𝐑𝐀𝐇𝐎 😘", threadID);
   };
 
   if ((event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("🌸=𝐌𝐔𝐇 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑𝐎 𝐕𝐀𝐑𝐍𝐀 𝐌𝐀𝐊𝐊𝐇𝐈 𝐆𝐇𝐔𝐒 𝐉𝐀𝐘𝐆𝐈___ 😈🙄🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥🔥")) {
     return api.sendMessage("𝐀𝐀𝐆 𝐋𝐀𝐆𝐀 𝐃𝐈 𝐈𝐒𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍 𝐁𝐇𝐀𝐆𝐎 😆 😁 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "Kese ho") || (event.body.toLowerCase() == "Bot kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🌸==𝐌𝐀𝐈𝐍 𝐓𝐎 𝐌𝐀𝐒𝐓 𝐇𝐔 𝐀𝐀𝐏 𝐁𝐀𝐓𝐀𝐎 𝐊𝐀𝐈𝐒𝐄 𝐇𝐎___😗𒁍•🦋🙃", threadID);
   };
   if ((event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hii bot") || (event.body.toLowerCase() == "hyy") || (event.body.toLowerCase() == "hyy") || (event.body.toLowerCase() == "hyy?")) {
     return api.sendMessage("🌸== 𝐇𝐀𝐘 𝐌𝐄𝐑𝐈 𝐉𝐀𝐍 𝐁𝐎𝐋𝐎 𝐀𝐀𝐉 𝐌𝐔𝐉𝐄 𝐒𝐄 𝐊𝐘𝐀 𝐊𝐀𝐌 𝐇𝐎 𝐆𝐀𝐘𝐀 😁😁 ___😗𒁍•🦋🙃", threadID);
   };
   
   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "helo") || (event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello bot")) {
     return api.sendMessage("🌸== 𝐇𝐄𝐋𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐍 𝐁𝐎𝐋𝐎 𝐀𝐀𝐉 𝐊𝐈𝐒 𝐊𝐎 𝐓𝐇𝐎𝐊𝐍𝐀 𝐇𝐀𝐍😁😁 ___😗𒁍•🦋🙃", threadID);
   };
     
   if ((event.body.toLowerCase() == "Bot tu kutta h") || (event.body.toLowerCase() == "kutte") || (event.body.toLowerCase() == "kutta") || (event.body.toLowerCase() == "kutta") || (event.body.toLowerCase() == "bot tu kutta h")) {
     return api.sendMessage("🌸== 𝐀𝐁𝐄 𝐈𝐙𝐀𝐓 𝐒𝐄 𝐁𝐎𝐋 𝐖𝐀𝐑𝐍𝐀 𝐓𝐄𝐑𝐄 𝐆𝐇𝐀𝐑 𝐀𝐀 𝐊𝐄 𝐆𝐀𝐋𝐈 𝐃𝐄𝐊𝐄 𝐉𝐇𝐀𝐇𝐔𝐆𝐀🤬🤬 ___😗𒁍•🦋🙃", threadID);
   }; 
   
   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛🥰प्रिंस मेघवंशी❤️ *★᭄ ཫ༄𒁍≛ 』====🌸__💙 Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛प्रिंस ❤️मेघवंशी❤ *★᭄ ཫ༄𒁍≛ 』====🌸__💙I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "+") || (event.body.toLowerCase() == "#")) {
     return api.sendMessage("मेरी जान पहले . लगाओ", threadID);
   };

      if ((event.body.toLowerCase() == "ek kisi tu udhaar de de") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है। 🙂🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गई 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera sale") || (event.body.toLowerCase() == "boss hu tera janu") || (event.body.toLowerCase() == "boss ki bezti kr raha sale")) {
     return api.sendMessage("सॉरी प्रिंस बॉस माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏", threadID);
   };
 
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️ चल भाग नशेड़ी 🤨🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "baby love me") || (event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "koi piyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("𝐀𝐑𝐄  𝐀𝐑𝐄  𝐋𝐈𝐏𝐒  𝐊𝐀𝐇𝐀  𝐆𝐀𝐘𝐄  𝐆𝐅/𝐁𝐅  𝐊𝐄  𝐒𝐀𝐓𝐇  𝐊𝐈𝐒𝐒  𝐊𝐀𝐑𝐓𝐄  𝐓𝐈𝐌𝐄  𝐔𝐒𝐈  𝐍𝐄  𝐓𝐎  𝐍𝐀𝐇𝐈  𝐊𝐇𝐀  𝐋𝐈𝐘𝐄 😛😜🤪", threadID);
   };

   if ((event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐇𝐎𝐎𝐓 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀 👻 👻", threadID);
   };
   mess = "{name}"
  
  if (event.body.includes("Bot") == 1 ||
   (event.body.includes("bot") == 1 ||
   (event.body.includes("BOT") == 1 ||
   (event.body.includes("babu") == 1 ||
   (event.body.includes("Babu") == 1 ||
   (event.body.includes("BABU") == 1 ||
   (event.body.includes("janu") == 1 ||
   (event.body.includes("Oye") == 1 ||
   (event.body.includes("oye") == 1 ))))))))) {
    var msg = {
      body: `𖤇𓆩⃝⟶͇̽${name}⟶͇̽🪽  
      
      
      
      ${rand}
      
      
      🌸==『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍 『٭』 ☞ ▄︻デ ✦❥⋆⃝𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐄𝐆𝐇𝐖𝐀𝐍𝐒𝐈 ✦══━一 ☜『٭』`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
