const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE ME",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")


    .setTitle(`Hello!`)


    .setDescription(`Server Moderator: **[Click Me](https://discord.com/oauth2/authorize?client_id=842036225530396672&scope=bot&permissions=2147483647)**
    Server Helper: **[Click Me](https://discord.com/oauth2/authorize?client_id=842036225530396672&scope=bot&permissions=4294967287)**`)


    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
     
    message.channel.send(embed)
   message.react('✅')
 }
};