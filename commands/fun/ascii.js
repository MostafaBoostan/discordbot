var figlet = require('figlet');
const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'ascii',
    expectedArgs: '<question>',
    minArgs: 0,
    maxArgs: 200,
    callback: async (message, args, client) => {
    var maxLen = 100 // Kendiniz en y�ksek harf sayisini ayarlayabilirsiniz
  
    if(args.join(' ').length > maxLen) return message.channel.send(`The max length is ${maxLen}!`) 
  
    if(!args[0]) return message.channel.send('Please enter some text.');
  
    figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('k...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

    },
  }