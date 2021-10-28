const Discord = require('Discord.js');

module.exports.run = async (client, message, args) => {
  
  message.delete();
  console.log("Une personne fais des C�lin Magique !")
 
  if (!args[0]) return message.channel.send(`Precise avec qui tu veux faire un Calin !`)

  var replies = ["https://cdn.nekos.life/hug/hug_048.gif","https://cdn.nekos.life/hug/hug_053.gif", "https://cdn.nekos.life/hug/hug_067.gif"];
  var question = args.slice(0).join(" ")
  var res = Math.floor((Math.random() * replies.length))

     

   var help_embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`**${message.author}** fais un calin magique a **${question}**`)     
     .setImage(replies[res])
     .setFooter("Cm", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
     .setTimestamp()

      message.channel.send(help_embed)
  
}

module.exports.help = {
    name: "cm"
}