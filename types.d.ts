import {Collection} from 'discord.js';
import {SlashCommand} from './src/interfaces/slash-command.interface';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TOKEN: string;
			APPLICATION_ID: string;
			PUBLIC_KEY: string;
		}
	}
}

declare module 'discord.js' {
	export interface Client {
		slashCommands: Collection<string, SlashCommand>;
	}
}

export {}
