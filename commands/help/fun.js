const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'fun',
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
        helpEmbed.addField("**8ball**",`There is no harm in taking the exam`)
        helpEmbed.addField("**ascii**",`There is no harm in taking the exam`)
        helpEmbed.addField("**cat**",`There is no harm in taking the exam`)
        helpEmbed.addField("**cuddle**",`There is no harm in taking the exam`)
        helpEmbed.addField("**dog**",`There is no harm in taking the exam`)
        helpEmbed.addField("**fact**",`There is no harm in taking the exam`)
        helpEmbed.addField("**flip**",`There is no harm in taking the exam`)
        helpEmbed.addField("**fox**",`There is no harm in taking the exam`)
        helpEmbed.addField("**hug**",`There is no harm in taking the exam`)
        helpEmbed.addField("**kiss**",`There is no harm in taking the exam`)
        helpEmbed.addField("**soala**",`There is no harm in taking the exam`)
        helpEmbed.addField("**meme**",`There is no harm in taking the exam`)
        helpEmbed.addField("**owoify**",`There is no harm in taking the exam`)
        helpEmbed.addField("**panda**",`There is no harm in taking the exam`)
        helpEmbed.addField("**poke**",`There is no harm in taking the exam`)
        helpEmbed.addField("**slap**",`There is no harm in taking the exam`)
        helpEmbed.addField("**tickle**",`There is no harm in taking the exam`)
          	helpEmbed.setThumbnail('https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')

        helpEmbed.setFooter(`ZAKHAR`)
        message.channel.send(helpEmbed)
  },
}