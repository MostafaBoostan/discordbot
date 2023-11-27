const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'create-channel',
  expectedArgs: ['<typ>', '<channel-name>'],
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 2,
  callback: async (message, args, client) => {
      let messageArry = message.content.split(" ")
        let channelEmbed = new MessageEmbed()
        .setColor("#15FF00")
        .setAuthor("creat channel")
        .setFooter(`Thank you for choosing us`)
        if(messageArry[2]){
            let channelName = message.content.replace(`${messageArry[0]} ${messageArry[1]}`, '')
            if(channelName && channelName !== ""){
                message.guild.channels.create(`${channelName}`,{
                    type: messageArry[1],
                    reason: `channel creation requested by ${message.author.tag}`

                })
                .then(() =>{
                    channelEmbed.setDescription("Your channel was created successfully")
                    message.channel.send(channelEmbed)
                })
            }
      }
  },
  permissions: 'MANAGE_CHANNELS',
}