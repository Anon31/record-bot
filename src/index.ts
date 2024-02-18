import {SlashCommand}                          from './interfaces/slash-command.interface';
import {Client, Collection, GatewayIntentBits} from 'discord.js';
import {join}                                  from 'node:path';
import {readdirSync}                           from 'node:fs';
import * as dotenv                             from 'dotenv';
import * as fs                                 from 'fs';

const recordsFolder = './data/';
const handlersFolder = join(__dirname, './handlers');

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

client.commands = new Collection<string, SlashCommand>();

// Create the records folder if not exist
if (!fs.existsSync(recordsFolder)) {
	fs.mkdirSync(recordsFolder);
}

readdirSync(handlersFolder).forEach(file => {
	require(`${handlersFolder}/${file}`)(client);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
