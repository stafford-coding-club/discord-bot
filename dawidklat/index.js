'use strict'

// importing discord library
const Discord = require('discord.js');

// making new client instance
const bot = new Discord.Client();

// MY API KEY NO STEAL >:(
const TOKEN = 'key-here';

// waits for messages
bot.on('message', message => {
	
	// if message author is not a bot 
	if (!message.author.bot) {
		
		// removes all non-letters from messages and puts in all lowercase
		const mess = message.content.toString().trim().toLowerCase().replace(/[^a-zA-Z]/g, '');
		
		//sends 'Oh? ON God?' if message is any variation of 'ohongod' or 'ongod' to channel of original message
		if (mess === 'ohongod' || mess === 'ongod'){
			message.channel.send('Oh? On God?');
		}
		
		// sends 'On god?' if message is 'oh' to channel or original message
		if (mess === 'oh'){
			message.channel.send('On god?');
		}
	}
});

// ready message
bot.on('ready', () => console.log('single and ready to mingle!'));

// logs in 
bot.login(TOKEN)
	.catch (error => console.log(error));