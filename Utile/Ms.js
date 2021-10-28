const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    var help_embed = new Discord.MessageEmbed()

        .setColor("ff5757")
        .setDescription(`:nut_and_bolt: **Voici le Ping du Bot :** ${client.ws.ping} ms ! :nut_and_bolt:`)
        .setImage('https://www.ipe.fr/wp-content/uploads/2017/12/maintenance-serveur.png')
        .setTimestamp()
        .setFooter("Ms")
        message.channel.send(help_embed)

    console.log("Commande de Ms demander")
    message.delete();
}

module.exports.help = {
    name: "ms"
}