const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!praljak') {
    	message.reply('https://www.jutarnji.hr/incoming/slobodan-praljak-haagjpg/6794733/alternates/LANDSCAPE_680/Slobodan%20Praljak%20Haag.jpg');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
