"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
module.exports = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const body = [];
    const slashCommandsDir = (0, node_path_1.join)(__dirname, '../commands/utility');
    (0, fs_1.readdirSync)(slashCommandsDir).forEach(file => {
        if (!file.endsWith('.js'))
            return;
        const command = require(`${slashCommandsDir}/${file}`).command;
        body.push(command === null || command === void 0 ? void 0 : command.data.toJSON());
        console.log(`✅  The ${command === null || command === void 0 ? void 0 : command.name} command was loaded correctly !!!`, body);
        client.slashCommands.set(command === null || command === void 0 ? void 0 : command.name, command);
    });
    // Construct and prepare an instance of the REST module
    const rest = new discord_js_1.REST().setToken(process.env.TOKEN);
    // Add and deploy your commands to the Discord application!
    try {
        yield rest.put(discord_js_1.Routes.applicationCommands(process.env.APPLICATION_ID), { body });
    }
    catch (error) {
        console.error(error);
    }
});
