module.exports = {
    
    isim: "yardım", 
    alternatifler: ["yardım"],
     kullanımı:"yardım",

  
    çalıştır: async (client, message, args, user, text, prefix) => {
      const { MessageEmbed } = require('discord.js')
 const embed = new MessageEmbed()
 .setColor("RED")
    .setTitle('Yardım')
    .setDescription("**Açıklama Buraya**")
    .addFields({
                name: '!davet',
                value: "Davet Menüsü",
                inline: true
              },
              {
                name: '!gif',
                value: "Gif Gönderilir",
                inline: true
              },
              {
                name: '!randompp',
                value: "Rastgele Discord PP Gönderilir",
                inline: true
              },
                  {
                name: 'Komut 4',
                value: "Açıklama 4",
                inline: true
              },
                  {
                name: 'Komut 5',
                value: "Açıklama 5",
                inline: true
              },
              {
                name: 'Komut 6',
                value: "Açıklama 6",
                inline: true
      
              })
  .setFooter(`*                                           ${client.user.username} | © 2021                                                    *`)
 .setImage("https://cdn.discordapp.com/attachments/852867627688919060/879312111694663680/unknown.png")

 

    message.channel.send({ embeds: [embed] })
      


    }
}