const { MessageEmbed } = require('discord.js')
const prefix = '*'
module.exports = {
  commands: 'embed',
  expectedArgs: ['<setAuthor> <setTitle> <setColor> <setDescription> <setFooter>'],
  minArgs: 1,
  maxArgs: 300,
  callback: async (message, args, client) => {
					message.delete()
		const announcementembed = new MessageEmbed()
    .setAuthor(`${args[0]}`)
    .setTitle(`${args[1]}`)
    .setColor(`${args[2]}`)
    .setDescription(`${args[3]}`)
    .setFooter(`${args[4]}`)

			message.channel.send(announcementembed);
			
  },
}