const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: '8ball',
    expectedArgs: '<question>',
    minArgs: 0,
    maxArgs: 200,
    callback: async (message, args, client) => {
    if (!args[0]) return message.channel.send('You need to ask a question.');
		const question = args.join(' ');
		const ask = await neko.sfw['8Ball']({ text: question });
		const embed = new MessageEmbed()
			.setColor("#0008ff")
			.setTitle(ask.response)
			.setImage(ask.url)
		message.channel.send(embed);
  
    },
  }