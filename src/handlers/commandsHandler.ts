import {Client, REST, Routes} from 'discord.js';
import {join}         from 'node:path';
import {readdirSync} from 'fs';
import {SlashCommand} from '../interfaces/slash-command.interface';

module.exports = async (client: Client) => {
	const body = [];
	const slashCommandsDir = join(__dirname, '../commands/utility');

	readdirSync(slashCommandsDir).forEach(file => {
		if (!file.endsWith('.js')) return;

		const command: SlashCommand = require(`${slashCommandsDir}/${file}`).command;

		body.push(command?.data.toJSON());
		console.log('Body:', body);
		client.slashCommands.set(command?.name, command);
	});

	// const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

	// try {
	// 	await rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), {body});
	// } catch (error) {
	// 	console.error(error);
	// }
}
