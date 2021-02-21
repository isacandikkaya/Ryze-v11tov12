const ryze1 = require('discord.js')

exports.run = function(client, message, args) {
  const ryze = new ryze1.MessageEmbed() 
                            
.setTitle("<a:twiter:796731779003711501> Yuno Bot Original Twitter Account")
.setDescription("Yuno Bot hakkında daha hızlı bilgi ve anlık statusleri almak için orjinal twitter hesabı. \n\n [Twitter](https://twitter.com/YunoBot4)")

.setColor('#1DA1F2')
.setThumbnail('https://cdn.discordapp.com/attachments/796731328140804108/796735626639966258/580b57fcd9996e24bc43c53e.png')
.setImage("https://cdn.discordapp.com/attachments/796731328140804108/796734644497809408/fasdfwefwfef.png")

return message.channel.send(ryze)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["twitter"],
permLevel: 0
  
};
  
exports.help = {
name: 'twitter'
};