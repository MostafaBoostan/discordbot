const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'delete-channel',
  expectedArgs: [],
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, args, client) => {
      message.channel.delete()
  },
  permissions: 'MANAGE_CHANNELS',
}