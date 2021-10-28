const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne traite une autre de baka !")

  let {body} = await superagent.get("https://nekos.life/api/v2/img/baka")
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** est une Baka **${message.guild.me}**`)
     .setImage(body.url)
     .setFooter("Baka", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne :headphones:")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** est une Baka **${target}**`)
     .setImage(body.url)
     .setFooter("Baka", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "baka"
}