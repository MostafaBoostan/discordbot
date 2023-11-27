
const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const prefix = '*'
const client = new Discord.Client()
const config = require('./botconfig.json')
client.on('ready', async () => { 
  

  console.log('The client is ready!')
  

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})
client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    
});

client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === "test")

  let WELCOME = new Discord.MessageEmbed()
  .setAuthor('welcome','https://images-ext-1.discordapp.net/external/BE-WwjDXWkK7vjrPuPbrr_kuZNpXvHWOB1PySaP077o/%3Fsize%3D1024/https/cdn.discordapp.com/icons/782727125282193418/03b88fab807c9e8f6bf2fae19650eed4.png')
  .setDescription(`Welcome ZAKHAR Server ${member.user} we are happy to have you!We hope you make the most of our server and enjoy our bot the most`)
  .setColor('#3cff00')
  .setThumbnail(member.user.displayAvatarURL())
  .setTimestamp()
  .setImage('https://images-ext-1.discordapp.net/external/BE-WwjDXWkK7vjrPuPbrr_kuZNpXvHWOB1PySaP077o/%3Fsize%3D1024/https/cdn.discordapp.com/icons/782727125282193418/03b88fab807c9e8f6bf2fae19650eed4.png')
  .setFooter('Thanks For Joining!')
  channel.send(WELCOME)
})

client.on("ready", () => {
 function randomStatus() {
let status = ["ZAKHAR" , "*help"]
let rstatus = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[rstatus], {type: "WATCHING"})
}; setInterval(randomStatus, 2000)
})

client.on('ready', () => {
    console.log('ready on bot TZAKHAR bot')
  
    client.guilds.cache.get('778140929617035295')
    .channels.cache.get('807847980736315425')
    .join()
  
    client.guilds.cache.get('778140929617035295')
    .channels.cache.get('807848007377616967')
    .messages.fetch('940546810559229972').then(msg => msg.react('📫'))
})


client.on('messageReactionAdd', async (reaction, user)=>{
    if(reaction.message.partial) await reaction.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.id === "940546810559229972"){
        if(reaction.emoji.name === "📫"){
            reaction.users.remove(user);



            reaction.message.guild.channels.create(`ticket ${user.username.substr(0,18)}`, {
                type: "text",
                parent: "807847983856615464",
                topic: `Ticket from ${user.tag}`,
                proniisionoverwrites : [
                    { id: user.id, allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
                    { id: reaction.message.guild.roles.everyone, deny: ['VIEW_CHANNEL'], },
                ]
            })
            .then(ch => {
                ch.send('Team Support Bezoodi Javab Goye Shoma Khahad Bood').then(msg => msg.react('🔒'))
                
            })
        }
    }
})

client.on('messageReactionAdd', async (reaction, user)=>{
    if(reaction.message.partial) await reaction.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.emoji.name === "🔒"){
        if(!reaction.message.channel.name.includes('ticket-')) return;
        reaction.users.remove(user)

        reaction.message.react('✅')
        reaction.message.react('❌')
    }
})   

client.on('messageReactionAdd', async (reaction, user)=>{
    if(reaction.message.partial) await reaction.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.emoji.name === "✅"){
        if(!reaction.message.channel.name.includes('ticket-')) return;
      
        reaction.message.channel.delete()

    }
})   

client.on('messageReactionAdd', async (reaction, user)=>{
    if(reaction.message.partial) await reaction.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.emoji.name === "❌"){
        if(!reaction.message.channel.name.includes('ticket-')) return;
      

        reaction.message.reactions.cache.get('✅').remove()
        reaction.message.reactions.cache.get('❌').remove()
    }
}) 







client.login(config.token)