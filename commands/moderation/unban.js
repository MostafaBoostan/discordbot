const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'unban',
  expectedArgs: ['<member-id> <reason>'],
  permissionError: 'You need BAN_MEMBERS permissions to run this command',
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {


        let member;

        try {
            member = args[0]
        } catch (e) {
            console.log(e)
            return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member );

            if (user) {
                embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                    .setColor('#4AFF00')
                    .addField('User ID', user.user.id, true)
                    .addField('user Tag', user.user.tag, true)
                    .addField('Unbanned Reason', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${user.user.tag} isn't banned!`)
                    .setColor('#27FF00')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred!')
        });
  },
  permissions: 'BAN_MEMBERS',
}