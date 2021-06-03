const { Telegraf } = require('telegraf');
const { Application, Router } = require('@cfworker/web');
const createTelegrafMiddware = require('cfworker-middware-telegraf');
const {shorten} = require("./short.js")

const bot = new Telegraf(BOT_TOKEN);

bot.on('text', async (ctx) => {
    const message = ctx.message.text;
    if (message.startsWith("http")) {
        const result = await shorten(message);
        return await ctx.replyWithMarkdown(`Your [Link](${result}) is created!`)
    } else {
        return await ctx.reply("No URL Detected!")
    }
})

// Your code here, but do not `bot.launch()`

const router = new Router();
router.post(`/${WEBHOOK}`, createTelegrafMiddware(bot));
new Application().use(router.middleware).listen();
