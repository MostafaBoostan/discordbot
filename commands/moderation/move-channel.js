const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'move-channel',
  expectedArgs: ['<category-ID>'],
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 1,
  callback: async (message, args, client) => {
      let messageArry = message.content.split(" ")
        let parentid = messageArry[1]
        if(parentid){
          
                message.channel.setParent(parentid)
                .then(() =>{
                    message.reply("successfully")
                })
        }
  },
  permissions: 'MANAGE_CHANNELS',
}