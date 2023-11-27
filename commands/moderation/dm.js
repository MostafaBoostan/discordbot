const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'dm',
  expectedArgs: ['<mention> <message>'],
  permissionError: 'You need ADMINISTRATOR permissions to run this command',
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {
          message.delete()
      const member = message.mentions.users.first();
      let userMention = message.mentions.users.first()
      let userEmbed = new MessageEmbed()
      const reason = args[1] ? args.slice(1).join(' ') : 'no reason';
        if(member){
            userEmbed.setAuthor("ZAKHAR" , 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            userEmbed.setDescription(`${reason}`)
            userEmbed.setColor("#FFC107")
            userMention.send(userEmbed)
            message.reply("the following message was sent to the person").then(m => m.delete({ timeout: 5000 }))
            message.channel.send(userEmbed).then(m => m.delete({ timeout: 5000 }))
        }else{
            message.channel.send('you couldn dm to that member');
        }
  },
  permissions: 'ADMINISTRATOR',
}