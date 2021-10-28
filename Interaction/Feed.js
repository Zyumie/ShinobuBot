const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne donne a manger a une autre !")
  
  let {body} = await superagent.get("https://nekos.life/api/v2/img/feed")
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`🍜 **${message.author}** donne a manger à **${message.guild.me}**`)
     .setImage(body.url)
     .setFooter("Feed", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne 🎧")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`🍜 **${message.author}** donne a manger à **${target}**`)
     .setImage(body.url)
     .setFooter("Feed", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "feed"
}
 