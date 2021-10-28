const Discord = require('Discord.js')

module.exports.run = async (client, message, args) => {
    var user = message.mentions.users.first()
    if(!user){user = message.author}

    let nickname = message.guild.member(user).nickname

    if(nickname === null){nickname = "Aucun"}

    console.log('userinfo utilisée')
    message.delete()

    let account = user.bot
    
    if(account === true){account = "Bot"}
    if(account === false){account = "Humain"}

    let date = message.guild.member(user).joinedAt
    
    dateformat = [date.getDate(),
        date.getMonth()+1,
        date.getFullYear()].join('/')+` à `+ 
      [date.getHours(),
       date.getMinutes(),
       date.getSeconds()].join(':')
    
    if(date.getMonth()+1 < 10){
        dateformat = [date.getDate(),
            "0"+`${date.getMonth()+1}`,
            date.getFullYear()].join('/')+` à `+ 
          [date.getHours(),
           date.getMinutes(),
           date.getSeconds()].join(':')
    }

    if(date.getMonth()+1 > 13){
        dateformat = [date.getDate(),
            "01",
            date.getFullYear()].join('/')+` à `+ 
          [date.getHours(),
           date.getMinutes(),
           date.getSeconds()].join(':')
    }

    let creation = user.createdAt
    
    creationformat = [creation.getDate(),
        creation.getMonth()+1,
        creation.getFullYear()].join('/')+` à `+ 
      [creation.getHours(),
       creation.getMinutes(),
       creation.getSeconds()].join(':')
    
    if(creation.getMonth()+1 < 10){
        creationformat = [creation.getDate(),
            "0"+`${creation.getMonth()+1}`,
            creation.getFullYear()].join('/')+` à `+ 
          [creation.getHours(),
           creation.getMinutes(),
           creation.getSeconds()].join(':')
    }

    if(creation.getMonth()+1 > 13){
        creationformat = [creation.getDate(),
            "01",
            creation.getFullYear()].join('/')+` à `+ 
          [creation.getHours(),
           creation.getMinutes(),
           creation.getSeconds()].join(':')
    }

    let status = user.presence.status 

    if(user.presence.status === "online") {status = "En ligne"}
    if(user.presence.status === "idle") {status = "Inactif"}
    if(user.presence.status === "dnd") {status = "Ne pas déranger"}
    if(user.presence.status === "offline") {status = "Déconnecté"}

    
    
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Information sur ${user.tag}`, `${user.displayAvatarURL({format: 'png', dynamic: true})}`)
    .setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true}))
    .addField("**`Identifiant :`**", `${user.id}`, true)
    .addField("**`Surnom :`**",`${nickname}`, true)
    .addField("**`Tag :`**", `#${user.discriminator}`, true)
    .addField("**`Compte :`**", `${account}`, true)
    .addField("**`Date d'arrivée :`**", `${dateformat}`, true)
    .addField("**`Création du compte :`**", `${creationformat}`, true)
    .addField("**`Status :`**", `${status}`, true)
    .addField("**`Rôles :`**", `${message.guild.member(user).roles.cache.map(role => role.name).join(' \n')}`)
    .setFooter(`Demandé par ${message.author.tag}`, `${message.author.displayAvatarURL({format: 'png', dynamic: true})}`, true)
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name : "userinfo"
}