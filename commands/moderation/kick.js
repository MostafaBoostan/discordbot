const { MessageEmbed } = require('discord.js')



module.exports = {
  commands: 'kick',
  expectedArgs: ['<mention> <reason>'],
  permissionError: 'You need KICK_MEMBERS permissions to run this command',
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {
      const user = message.mentions.users.first();
      const member = message.mentions.users.first();
      let userMention = message.mentions.users.first()
      const reason = args[1] ? args.slice(1).join(' ') : 'no reason';
      let channelEmbed = new MessageEmbed()
      let userEmbed = new MessageEmbed()
    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            

            const kick = new MessageEmbed()

           .setDescription(`${user.tag} has been kicked.`)
            .setFooter(`reason : ${reason}`)
            .setColor("#ff0000")
            userEmbed.setAuthor("kick message" , 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            userEmbed.setTitle(`you are kicked`)
            userEmbed.setDescription(`reson : ${reason}` , 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            userEmbed.setTimestamp()
            userEmbed.setColor("#0008ff")
          
            userMention.send(userEmbed)
          
            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new MessageEmbed()

           .setColor('#0008ff')

          .setDescription("I can't kick that user!")

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new MessageEmbed()

       .setColor('#0008ff')

      .setDescription("That user is not on this server!")

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("you didn't mention anyone!");
    }

  
  },
  permissions: 'KICK_MEMBERS',
}