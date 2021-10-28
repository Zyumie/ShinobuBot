const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    var mention = message.mentions.users.first()
    message.delete()
    if(!mention) return message.channel.send("Vous n'avez mentionné personne 🛹")

    var clap_embed = new Discord.MessageEmbed()
     .setColor("ff5757")
     .setDescription(`👏 **${message.author}** est entrain d'applaudir **${mention}** !`)
     message.channel.send(clap_embed)

}

module.exports.help = {
    name: 'clap'
}