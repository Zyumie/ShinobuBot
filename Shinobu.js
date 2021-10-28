const Discord = require('Discord.js')
const fs = require('fs')
const client = new Discord.Client()
var prefix = "%!"
client.commands = new Discord.Collection()
var emoteRIP = client.emojis.cache.get("872031989602070528")



const config = require('./config.json');
        
client.login(config.token);
        
  client.on('message', async message => {

         if(message.author.bot) return;
         if(message.channel.type === "dm") return;

         if(message.content === `rip`) {
           console.log('RIP')
          message.channel.send(`Repose en Paix ${emoteRIP}`)
         }

         if(message.content === `Re`) {
           console.log('Re')
         message.channel.send(`Nard`)
        }
        if(message.content === `re`) {
          console.log('re')
         message.channel.send(`nard`)
        }

          if(message.content === `Rip`) {
            console.log('RIP')
           message.channel.send(`Repose en Paix ${emoteRIP}`)
      }

         let prefix = config.prefix;
         let messageArray = message.content.split(" ");
         let cmd = messageArray[0];
         let Args = messageArray.slice(1);
         var args = message.content.substring(prefix.length).split(" ");      

if(message.content.startsWith(prefix)) {
    let commandeFile = client.commands.get(cmd.slice(prefix.length));
    if(commandeFile) commandeFile.run(client, message, Args, args);
}

})

client.on('ready', () => {

  client.user.setStatus("online");
  client.user.setActivity(`${client.guilds.cache.size} Serveurs | //help`, { url: 'https://www.twitch.tv/zyumie', type: 'STREAMING' });
  console.log("Je suis Connecter Maman !");
  console.log(`${client.users.cache.size} utilisateurs et ${client.guilds.cache.size} serveurs !`);
})

const modules = ['Bots11', 'Interaction', 'Moderation', 'Image', 'Nsfw', 'Fun', 'Utile'];

modules.forEach(c => {

  fs.readdir(`./${c}/`, (err, files) => {
    if (err) throw err;
    console.log(`${files.length} Commandes dans le dossier ${c}`);
    files.forEach(f => {
    const props = require(`./${c}/${f}`);
    client.commands.set(props.help.name, props);
    });
  });
});