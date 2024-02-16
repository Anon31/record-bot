import {SlashCommand}                      from '../../interfaces/slash-command.interface';
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';

export const command: SlashCommand = {
	name: 'record',
	data: new SlashCommandBuilder()
	.setName('record')
	.setDescription('Lance l\'enregistrement d\'un message vocal 🎙️'),
	async execute(interaction: any) {
		await interaction.reply({
			embeds: [
				new EmbedBuilder()
				.setDescription(`🔴  Enregistrement en cours...`)
				.setColor('Red')
			]
		});
	}
};
