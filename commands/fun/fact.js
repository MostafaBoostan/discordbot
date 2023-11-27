const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'fact',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, client) => {
		async function work() {

        let owo = (await neko.sfw.fact());
        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });

      }

      work();
    },
  }