const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  commands: 'avatar',
  expectedArgs: ['<mention>'],
  minArgs: 0,
  maxArgs: 1,
  callback: async (message, args, client) => {
       let userAvatar = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
        if(userMention){
            userAvatar.setColor("#ffffff")
            userAvatar.setImage(userMention.displayAvatarURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
            message.channel.send(userAvatar)  
        }
        else{
            userAvatar.setColor("#ffffff")
            userAvatar.setImage(message.author.displayAvatarURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
            message.channel.send(userAvatar)  
        }    
   
  },
}