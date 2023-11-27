const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'utility',
  expectedArgs: [],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, args, client) => {
    let helpEmbed = new MessageEmbed()
        helpEmbed.setColor("#0008ff")
        helpEmbed.setAuthor('ZAKHAR', 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
        helpEmbed.setDescription(`\`\`\`css\n*command\`\`\``)
            helpEmbed.setTimestamp() 
        helpEmbed.setThumbnail(message.guild.iconURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
        helpEmbed.addField("**anime-search**", `Search in all anime`)
        helpEmbed.addField("**avatar**", `Shows the member avatar`)
        helpEmbed.addField("**invite**", `Inuit sends you the bot link`)
        helpEmbed.addField("**calc**", `It is a calculator`)
        helpEmbed.addField("**corona**", `Shows the latest Corona information`)
        helpEmbed.addField("**embed**", `Embed message`)
        helpEmbed.addField("**ping**", `Shows the ping of bot`)
        helpEmbed.addField("**say**", `Sends your message by bot`)
        helpEmbed.addField("**server-info**", `Shows server information`)
        helpEmbed.addField("**user-info**", `Shows user information`)
        helpEmbed.addField("**vote**", `Votes your message`)
          	helpEmbed.setThumbnail('https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')

        helpEmbed.setFooter(`ZAKHAR`)
        message.channel.send(helpEmbed)
  },
}