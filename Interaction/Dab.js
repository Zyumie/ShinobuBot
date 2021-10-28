const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne effectue le Dab !")
  
  var replies = ['https://cdn.weeb.sh/images/S1md2l1cZ.jpeg', 'https://media.giphy.com/media/3oz8xODcLLAxb8Qyju/giphy.gif', 'https://media.giphy.com/media/d4blihcFNkwE3fEI/giphy.gif', 'https://cdn.weeb.sh/images/HyTKDzSaZ.jpeg', 'https://cdn.weeb.sh/images/HJxaUzSa-.jpeg', 'https://cdn.weeb.sh/images/rJv3LMBab.png', 'https://cdn.weeb.sh/images/SkUP3ly5Z.jpeg'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** Effectue le **DAB**`)
     .setImage(replies[res])
     .setFooter("Dab", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** Effectue le **DAB** avec **${target}**`)
     .setImage(replies[res])
     .setFooter("Dab", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "dab"
}