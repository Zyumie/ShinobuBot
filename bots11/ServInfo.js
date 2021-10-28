const Discord = require('Discord.js')

module.exports.run = async (client, message, args) => {

    // var user = message.mentions.users.first()

    console.log('servinfo utilisée')
    message.delete()

    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField("**`Nom du Serveur`**", `${message.guild.name}`, true)
    .addField("**`Propriétaire du serveur`**", `@${message.guild.owner.user.tag}`, true)
    .addField("**`ID du Serveur`**",`${message.guild.id}`, true)
    .addField("**`Membres`**", `${message.guild.members.cache.size}`, true)
    .addField("**`Humains`**", `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
    .addField("**`Bots`**", `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField("**`Création du Serveur :`**", `${message.guild.createdAt.toLocaleDateString()}`, true)
    .addField("**`Liste des rôles`**", `${message.guild.roles.cache.map(role => role.name).join(', ')}`)
    .addField("**`Liste des emojis`**", message.guild.emojis.cache.map(emojis => emojis).join(" "))
    .setFooter(`Demandé par ${message.author.tag}`, `${message.author.displayAvatarURL({format: 'png', dynamic: true})}`)
    .setTimestamp()
    message.channel.send(embed)

}

module.exports.help = {
    name : "servinfo"
}