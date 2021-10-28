const Discord = require('Discord.js');

module.exports.run = async (client, message) => {

  message.delete()
  console.log('AVATAR')
    
   const member = message.mentions.users.first()  || message.author 
   const avatar_embed = new Discord.MessageEmbed()

   .setDescription(`Voici l'avatar de **${member}**`)
   .setColor("ff5757")
   .setImage(member.displayAvatarURL({format: 'png', dynamic: true, size: 2048 }))
  message.channel.send(avatar_embed);
}

module.exports.help = {
    name : "avatar"
};