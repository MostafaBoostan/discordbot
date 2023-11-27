const { MessageEmbed } = require('discord.js')
const axios = require('axios');

module.exports = {
    commands: 'koala',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, client) => {
		 const url = "https://some-random-api.ml/img/koala";
        const facts = "https://some-random-api.ml/facts/koala"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Koala Image and Fact`)
            .setColor(`#FFFFFF`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    },
  }