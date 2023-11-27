const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
    commands: 'kiss',
    expectedArgs: '<usermention>',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, args, client) => {
		     const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to kiss');

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been kissed! ")
        .setDescription((user.toString() + " got kissed by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#00FF32`)
        .setURL(owo.url);
        message.channel.send(kissembed);

}

      work();
    },
  }