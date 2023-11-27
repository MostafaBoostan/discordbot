const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'flip',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, client) => {
		 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "Heads";
          msg2[2] = "Tails";
          var x = getRandomInt(0, 8);
          if (x < 4){
              message.channel.send(msg2[1]);
          }
          else{
              message.channel.send(msg2[2]);
          }
      }
    },
  }