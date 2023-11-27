const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'ban',
  expectedArgs: ['<mention> <reason>'],
  permissionError: 'You need BAN_MEMBERS permissions to run this command',
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

          .ban()

          .then(() => {

            

            const ban = new MessageEmbed()

           .setDescription(`${user.tag} has been banned.`)
            .setFooter(`reason : ${reason}`, 'https://cdn.discordapp.com/emojis/802250198747054081.gif?v=1')
            .setColor("#0008ff")
            userEmbed.setAuthor("ban message" , 'https://images-ext-2.discordapp.net/external/X64y6xEy0HZCrI289MGz5pOnpTo3pcjUwmLC6LmbaKU/%3Fsize%3D1024/https/cdn.discordapp.com/icons/731985681324310728/a_0c313771a832d126dd7e9731fa14e53b.gif')
            userEmbed.setTitle(`you are banned`)
            userEmbed.setDescription(`reson : ${reason}`)
            userEmbed.setTimestamp()
            userEmbed.setColor("#FF0000")
          
            userMention.send(userEmbed)
          
            message.channel.send(ban);

          })

          .catch(err => {

            

            const ban_err_1 = new MessageEmbed()

           .setColor('#FF0000')

          .setDescription("I can't ban that user!")

            message.channel.send(ban_err_1);

            console.error(err);

          });

      } else {

        

        const ban_err_2 = new MessageEmbed()

       .setColor('#FF0000')

      .setDescription("That user is not on this server!")

        message.channel.send(ban_err_2);

      }

    } else {

      message.reply("you didn't mention anyone!");
    }

  },
  permissions: 'BAN_MEMBERS',
}