import {SlashCommand}                      from '../../interfaces/slash-command.interface';
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';

export const command: SlashCommand = {
	name: 'ping',
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Affiche le ping du bot!'),
	async execute(interaction: any) {
		await interaction.reply({
			embeds: [
				new EmbedBuilder()
				.setAuthor({name: '🏓 Pong!'})
				.setDescription(`Le ping est de ${interaction.client.ws.ping}ms`)
				.setColor('Yellow')
			]
		});
	}
};
