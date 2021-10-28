const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    console.log("Une personne utilise 8ball")
    if (!args[1]) return message.reply(`Ce n'est pas une Question`)

    var replies = ["Oui", "Non", "Peut-être", "Certainement pas", "c'est sûr !", "Je suis d'accord", "Je sais pas", "Fais ce que tu souhaîte."];
    var question = args.slice(0).join(" ")
    var res = Math.floor((Math.random() * replies.length))

    var ball_embed = new Discord.MessageEmbed()
       .setTitle(message.author.username)
       .setColor("ff5757")
       .addField(`Question :`, question)
       .addField(`Réponse :`, replies[res])
       .setFooter("8ball")
       .setTimestamp()
    message.channel.send(ball_embed)
    message.delete()
}

module.exports.help = {
    name: '8ball'
}