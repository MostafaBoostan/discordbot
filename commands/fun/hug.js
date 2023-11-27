const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
    commands: 'hug',
    expectedArgs: '<usermention>',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, args, client) => {
		   const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to hug');

        async function work() {
        let owo = (await neko.sfw.hug());

        const hugembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been hugged! ")
        .setDescription((user.toString() + " got hugged by " + message.author.toString()))
        .setImage(owo.url)
        .setColor('#FF0000')
        .setURL(owo.url);
        message.channel.send(hugembed);

}

      work();
    },
  }