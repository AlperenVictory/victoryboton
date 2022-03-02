module.exports = {
    
    isim: "davet", 
    alternatifler: ["invite"],
     kullanımı:"yardım",

  
    çalıştır: async (client, message, args, user, text, prefix) => {
      const { MessageEmbed } = require('discord.js')
 const embed = new MessageEmbed()
 .setColor("RED")
    .setTitle('Botu Ekle')
    .setDescription("**Maximus Bot [Ekle](https://discord.com/oauth2/authorize?client_id=837264993131954217&scope=bot&permissions=8)**")
  .setFooter(`*                                           ${client.user.username} | © 2021                                                    *`)
 .setImage("https://cdn.discordapp.com/attachments/852867627688919060/879312111694663680/unknown.png")

 

    message.channel.send({ embeds: [embed] })
      


    }
}