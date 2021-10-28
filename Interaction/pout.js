const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne Boude une autre !")
  
  var replies = ['https://i.pinimg.com/originals/e5/6e/1a/e56e1ae197ea11668756e6e82407e5c5.gif', 'https://cdn.weeb.sh/images/Sy8IMlqJM.gif', 'https://cdn.weeb.sh/images/SJmcekKvW.gif', 'https://cdn.weeb.sh/images/SkNLqD_LM.gif', 'https://cdn.weeb.sh/images/SJLKgJFPb.gif', 'https://cdn.weeb.sh/images/Bkl3xJFP-.gif'];
  var res = Math.floor((Math.random() * replies.length))
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** **Boude**`)
     .setImage(replies[res])
     .setFooter("Pout", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne 🎧")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** boude à **${target}**`)
     .setImage(replies[res])
     .setFooter("Pout", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "pout"
}