const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MESSAGES] });
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3,
	kickThreshold: 10,
	muteThreshold: 5,
	banThreshold: 10,
	//muteTime: 0.1,
	timeMute: 0.5,
	maxInterval: 5000,
	maxDuplicatesInterval: 5000,
	maxDuplicatesWarn: 2,
	maxDuplicatesKick: 10,
	maxDuplicatesMute: 5,
	maxDuplicatesBan: 20,
	muteRoleName: "mute",
	modLogsChannelName: 'log',
	modLogsEnabled: true,
	warnMessage: '{@user} Don’t spam too much! We are here to chill and to make the community growth together! ',
	muteMessage: ' ',
	ignoredRoles: ['913858262888235068'],
	ignoredChannels: ['912713234648272936'],
	ignoreBots: true,
	warnEnabled: true,
	kickEnabled: false,
	muteEnabled: true,
	banEnabled: true,
	deleteMessagesAfterBanForPastDays: 10,
	removeMessages: false,
	removeBotMessages: false
});

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));

client.on('messageCreate', (message) => antiSpam.message(message)); 

client.login(process.env.TOKEN);
