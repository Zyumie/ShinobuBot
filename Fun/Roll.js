const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    function random(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min; // Génére un nombre entre min et max
      }

      var mention = message.mentions.users.first()
      var roll = random(0, 100)

    message.channel.send(`📡 **${message.author.username}** vous Obtenez le nombre : **${roll}** !`)
    message.delete()

}

module.exports.help = {
    name: 'roll'
};