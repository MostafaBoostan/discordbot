const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'clear',
  expectedArgs: '<number>',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 1,
  callback: async (message, args, client) => {
    let clearEmbed = new MessageEmbed()
    message.delete()
    let messageArry = message.content.split(" ")
    if(isNaN(messageArry[1])) return message.reply("please enter a real number!");
    if(messageArry[1] >100) return message.reply("you canno't delete more than 100 messages!");
    if(messageArry[1] < 0) return message.reply("you most delete at last one message!");
    await message.channel.messages.fetch({limit: messageArry[1]}).then(messages =>{
        message.channel.bulkDelete(messages);
    })
    clearEmbed.setAuthor("clear command" , 'https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
    clearEmbed.setTitle(`${messageArry[1]} message was deleted`)
    clearEmbed.setColor("#1EFF00")
    message.channel.send(clearEmbed).then(m => m.delete({ timeout: 5000 }))
    
    
    
  },
  permissions: 'MANAGE_CHANNELS',
}