const { MessageEmbed } = require('discord.js')
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const utils = require('../../utils');

module.exports = {
  commands: 'calc',
  expectedArgs: ['<math-operation>'],
  minArgs: 1,
  maxArgs: 1,
  callback: async (message, args, client) => {
    if(args.length < 1)
  return message.reply(`You must provide a equation to be solved on the calculator`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
      message.channel.send(`Invalid math equation: ${err}`);
  }
}

message.channel.send({
  embed: utils.embed('', stripIndents`
  **Equation:**\n\`\`\`\n${question}\n\`\`\`
  **Answer:**\n\`\`\`\n${answer}\n\`\`\`
  `)
});

  },
}