const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne fais un câlin !")

  let {body} = await superagent.get("https://nekos.life/api/v2/img/hug")
   
  var hug_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`🤗 **${message.author}** fait un câlin à **${message.guild.me}**`)
     .setImage(body.url)
     .setFooter("Hug", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed) //message.channel.send("Vous n'avez mentionné personne :headphones:")
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`🤗 **${message.author}** fait un câlin à **${target}**`)
     .setImage(body.url)
     .setFooter("Hug", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "hug"
}