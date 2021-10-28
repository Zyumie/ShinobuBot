const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une fais la commande Fox !")
  
  let {body} = await superagent.get("https://nekos.life/api/v2/img/fox_girl")
   
  var hug_embed = new Discord.MessageEmbed()
     .setColor("ff5757")
     .setDescription(`**${message.author}** Voici une **Renard** *( Girl )*`)     
     .setImage(body.url)
     .setFooter("Fox")
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("ff5757")
     .setDescription(`**${message.author}** Voici une **Renard** *( Girl )*`)
     .setImage(body.url)
     .setFooter("Fox")
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "fox"
}