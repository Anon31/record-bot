import {BotEvent}                    from '../interfaces/bot-event.interface';
import {Events, Interaction} from 'discord.js';

const event: BotEvent = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction: Interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		await command.execute(interaction);
	}

}

export default event;
