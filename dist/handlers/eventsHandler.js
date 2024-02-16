"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const fs_1 = require("fs");
module.exports = (client) => {
    let eventsDir = (0, node_path_1.join)(__dirname, '../events');
    (0, fs_1.readdirSync)(eventsDir).forEach(file => {
        if (!file.endsWith('.js'))
            return;
        const event = require(`${eventsDir}/${file}`).default;
        event.once
            ? client.once(event.name, (...args) => event.execute(...args))
            : client.on(event.name, (...args) => event.execute(...args));
        console.log(`✅  The "${event.name}" event was loaded correctly !!!`);
    });
};
