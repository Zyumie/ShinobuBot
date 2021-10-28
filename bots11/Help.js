const Discord = require('Discord.js');

module.exports.run = async (client, message) => {

    var saute = client.emojis.cache.get("707792774484852817")

    var help_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("♻️ **Voici la commandes d'aide :** ♻️")
        .setDescription("⚠️ Vous pouvez utilisez les commandes avec le Prefix ``%!`` ⚠️")
        .addField("🗞️ **Information [4]**", "`info`, `help`, `userinfo`, `servinfo`")
        .addField("🔧 **Utile [3]**","`say`, `ms`, `invite`")
        .addField("🌈 **Fun [7]**", "`ping`, `8ball`, `love`, `roll`, `clap`, `cookie`, `bm`")
        .addField("🖼️ **Image [5]**", "`dog`, `cat`, `fox`, `avatar`, `neko`")
        .addField(`${saute} **Interaction [19]**`, "`hug`, `cuddle`, `kiss`, `pat`, `baka`, `poke`, `feed`, `slap`, `cry`, `punch`, `smug`, `pout`, `confus`, `rougir`, `dab`, `danse`, `handholding`, `highfive`, `stare`")
        .addField("🔩 **Modération [5]**", `warn`, `clear`)
        .addField("🔞 **Nsfw [7]**", "`eroyuri`, `yuri`, `hentai`, `futa`, `anal`, `hentaigif`, `nekogif`")
        .addField(` ❓ Un Problème ?`, `**[Serveur Support](https://discord.gg/CVbn3BHW) | [Inviter le Bot](https://discordapp.com/oauth2/authorize?client_id=710882823585661029&permissions=-1&scope=bot)**`)
        .setTimestamp()
        .setFooter("Youtube : Zyumie", `${client.user.displayAvatarURL({format: 'png', dynamic: true})}`)
        message.channel.send(help_embed)
        console.log("Commande d'Help demandée")
        message.delete();

}

module.exports.help = {
    name: "help"
}