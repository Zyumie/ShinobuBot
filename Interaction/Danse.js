const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne Danse !")
  
  var replies = ['https://cdn.weeb.sh/images/ry0muIQDb.gif', 'https://cdn.weeb.sh/images/BkVaN0wa-.gif', 'https://cdn.weeb.sh/images/SkG7OIQDZ.gif', 'https://cdn.weeb.sh/images/rJsN_LQvW.gif', 'https://cdn.weeb.sh/images/SkMp_8QPZ.gif'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** **Danse**`)
     .setImage(replies[res])
     .setFooter("Danse", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** **Danse** avec **${target}**`)
     .setImage(replies[res])
     .setFooter("Danse", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "danse"
}