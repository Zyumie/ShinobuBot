const Discord = require('Discord.js');
const superagent = require(`superagent`)

module.exports.run = async (client, message) => {
  
  var target = message.mentions.users.first()

  message.delete();
  console.log("Une personne Pleure !")
  
  let {body} = await superagent.get("https://neko-love.xyz/api/v1/cry")
   
  var hug_embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
     .setDescription(`:sob: **${message.author}** est entrain de Pleurer..`)
     .setImage(body.url)
     .setFooter("Cry", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()
     if(!target) return message.channel.send(hug_embed)
     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`:sob: **${message.author}** est entrain de Pleure a cause de **${target}**`)     .setImage(body.url)
     .setFooter("Cry", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "cry"
}