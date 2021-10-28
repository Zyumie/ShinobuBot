const Discord = require('Discord.js');
const superagent = require (`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne fais un Bisous !")

   var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`**${message.author}** fait un bisous magique à **${message.guild.me}**`)
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne :headphones:")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** fait un bisous magique à **${target}**`)
      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "bm"
}