const Discord = require ('Discord.js')

module.exports.run = async (client, message, args) => {

    message.delete()
    console.log('Je parle ! ( Say )')
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je parle pas pour toi eheh`)

    let argsresult;
    let mChannel = message.mentions.channels.first()

    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        if(!argsresult) return message.channel.send('Hmm.. 👀')
        mChannel.send(argsresult)
    }else{
        argsresult = args.join(" ")
        if(!argsresult) return message.channel.send('Hmm.. 👀')
        message.channel.send(argsresult)
    }
}

module.exports.help = {
    name: 'say'
}