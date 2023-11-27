module.exports = {
  commands: ['remove-role', 'delete-role'],
  expectedArgs: "<usermention> <the role name>",
  minArgs: 2,
  permissionError: 'You need MANAGE_ROLES permissions to run this command',
  permissions: 'MANAGE_ROLES',
  callback: (message, args) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to give a role to.')
      return
    }

    args.shift()

    const roleName = args.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role)
      message.reply(`That user no longer has the ${roleName} role`)
    } else {
      message.reply(`That user does not have the ${roleName} role`)
    }
  },
}