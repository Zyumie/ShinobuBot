const Discord = require('Discord.js');

module.exports.run = async (client, message) => {

    var help_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Voici l'invitation du Bot**")
        .addField("https://discordapp.com/oauth2/authorize?client_id=710882823585661029&permissions=-1&scope=bot", "** **")
        message.channel.send(help_embed)
        console.log("Command d'invitation demandé")
        message.delete();

}

module.exports.help = {
    name: "invite"
}