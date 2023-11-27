const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
  commands: 'mute',
  expectedArgs: ['<mention> <message>'],
  permissionError: 'You need ADMINISTRATOR permissions to run this command',
  minArgs: 1,
  maxArgs: 200,
  callback: async (message, args, client) => {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  const mod = message.author;
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("You need permissions for use this command.");
  const modlog = message.guild.channels.find(channel => channel.name === 'mute-banned-kicked-logs');
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  let muteChannel = message.guild.channels.find(`name`, "mute-banned-kicked-logs");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `mute-banned-kicked-logs`**')
  if (!muterole) {
      try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#FF0000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  const muteembed = new Discord.RichEmbed()
          .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
          .addField('User', `<@${tomute.id}>`)
          .addField('Time', `${ms(ms(mutetime))}`)
          .addField('Staff_Member', `${mod}`)
          .setColor('#FF0000')
          .setFooter("ZAKHAR", "https://media.discordapp.net/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif")
          modlog.send(muteembed)
          
          setTimeout(function(){
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has been unmuted!`);
          }, ms(mutetime));
  },
  permissions: 'ADMINISTRATOR',
}