module.exports.config = {
	name: "run",
	version: "1.0.2",
	hasPermssion: 3,
	credits: "Mirai Team",
	description: "running shell",
	commandCategory: "ADMIN",
	usages: "[Script]",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};
module.exports.run = async function ({ api, event, args }) {
  const permission = ["100024005894493"];
	if (!permission.includes(event.senderID)) return api.sendMessage("50k cũng đéo dùng dc lệnh này :))))", event.threadID, event.messageID);
module.exports.run = async function({ api, event, args, body, Threads, Users, Currencies, models }) {
	const eval = require("eval");
	const output = function (a) {
		if (typeof a === "object" || typeof a === "array") {
			if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
			else a = "done ✅";
		}

		if (typeof a === "number") a = a.toString();
		
		return api.sendMessage(a, event.threadID, event.messageID);
	}
	try {
		const response = await eval(args.join(" "), { output, api, event, args, body, Threads, Users, Currencies, models, global }, true); 
		return output(response);
	}
	catch (e) { return output(e) };
 }
}