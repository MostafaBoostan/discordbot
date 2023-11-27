const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'help',
  expectedArgs: [],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, args, client) => {message.react("✅");
    let helpEmbed = new MessageEmbed()
        helpEmbed.setColor("#0008ff")
        helpEmbed.setAuthor('ZAKHAR', 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
        helpEmbed.setDescription(`\`\`\`css\n*command\`\`\``)
            helpEmbed.setTimestamp()        
        helpEmbed.setThumbnail(message.guild.iconURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
        helpEmbed.addField(`**moderation**` ,`➖➖➖➖➖`)
        helpEmbed.addField("**utility**",`➖➖➖➖➖`)
        helpEmbed.addField("**fun**", `➖➖➖➖➖`)
        helpEmbed.setThumbnail('https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
        helpEmbed.setFooter(`ZAKHAR`)
        message.channel.send(helpEmbed)
  },
}