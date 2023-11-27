const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
    commands: 'cuddle',
    expectedArgs: '<usermention>',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, args, client) => {
		       const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to cuddle');

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You just got a cuddle! ")
        .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#0008ff`)
        .setURL(owo.url);
        message.channel.send(cuddleembed);

}

      work();
    },
  }