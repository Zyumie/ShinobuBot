const Discord = require('Discord.js');
const superagent = require (`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()
  let {body} = await superagent.get(`https://nekos.life/api/v2/img/kiss`)

  message.delete();
  console.log("Une personne fais un Bisous !")

   var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`💋 **${message.author}** fait un bisous à **${message.guild.me}**`)
     .setImage(body.url)
     .setFooter("Kiss", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne :headphones:")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`💋 **${message.author}** fait un bisous à **${target}**`)
     .setImage(body.url)
     .setFooter("Kiss", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "kiss"
}