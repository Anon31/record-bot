import {BotEvent} from '../interfaces/bot-event.interface';
import {Client} from 'discord.js';
import {join}   from 'node:path';
import {readdirSync} from 'fs';

module.exports = (client: Client) => {
	let eventsDir = join(__dirname, '../events');

	readdirSync(eventsDir).forEach(file => {
		if (!file.endsWith('.js')) return;

		const event: BotEvent = require(`${eventsDir}/${file}`).default;

		event.once
			? client.once(event.name, (...args: any[]) => event.execute(...args))
			: client.on(event.name, (...args: any[]) => event.execute(...args));

		console.log(`✅  The "${event.name}" event was loaded correctly !!!`);
	});
}
