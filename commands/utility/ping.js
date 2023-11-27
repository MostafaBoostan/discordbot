const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'ping',
  expectedArgs: [],
  minArgs: 0,
  maxArgs: 0,
  
  callback: async (message, args, client) => {message.react("⌛");
    message.channel.send('Ping?').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp }ms`))
 
  },
  
}


