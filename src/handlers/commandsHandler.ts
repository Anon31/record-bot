import {SlashCommand} from '../interfaces/slash-command.interface';
import {join}         from 'node:path';
import {Client, REST, Routes} from 'discord.js';
import {readdirSync}  from 'fs';

module.exports = async (client: Client) => {
	const body = [];
	const slashCommandsDir = join(__dirname, '../commands/utility');

	readdirSync(slashCommandsDir).forEach(file => {
		if (!file.endsWith('.js')) return;

		const command: SlashCommand = require(`${slashCommandsDir}/${file}`).command;

		body.push(command?.data.toJSON());
		console.log(`✅  The ${command?.name} command was loaded correctly !!!`, body);
		client.slashCommands.set(command?.name, command);
	});

	// Register the commands
	const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

	try {
		// Add the commands to the Discord application
		await rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), {body});
	} catch (error) {
		console.error(error);
	}
}
