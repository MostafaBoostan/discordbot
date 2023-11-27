const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'moderation',
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
        helpEmbed.addField(`**ann**` ,`This command is for giving an announcement`)
        helpEmbed.addField("**ban**",`This command is to block the member`)
        helpEmbed.addField("**bans**", `Shows the number of people blocked`)
        helpEmbed.addField("**clear**", `Clears messages`)
        helpEmbed.addField("**create-channel**", `Create the channel`)
        helpEmbed.addField("**delete-channel**", `Removes the channel`)
        helpEmbed.addField("**dm**", `Sends your message to PV member`)
        helpEmbed.addField("**give-role**", `Gives the member the roll you want`)
        helpEmbed.addField("**has-role**", `Shows the rolls that the member has`)
        helpEmbed.addField("**invites**", `Shows member invites`)
        helpEmbed.addField("**kick**", `Kick the member`)
        helpEmbed.addField("**lock**", `It locks all the channels so that no one can be harmed at that moment`)
        helpEmbed.addField("**move-channel**", `move the channel to category id`)
        helpEmbed.addField("**remove-role**", `Takes the member role`)
        helpEmbed.addField("**unban**", `Unban the member id`)
            helpEmbed.addField("**warn**", `Give warn to the member`)

          	helpEmbed.setThumbnail('https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')



        helpEmbed.setFooter(`ZAKHAR`)
        message.channel.send(helpEmbed)
  },
}