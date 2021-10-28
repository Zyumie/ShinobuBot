const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    function random(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min; // Génére un nombre entre min et max
      }

      var mention = message.mentions.users.first()
      if(!mention) return message.channel.send("Vous n'avez mentionné personne")
      var loveLevel = random(0, 100)

    message.channel.send(`Il se pourrais que il y aurait **${loveLevel}%** d'amour entre **${message.author.username}** et **${mention.username}**`)
    message.delete()

}

module.exports.help = {
    name: 'love'
};