const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une fais la commande Cat !")
  
  let {body} = await superagent.get("https://nekos.life/api/v2/img/meow")
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("ff5757")
     .setDescription(`**${message.author}** Voici un **Chat** *( Mignion/ne )*`)
     .setImage(body.url)
     .setFooter("Cat")
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("ff5757")
     .setDescription(`**${message.author}** Voici un **Chat** *( Mignion/ne )*`)
     .setImage(body.url)
     .setFooter("Cat")
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "cat"
}