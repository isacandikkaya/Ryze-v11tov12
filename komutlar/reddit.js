const ryze1 = require('discord.js')

exports.run = function(client, message, args) {
  const ryze = new ryze1.MessageEmbed() 
                            
.setTitle("<:redit:796737356027002971> Yuno Bot Original Reddit Account")
.setDescription("Yuno Bot reddit sayfasından güncellemeleri takip edebilirsiniz ayrıca bazı bloglar paylaşıyoruz. \n\n [Reddit](https://www.reddit.com/user/YunoBot1)")

.setColor('#FF5700')
.setThumbnail('https://cdn.discordapp.com/attachments/796731328140804108/796737855782649886/3621_reddit.png')
.setImage("https://cdn.discordapp.com/attachments/796731328140804108/796737858727706694/REDDIT.png")

return message.channel.send(ryze)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["reddit"],
permLevel: 0
  
};
  
exports.help = {
name: 'reddit'
};