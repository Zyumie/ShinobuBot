const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne réconfort une autre !")
  
  let {body} = await superagent.get("https://nekos.life/api/v2/img/cuddle")
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** Réconfort **${message.guild.me}**`)
     .setImage(body.url)
     .setFooter("Cuddle", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne 🎧")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** Réconfort **${target}**`)
     .setImage(body.url)
     .setFooter("Cuddle", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "cuddle"
}