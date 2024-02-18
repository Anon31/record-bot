import {SlashCommand} from '../interfaces/slash-command.interface';
import {Client, REST, Routes} from 'discord.js';
import {join}         from 'node:path';
import {readdirSync}  from 'fs';

module.exports = async (client: Client) => {
	const body = [];
	const commandsFolder = join(__dirname, '../commands/utility');

	readdirSync(commandsFolder).forEach(file => {
		if (!file.endsWith('.js')) return;

		const command: SlashCommand = require(`${commandsFolder}/${file}`).command;

		body.push(command?.data.toJSON());
		console.log(`✅  The ${command?.name} command was loaded correctly !!!`, body);
		client.commands.set(command?.name, command);
	});

	// Construct and prepare an instance of the REST module
	const rest = new REST().setToken(process.env.TOKEN);
	// Add and deploy your commands to the Discord application!
	try {
		await rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), {body});
	} catch (error) {
		console.error(error);
	}
}
