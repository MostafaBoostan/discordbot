const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')
const randomPuppy = require("random-puppy");

module.exports = {
    commands: 'meme',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, client) => {
		const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("#FF0074")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    },
  }