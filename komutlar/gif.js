module.exports = {
    
    isim: "gif", 
    alternatifler: ["gif"],
     kullanımı:"yardım",

  
    çalıştır: async (client, message, args, user, text, prefix) => {
      const { MessageEmbed } = require('discord.js')
 const embed = new MessageEmbed()
 .setColor("RED")
    .setTitle('GİF')
     .setImage("https://media.discordapp.net/attachments/866346768211378176/878505812396507166/standard.gif")

  .setFooter(`*                  ${client.user.username} | © 2021                  *`)

 

    message.channel.send({ embeds: [embed] })
      


    }
}