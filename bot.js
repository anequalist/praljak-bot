const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!praljak') {
    	message.reply('https://www.vecernji.hr/media/img/e4/35/89beec9b7fc832fd9c68.jpeg');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
