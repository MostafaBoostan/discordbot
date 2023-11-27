const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'ann',
  expectedArgs: ['<Announcement>'],
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {
      message.delete()
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let text = message.content.replace(`${cmd}`, '')
        let annEmbed = new MessageEmbed()                                                       
        if(text && text !== ""){
            annEmbed.setTimestamp(' ')
            annEmbed.setDescription(text)
            annEmbed.setAuthor("Announcement")
            annEmbed.setColor("RANDOM")
          	annEmbed.setThumbnail('https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            //annEmbed.setThumbnail(message.guild.iconURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
           
            message.channel.send("@everyone",annEmbed)

        }
  },
  permissions: 'MANAGE_CHANNELS',
}