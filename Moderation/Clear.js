const Discord = require('Discord.js')

module.exports.run = async (client, message, args) => {

    console.log("Une personne fais la command Clear !!")
    await message.delete()
    let number = args[0];

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas les Permission`).catch(console.error);
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'est pas la Permission`).catch(console.error);

    if(!number) return message.channel.send(`Vous devez mettre un Nombre de message a Supprimée`)
    if(typeof number === "number") return message.channel.send(`Ce n'est pas un Nombre`)
    if(number > 100) return message.channel.send(`Vous pouvez clear que **100 Message**`)

    message.channel.bulkDelete(args[0], true).then(msg => {
        message.channel.send(`${args[0]} message supprimés !`)
      }).catch(e => console.error(e.stack))
}

module.exports.help = {
    name: "clear"
}