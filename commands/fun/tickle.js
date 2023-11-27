const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
    commands: 'tickle',
    expectedArgs: '<usermention>',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, args, client) => {
		     const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to tickle');

        async function work() {
        let owo = (await neko.sfw.poke());

        const tickleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been tickled ")
        .setDescription((user.toString() + " got tickled by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(tickleembed);

}

      work();
    },
  }