const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'put your session id' : process.env.SESSION_ID,
    PREFIX: process.env.PREFIX || '.',
    FOOTER: process.env.FOOTER || "*✦PANDA 𝐌𝐃 ✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://wa.me/+940762890901?text=*-:/%E0%B7%84%E0%B7%8F%E0%B6%BA%E0%B7%92%E2%94%81%E2%94%81%E2%94%81%E0%B6%B4%E0%B7%90%E0%B6%A7%E0%B7%92%E0%B6%BA%E0%B7%9C%F0%9F%91%80%F0%9F%8E%8B%E2%94%81%E2%94%81%E2%94%81%E2%94%81%F0%9F%A6%8B%E2%83%9A%F0%9D%97%A6%CC%B6%F0%9D%97%A9%CC%B6%E2%94%81_%F0%9F%8C%BB%E2%83%9A%E2%83%9D%F0%9F%8D%93%E2%83%9D%E2%83%9A%F0%9F%8D%A7",
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
HEART_REACT: process.env.HEART_REACT || 'false',
    SUDO: process.env.SUDO === undefined ? '94766495053,94762890901' : process.env.SUDO,
    ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello, I am alive now!!*" : process.env.ALIVE_MSG,
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
    ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
    ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? "false" : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
    READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
    RECORDING: process.env.RECORDING === undefined ? "false" : process.env.RECORDING,
    AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
    AUTO_SONG_SENDER: process.env.AUTO_SONG_SENDER === undefined ? "false" : process.env.AUTO_SONG_SENDER
};
