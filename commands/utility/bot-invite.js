const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'invite',
  expectedArgs: [],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, args, client) => {
    message.member.send("https://discord.com/api/oauth2/authorize?client_id=784087244318310451&permissions=8&scope=bot")
    message.reply("The invite link was sent to your DM")

  },
}

