const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'warn',
  expectedArgs: ['<mention> <reason>'],
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
            userEmbed.setAuthor("warn message" , 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            userEmbed.setColor("#EAFF00")
            userEmbed.addField( `reson : ${reason}`,`${userMention} got warned`)              
            userEmbed.setTimestamp()
            userMention.send(userEmbed)
            message.channel.send(userEmbed)
        }else{
            message.channel.send('you couldn warn to that member');
        }
  },
  permissions: 'ADMINISTRATOR',
}