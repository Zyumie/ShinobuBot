const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne es confus !")
  
  var replies = ['https://media.giphy.com/media/XQvhpuryrPGnK/giphy.gif', 'https://media.giphy.com/media/26tP4gFBQewkLnMv6/giphy.gif', 'https://media.giphy.com/media/ccRMvuh3PeuSGgOWVx/giphy.gif', 'https://media.giphy.com/media/QMsWHA7lm8FLtDOyf9/giphy.gif'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** est **Confus**`)
     .setImage(replies[res])
     .setFooter("Confus", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** et confus à cause de **${target}**`)
     .setImage(replies[res])
     .setFooter("Confus", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "confus"
}