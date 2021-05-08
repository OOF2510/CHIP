const Discord = require("discord.js");
const config = require("./config.json");

const intents = new Discord.Intents(Discord.Intents.NON_PRIVILEGED);
const client = new Discord.Client({ intents: intents });

client.once("ready", () => {
  console.log("Ready!");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client);
  client.user.setActivity(`CHIP`, { type: "WATCHING" });
  console.log(client.user.tag);
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnected :(");
});

client.on("message", async (msg) => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes("chip")) {
    msg.reply("CHIP", {
      files: [
        "https://cdn.discordapp.com/attachments/838557951878103060/839984918355771402/chip.png",
      ],
    });
  } else return;
});

client.login(config.token);
