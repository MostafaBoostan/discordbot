const { MessageEmbed } = require('discord.js')
const { prefix } = require('../botconfig.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const validatePermissions = (permissions) => {
  const validPermissions = [
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
  ]

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown permission node "${permission}"`)
    }
  }
}

module.exports = (client, commandOptions) => {
  let {
    commands,
    expectedArgs = '',
    permissionError = 'You do not have permission to run this command.',
    minArgs = 0,
    maxArgs = null,
    permissions = [],
    requiredRoles = [],
    callback,
  } = commandOptions

  // Ensure the command and aliases are in an array
  if (typeof commands === 'string') {
    commands = [commands]
  }

  console.log(`Registering command "${commands[0]}"`)

  // Ensure the permissions are in an array and are all valid
  if (permissions.length) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    validatePermissions(permissions)
  }

  // Listen for messages
  client.on('message', (message) => {
    const { member, content, guild } = message

    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`

      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {
        // A command has been ran

        // Ensure the user has the required permissions
        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {
            message.reply(permissionError)
            return
          }
        }

        // Ensure the user has the required roles
        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            const embed = new MessageEmbed()
            .setAuthor('ZAKHAR', 'https://cdn.discordapp.com/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
            .setColor('#ff1414') 
            .setTitle( `You must have the "${requiredRole}" role to use this command.`)
            .setFooter("Thank you for choosing us")
            message.channel.send(embed)
            return
          }
        }

        // Split on any number of spaces
        const args = content.split(/[ ]+/)

        // Remove the command which is the first index
        args.shift()

        // Ensure we have the correct number of arguments
        if (
          args.length < minArgs ||
          (maxArgs !== null && args.length > maxArgs)
        ) {
          const embed = new MessageEmbed()
          .setAuthor('ZAKHAR', 'https://cdn.discordapp.com/attachments/782856369119690763/854996431014330368/MOSHED-2021-6-14-16-29-58-min.gif')
          .setColor('#ff1414') 
          .setDescription(`\`\`\`css\n${prefix}${alias} ${expectedArgs}\`\`\` \n Please use the command like above`)
          .setFooter("ZAKHAR")
          message.channel.send(embed)
          return
        }

        // Handle the custom command code
        callback(message, args, args.join(' '), client)

        return
      }
    }
  })
}