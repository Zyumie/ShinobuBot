const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne Stare une n'autre !")
  
  var replies = ['https://cdn.weeb.sh/images/HyT3UkFwb.gif', 'https://cdn.weeb.sh/images/SkPoLJKwZ.gif', 'https://cdn.weeb.sh/images/SJxR9I1tvb.jpeg'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** lache un **Regard** à ${client.user}`)
     .setImage(replies[res])
     .setFooter("Stare", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** lache un **Regard** à **${target}**`)
     .setImage(replies[res])
     .setFooter("Stare", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "stare"
}