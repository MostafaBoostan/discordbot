const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'bans',
  expectedArgs: [],
  permissionError: 'You need BAN_MEMBERS permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, args, client) => {
      message.guild.fetchBans().then(bans => {
            message.channel.send(`${bans.size} people are ban in this server`)
      })
  },
  permissions: 'BAN_MEMBERS',
}