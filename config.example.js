'use strict';

const config = {
    DLive: {
        displayName: 'YOUR_STREAM_DISPLAY_NAME',
        bot_key: 'YOUR_AUTHENTICATION_KEY'
    },
    on:
    {
        LEMON: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' },
        ICE_CREAM: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' },
        DIAMOND: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' },
        NINJAGHINI: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' },
        NINJET: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' },
        FOLLOW: { url: 'https://maker.ifttt.com/trigger/YOUR_URL', text: '' }
    },
    after: { url: 'https://maker.ifttt.com/trigger/YOUR_URL' }
}

module.exports = config;