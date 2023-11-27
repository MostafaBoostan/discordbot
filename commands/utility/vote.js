const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'vote',
  expectedArgs: ['<vote-message>'],
  minArgs: 1,
  maxArgs: 100,
  callback: async (message, args, client) => {
 message.delete()
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let text = message.content.replace(`${cmd}`, '')
        let suggestEmbed = new MessageEmbed()                                                       
            .setTimestamp()
            
            suggestEmbed.setDescription(text)
            suggestEmbed.setAuthor("vote")
            suggestEmbed.setColor('RANDOM')
            message.channel.send("@everyone",suggestEmbed).then(msg => {
                msg.react("✅");
                msg.react("❎");
            });
        
  },
}