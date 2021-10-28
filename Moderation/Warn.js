const Disocrd = require('discord.js')

module.exports.run = async (client, message, args) => {

    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    var mentionned = message.mentions.users.first()
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Vous n'avez pas la Permission")
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous n'avez pas mentionner d'utilisateur")
    }else{
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@" + mentionned.id + ">"){
            if(args.slice(1).length != 0) {
                message.channel.send(`${mentionned} a été averti !`)
                mentionned.send(`Vous venez d'être averti dans le serveur de **${message.guild.name}** par ${message.author}\nRaison : ${args.slice(1).join(' ')}`)
                .catch(err => {
                    if(err === " ") return 
                        message.channel.send(`${mentionned}, Vous venez d'être averti par ${message.author}\nRaison : ${args.slice(1).join(' ')}`)
                })
            }else{
                message.reply("Utilisateur incorrect")
            }
        }else{
           message.reply("Utilisateur incorrect")
        }
    }
}

module.exports.help = {
    name: "warn"
}