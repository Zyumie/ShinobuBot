const Discord = require('Discord.js');

module.exports.run = async (client, message) => {

    var info_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Voici toutes les Informations du Bot**")
        .setDescription(`\n🎧 **Propriétaire** : <@!692334542115045467>
        🎧 **Version** : 1.5
        🎧 **Serveurs** : ${client.guilds.cache.size} serveurs
        🎧 **Youtube** : [Zyumie](https://www.youtube.com/zyumie)
        🎧 **Invitations** : [Shinobu](https://discord.com/oauth2/authorize?client_id=710882823585661029&scope=bot&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FJAuxqDQ)`)

        message.channel.send(info_embed)
        console.log("Command d'info demandé")
        message.delete();

}

module.exports.help = {
    name: "info"
}