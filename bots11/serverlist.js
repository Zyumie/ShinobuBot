const Discord = require('Discord.js')

module.exports.run = async (client, message) => {
      
    if(message.author.id !== "692334542115045467") return
    console.log("Command serverlist demandé")
    message.delete();

  var serverlist_embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setTitle("Voici les Serveur ou le Bot s'y trouve :")    
      .setDescription(`${client.guilds.cache.map(guild => '**' + guild.name + '**' + ` - id : ` + guild.id).join('\n')}`)
      .addField("`Info :`", `**[${client.users.cache.size} Utilisateurs](https://discord.gg/)** | **[${client.guilds.cache.size} Serveurs](https://discord.gg/)**`)
      .setFooter(`Demandé par ${message.author.tag}`, `${message.author.displayAvatarURL({format: 'png', dynamic: true})}`)
      .setTimestamp()
      message.channel.send(serverlist_embed)

}

module.exports.help = {
    name: "serverlist"
}