const Discord = require ('Discord.js')

module.exports.run = async (client, message) => {

    var help_embed = new Discord.MessageEmbed()

        .setColor("0994e4")
        .setDescription(`**Pong !**  :ping_pong:`)
        message.channel.send(help_embed)
        console.log("Commande de ping demander !")

}

module.exports.help = {
    name: "ping"
}