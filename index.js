const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const token = '8576563924:AAGKxPdT1LtunkII_TUnbCp5k6v33uKs618';
const gId = -1003744260298;
const bot = new TelegramBot(token, { polling: true });

const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Bot is Alive!'));
app.listen(PORT, () => console.log(`Active on ${PORT}`));

bot.on('photo', async (m) => {
  try {
    const pId = m.photo.pop().file_id;
    await bot.sendPhoto(gId, pId, { caption: "🍭Pic posted🧨!📸" });
  } catch (e) { console.log("Error:", e.message); }
});

bot.on('video', async (m) => {
  try {
    const vId = m.video.file_id;
    await bot.sendVideo(gId, vId, { caption: "🍭Video posted🧨!🎥" });
  } catch (e) { console.log("Video Error:", e.message); }
});

process.on('uncaughtException', (err) => console.log(err));
