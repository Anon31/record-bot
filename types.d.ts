import {SlashCommand} from './src/interfaces/slash-command.interface';
import {Collection} from 'discord.js';

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
		commands: Collection<string, SlashCommand>;
	}
}

export {}
