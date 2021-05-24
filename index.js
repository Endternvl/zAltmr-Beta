const { token, default_prefix } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});
const { addexp } = require('./handlers/xp.js')
const db = require("quick.db")
require('./reply');

//---------Making Collections---------\\

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();

//---------End Of Collections---------\\

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//--------Started--------\\

client.on("message", async message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  client.config = {
  prefix: prefix
}
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    const pingedembed = new discord.MessageEmbed()
    .setTitle('Hello!')
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setImage("https://cdn.discordapp.com/attachments/811143476522909718/842048732174221352/zaltmrbanner.gif")
    .setDescription(`Hello! I'm ${client.user.username}, A Multipurposed Bot, Created By <@787842689969684480> My Prefix In The Server Is \`${prefix}\` Searching For My Commands? Try To Do \`${prefix}help\``)
    .setColor("RANDOM");
    return message.reply(pingedembed);
  }
  
  if(!message.content.startsWith(prefix)) return;
  
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
  
return addexp(message)

 })

client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }

  let welimages = db.get(`welimage_${message.guild.id}`)

  

   let data = await canva.welcome(member, { link: welimages || "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })

 

    const attachment = new discord.MessageAttachment(

      data,

      "zHi.png"

    );

  

  

  client.channels.cache.get(chx).send(`Hello And Welcome To ${message.guild.name} ` + member.user.username, attachment);

});

//--------GIVEAWAY--------\\
const config = require('./config.json');
client.config = config;

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./storages/giveaways.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
//JAVASCR1PT

//----end----\\



//--------CHECKS IF THE BOT IS ONLINE--------\\

client.on("ready", () => {
    client.user.setStatus("online");
    console.log(`${client.user.username} was turned on || Join TimesCord Community For Early Updates || https://discord.gg/AyjQjmUvE4`)
});

client.on("ready", () => {
let i = 0

        setInterval(() => {
            const textArray = [
                `${default_prefix}help • ${client.guilds.cache.size} Server(s)`,
                `${default_prefix}help • ${client.users.cache.size} User(s)`,
                `In ${client.channels.cache.size} Channel(s) • ${default_prefix}help`,
                `With You • ${default_prefix}help`,

            ]
            const activityArray = [
                "PLAYING",
                "LISTENING",
                "COMPETING",
                "PLAYING"
            ]
      
            client.user.setActivity(textArray[i], { type: activityArray[i] })
    
            i++ 
    
            if (i == 3) i = 0
        }, 3000)
});






client.login(token);