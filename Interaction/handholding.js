const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne tien la main de l'autre !")
  
  var replies = ['https://cdn.weeb.sh/images/B1rpeTqZf.gif', 'https://cdn.weeb.sh/images/Hk5_ga5bG.gif', 'https://cdn.weeb.sh/images/H1urgT5-f.gif', 'https://cdn.weeb.sh/images/HJqpxp5bf.gif', 'https://cdn.weeb.sh/images/BkiRKrLBz.gif'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** tiens la **Main** à ${client.user}`)
     .setImage(replies[res])
     .setFooter("Handholding", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** tiens la **Main** à **${target}**`)
     .setImage(replies[res])
     .setFooter("Handholding", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "handholding"
}