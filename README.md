# short-link-bot

A telegram short link bot hosting on [Cloudflare Workers](https://workers.cloudflare.com/) powered by [short.io](https://short.io).

## Usage

| Variable         | Description                                                   |
|------------------|---------------------------------------------------------------|
| BOT_TOKEN        | Telegram bot token                                            |
| DOMAIN           | Your short.io domain                                          |
| SHORT_IO_API_KEY | Your short.io PUBLIC key                                      |
| WEBHOOK          | Your webhook secure path, using a random UUID is recommended. |

Please install [wrangler](https://developers.cloudflare.com/workers/cli-wrangler) first.

```shell
git clone https://github.com/lekoOwO/short-link-bot
cd short-link-bot
wrangler init

# Append `webpack_config = "webpack.config.js"` to wrangler.toml here.

wrangler secret put BOT_TOKEN
wrangler secret put DOMAIN
wrangler secret put SHORT_IO_API_KEY
wrangler secret put WEBHOOK
wrangler publish
```

And then set your bot's webhook url to `{YOUR_WORKER_URL}/{WEBHOOK}`.

Ta-da!

Note: `wrangler secret put` will prompt the secret value, thus DO NOT replace variable names with the secret value in the previous command.

## Special Thanks

[神代綺凛](https://github.com/Tsuk1ko) for https://github.com/Tsuk1ko/cfworker-middware-telegraf

[telegraf.js](https://telegraf.js.org/) (BTW, the document sucks)