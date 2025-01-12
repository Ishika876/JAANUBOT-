module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } Ã— ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("Hello EveryoneðŸ™‹â€â™‚ï¸ ðð¨ð­ ð¢ð¬ ðð¨ð° ð‚ð¨ð§ð§ðžðœð­ðžðâ›“ï¸", event.threadID, () => api.sendMessage({body:`ðŸŒºðŸ¦‹ðŸŒº 
ðð¨ð­ Made By ðð‘ðˆðð‚ð„ ðŒð„ð†ð‡ð–ð€ðð’ðˆâ˜˜ï¸
<------------------------------>  
BOT CONNECTED SUCCESFUL !!! 

APPROVAL ALLOW IN THIS GROUP!!!
<------------------------------>

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video , +video2 , +video3 (video songs)\n${global.config.PREFIX}music +song +sing (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPEð« `, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/intro.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = " \nâœ¨ðŸ††ðŸ…´ðŸ…»ðŸ…» ðŸ…²ðŸ…¾ðŸ…¼ðŸ…´âœ¨\n\n                 â¥ðð„ð–~\n\n        ~ðŸ‡²â€ŒðŸ‡ªâ€ŒðŸ‡²â€ŒðŸ‡§â€ŒðŸ‡ªâ€ŒðŸ‡·â€Œ~\n\n    [   {name} ]\n\nà¼„âœºà¿\n\n{threadName}\n\n ðŸ¥°ðŸ–¤ðŸŒ¸ð—›ð—®ð—½ð—½ð˜†ðŸ€ð—˜ð—»ð—·ð—¼ð˜†ðŸ€â€”ðŸŒ¸ðŸ¥€\n\n         ðŸ¥€ð— ð—®ð—·ð—² ð—žð—®ð—¿ð—¼ðŸ¥€\n\nà¼„âœºð—¢ð—¿ ð—§ð˜‚ð—º ð—œð˜€ ð—šð—¿ð—¼ð˜‚ð—½ ð—žð—² {soThanhVien} ð— ð—²ð—ºð—¯ð—²ð—¿ ð—›ð—¼ ð—˜ð—»ð—·ð—¼ð˜† ð—žð—®ð—¿ð—¼ ð— ð—®ð—·ð—² ð—Ÿð—¼ [ # ]à¿\n\n    â•”â•¦â•â•â€¢    â€¢âœ â€¢â€â€¢âœ  â€¢   â€¢â•â•â•¦â•—\n     â™¥  â•â•©â•" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
      }
