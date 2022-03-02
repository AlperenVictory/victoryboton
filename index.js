const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ]
});
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;

client.komutlar = new Collection();
client.alternatifler = new Collection();

["command"].forEach(handler => {
  require(`./events/komut`)(client);
});

client.on("ready", () => {
  console.log(
    `Asreaper: ${client.user.tag} isimli bot aktif!\nAsreaper Youtube Kanalına Abone Olmayı Unutmayın!`
  );
});

client.on("messageCreate", async message => {
  if (message.content == `<@!${client.user.id}>`)
    message.channel.send("Asreaper Youtube Kanalına Abone Olmayı Unutmayın!");

  if (message.author.bot) return;
  if (!message.guild) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  var command = client.komutlar.get(cmd);
  if (!command) command = client.komutlar.get(client.alternatifler.get(cmd));

  if (command) {
    try {
      command.çalıştır(
        client,
        message,
        args,
        message.author,
        args.join(" "),
        prefix
      );
    } catch (error) {
      console.log(error);
    }
  } else return message.reply(`**_Böyle bir komutum yok_**`);
});

client.login(process.env.TOKEN);

client.on("message", message => {
  const selamınaleyküm = message.content.toLowerCase();

  if (
    selamınaleyküm === "sa" ||
    selamınaleyküm === "Sa" ||
    selamınaleyküm === "selamün aleyküm" ||
    selamınaleyküm === "Selamün Aleyküm"
  ) {
    message.channel.send(
      `**Aleyküm Selam Hoş Geldin <@${message.author.id}>**`
    ); //buraya istediğiniz yazıyı yazın
  }
});
