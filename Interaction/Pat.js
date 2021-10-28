const Discord = require('Discord.js');

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne fais un Bisous !")

   var pat1_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`✋ **${message.author}** fait une caresse à **${message.guild.me}**`)
     .setImage("https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif")
     .setFooter("Pat", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(pat1_embed) //message.channel.send("Vous n'avez mentionné personne :headphones:")
     

   var pat_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`✋ **${message.author}** fait une caresse à **${target}**`)
     .setImage("https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif")
     .setFooter("Pat", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(pat_embed)
  
}

module.exports.help = {
    name: "pat"
}