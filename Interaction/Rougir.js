const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message, args) => {
  
  var target = message.mentions.users.first()
  message.delete().catch(() => {});
  console.log("Une personne Rougie !")

  var replies = ['https://cdn.weeb.sh/images/B1NWGUmvb.gif', 'https://cdn.weeb.sh/images/HytZMLQDZ.gif', 'https://cdn.weeb.sh/images/r1n7M87wW.gif', 'https://cdn.weeb.sh/images/HkrQM8mwZ.gif', 'https://cdn.weeb.sh/images/BJH4f8mP-.gif'];
  var res = Math.floor((Math.random() * replies.length))
  
   
  var hug_embed = new Discord.MessageEmbed()

     .setColor("RANDOM")
     .setDescription(`**${message.author}** **Rougie**`)
     .setImage(replies[res])
     .setFooter(`Rougir`, `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

    if(!target) return message.channel.send(hug_embed) 
     

   var help_embed = new Discord.MessageEmbed()

     .setColor("RANDOM")
     .setDescription(`**${message.author}** Rougie à cause de **${target}**`)
     .setImage(replies[res])
     .setFooter(`Rougir`, `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

    return message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "rougir"
}