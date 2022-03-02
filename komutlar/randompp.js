module.exports = {
    
    isim: "randompp", 
    alternatifler: ["randomfoto"],
     kullanımı:"",

  
    çalıştır: async (client, message, args, user, text, prefix) => {
      const { MessageEmbed } = require('discord.js')
 const embed = new MessageEmbed()
 .setColor("RED")
     .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))

 

    message.channel.send({ embeds: [embed] })
      


    }
}