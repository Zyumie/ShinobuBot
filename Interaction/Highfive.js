const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne Tape dans la main de l'autre !")
  
  var replies = ['https://cdn.weeb.sh/images/rJzn5kms-.gif', 'https://cdn.weeb.sh/images/Hy_U1QBT-.gif', 'https://cdn.weeb.sh/images/r1MMK1msb.gif', 'https://cdn.weeb.sh/images/ByRqqy7jb.gif', 'https://cdn.weeb.sh/images/S1kKq1XiZ.gif'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** **Tape dans la Main** de ${client.user}`)
     .setImage(replies[res])
     .setFooter("Highfive", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** **Tape dans la Main** de **${target}**`)
     .setImage(replies[res])
     .setFooter("Highfive", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "highfive"
}