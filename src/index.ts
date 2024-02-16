import {Client, Collection, GatewayIntentBits} from 'discord.js';
import * as dotenv                             from 'dotenv';
import * as fs                                 from 'fs';
import {readdirSync}                           from 'node:fs';
import {join}                                  from 'node:path';
import {SlashCommand}                          from './interfaces/slash-command.interface';

const recordsFolder = './data/';
const handlersDirs = join(__dirname, './handlers');

dotenv.config();

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates
	]
})

client.slashCommands = new Collection<string, SlashCommand>();

// Create the records folder if not exist
if (!fs.existsSync(recordsFolder)) {
	fs.mkdirSync(recordsFolder);
}

readdirSync(handlersDirs).forEach(file => {
	require(`${handlersDirs}/${file}`)(client);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
