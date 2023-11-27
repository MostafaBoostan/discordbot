const client = require('nekos.life');
const neko = new client();
const { MessageEmbed } = require('discord.js')
const randomPuppy = require("random-puppy");
const Discord = require('discord.js')
const cooldown = new Set()
module.exports = {
    commands: 'ratewaifu',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 200,
    callback: async (message, args, client) => {
		if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 seconds..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
 let m421 = args.join(" ");
  if (!m421) return message.channel.send('Please define your waifus name.')
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ?`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

const eyesembed = new Discord.MessageEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
    },
  }