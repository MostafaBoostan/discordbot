const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
    commands: 'poke',
    expectedArgs: '<usermention>',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, args, client) => {
		 const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to poke');

        async function work() {
        let owo = (await neko.sfw.poke());

        const pokeembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been poked ")
        .setDescription((user.toString() + " got poked by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#0008ff`)
        .setURL(owo.url);
        message.channel.send(pokeembed);

}

      work();
    },
  }