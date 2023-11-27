const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'say',
  expectedArgs: ['<message>'],
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {
      message.delete()
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let text = message.content.replace(`${cmd}`, '')
        let annEmbed = new MessageEmbed()                                                       
        if(text && text !== ""){
            annEmbed.setAuthor(text)
            annEmbed.setColor("#00FFE4")
            message.channel.send(annEmbed)
        }
  },
}