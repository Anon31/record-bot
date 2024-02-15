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
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'user',
    data: new discord_js_1.SlashCommandBuilder()
        .setName('user')
        .setDescription(`Fournit les données de l'utilisateur.`),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            // interaction.user is the object representing the User who ran the command
            // interaction.member is the GuildMember object, which represents the user in the specific guild
            yield interaction.reply({
                embeds: [
                    new discord_js_1.EmbedBuilder()
                        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription(`
							Utilisateur : ${interaction.user.username}
							A rejoint le : ${interaction.member.joinedAt}.
						`)
                        .setColor('Yellow')
                ]
            });
        });
    }
};
