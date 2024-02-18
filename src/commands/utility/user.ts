import {SlashCommand} from '../../interfaces/slash-command.interface';
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';

export const command: SlashCommand = {
	name: 'user',
	data: new SlashCommandBuilder()
	.setName('user')
	.setDescription(`Affiche les données de l'utilisateur.`),
	async execute(interaction: any) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply({
			embeds: [
				new EmbedBuilder()
				.setAuthor({
					name: interaction.user.username,
					iconURL: interaction.user.displayAvatarURL()
				})
				.setDescription(
					`
						Utilisateur : ${interaction.user.username}
						A rejoint le : ${interaction.member.joinedAt}.
					`
				)
				.setColor('Yellow')
			]
		});
	}
};
