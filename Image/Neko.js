const { MessageEmbed } = require("Discord.js");
const superagent = require("superagent");

module.exports.run = async(client, message) => {

  const target = message.mentions.users.first();
  message.delete().catch(() => {});
  console.log("Une personne fait du Neko !");

  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Requête de ${message.author.tag}`, `${message.author.displayAvatarURL({format: 'png', dynamic: true})}`)
    .setImage(await superagent.get("https://nekos.life/api/v2/img/neko").then(res => res.body.url))
    .setFooter("Neko")
    .setTimestamp()
  return message.channel.send(embed);
  
};

module.exports.help = {
  name: "neko"
};