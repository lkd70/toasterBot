'use strict';

const express = require('express');
const path = require('path');
const dlive = require('dlivetv-api');
const config = require('./config');
const https = require('https');

const indexRouter = require('./routes/index');
const app = express();

const bot = new dlive(config.DLive.bot_key, config.DLive.displayName);

app.locals.img = [];

bot.on('ChatText', msg => {
  if (msg.content.indexOf(':emote/') >= 0) {
    const parts = msg.content.split('/')
    const url = `https://images.prd.dlivecdn.com/emote/${parts[parts.length-1].split(':')[0]}`;
    app.locals.img.push(url);
	}
});


const afterTask = () => {
    https.get(config.after.url);
}

bot.on('ChatGift', gift => {
    if (gift.gift === 'LEMON') {
        https.get(CONFIG.on.LEMON.url);
        if (config.on.LEMON.text !== '') bot.sendMessage(config.on.LEMON.text);
        setTimeout(afterTask, 2000);
    } else if (gift.gift === 'ICE_CREAM') {
        https.get(CONFIG.on.ICE_CREAM.url);
        if (config.on.ICE_CREAM.text !== '') bot.sendMessage(config.on.ICE_CREAM.text);
        setTimeout(afterTask, 2000);
    } else if (gift.gift === 'DIAMOND') {
        https.get(CONFIG.on.DIAMOND.url);
        if (config.on.DIAMOND.text !== '') bot.sendMessage(config.on.DIAMOND.text);
        setTimeout(afterTask, 2000);
    } else if (gift.gift === 'NINJAGHINI') {
        https.get(CONFIG.on.NINJAGHINI.url);
        if (config.on.NINJAGHINI.text !== '') bot.sendMessage(config.on.NINJAGHINI.text);
        setTimeout(afterTask, 2000);
    } else if (gift.gift === 'NINJET') {
        https.get(CONFIG.on.NINJET.url);
        if (config.on.NINJET.text !== '') bot.sendMessage(config.on.NINJET.text);
        setTimeout(afterTask, 4000);
    }
});


bot.on('ChatFollow', msg => {
    https.get(config.on.FOLLOW.url);
    if (config.on.FOLLOW.text !== '') bot.sendMessage(config.on.FOLLOW.text);
    setTimeout(afterTask, 2000);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
