const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const malScraper = require('mal-scraper');
module.exports = {
  commands: 'anime-search',
  expectedArgs: ['<search-message>'],
  minArgs: 1,
  maxArgs: 100,
  callback: async (message, args, client) => {
      const search = `${args}`;
    malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('RANDOM') //I personally use bubblegum pink!
    .addField('English Title', data.englishTitle, true)
    .addField('Japanese Title', data.japaneseTitle, true)
    .addField('Type', data.type, true)
    .addField('Episodes', data.episodes, true)
    .addField('Rating', data.rating, true)
    .addField('Aired', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Link', data.url);

    message.channel.send(malEmbed);
    })
  },
}