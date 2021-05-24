const Discord = require('discord.js')

module.exports = async (text, channel) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Uh Oh...")
    .setDescription(":x: - " + text)
    .setColor("RED")
    await channel.send(embed)
}