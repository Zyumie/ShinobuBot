const { MessageEmbed } = require("Discord.js");
const superagent = require("superagent");

module.exports.run = async(client, message) => {

  const target = message.mentions.users.first();
  message.delete().catch(() => {});
  console.log("Une personne fait du HentaiGif !");

  if (!message.channel.nsfw) return message.channel.send("Tu ne peux pas utiliser cette commande dans ce salon.");

  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Requête de ${message.author.tag}`, `${message.author.displayAvatarURL({format: 'png', dynamic: true})}`)
    .setImage(await superagent.get("https://nekos.life/api/v2/img/Random_hentai_gif").then(res => res.body.url))
    .setFooter("HentaiGif")
    .setTimestamp()
  return message.channel.send(embed);
  
};

module.exports.help = {
  name: "hentaigif"
};