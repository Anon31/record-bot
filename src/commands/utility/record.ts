/**
 * @module voiceRecorder
 * @description A Discord.js v14 slash command module that records voice chat audio.
 */
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';
import { joinVoiceChannel } from '@discordjs/voice';

export const command = {
	name: 'start_record',
	data: new SlashCommandBuilder()
	.setName('start_record')
	.setDescription('🔴 Démarrez l\'enregistrement du chat vocal 🎙️'),
	// .addStringOption(option =>
	// 	option.setName('start')
	// 		  .setDescription('Start recording audio from the voice channel.'))
	// .addStringOption(option =>
	// 	option.setName('stop')
	// 		  .setDescription('Stop recording audio from the voice channel.')),
	// .addChannelOption(option =>
	// 	option.setName('channel')
	// 		  .setDescription('The channel to echo into')),
	async execute(interaction) {
		if (interaction.commandName === 'start_record') {

			const voiceChannel = await interaction.member.voice.channel;

			// Check if the user is in a voice channel
			if (!voiceChannel) {
				return await interaction.reply(
					{
						embeds: [
							new EmbedBuilder()
							.setAuthor({name: '⛔'})
							.setDescription(`Vous devez être dans un canal vocal pour utiliser cette commande`)
							.setColor('Red')
						],
						ephemeral: true
					}
				)
			}

			// // Get the voice connection of the bot
			// const connection = joinVoiceChannel({
			// 	channelId: interaction.member.guild.voiceStates.channelId,
			// 	guildId: interaction.member.guild.id,
			// 	adapterCreator: interaction.member.guild.voiceAdapterCreator,
			// });
			// console.log('connection', connection);
			//
			// const voiceChannel = message.member.voice.channel;
			// console.log('Channel audio détecté :', voiceChannel);
		}
	}
	// async execute(interaction) {
	// 	// Check if the subcommand is 'start'
	// 	if (interaction.options.getSubcommand() === 'start') {
	// 		// Check if the user is in a voice channel
	// 		if (!interaction.member.voice.channel) {
	// 			return interaction.reply('You must be in a voice channel to start recording.');
	// 		}
	//
	// 		// Get the voice connection of the bot
	// 		const connection = await interaction.member.voice.channel.join();
	//
	// 		// Create a new audio receiver
	// 		const receiver = connection.receiver.createStream(interaction.member, {
	// 			mode: 'pcm',
	// 		});
	//
	// 		// Create a write stream to save the audio data
	// 		const filePath = '/path/to/save/audio.pcm';
	// 		const writeStream = fs.createWriteStream(filePath);
	//
	// 		// Pipe the audio data to the write stream
	// 		receiver.pipe(writeStream);
	//
	// 		// Reply with a success message
	// 		interaction.reply('Recording started.');
	// 	}
	//
	// 	// Check if the subcommand is 'stop'
	// 	// if (interaction.options.getSubcommand() === 'stop') {
	// 	// 	// Check if the user is in a voice channel
	// 	// 	if (!interaction.member.voice.channel) {
	// 	// 		return interaction.reply('You must be in a voice channel to stop recording.');
	// 	// 	}
	// 	//
	// 	// 	// Get the voice connection of the bot
	// 	// 	const connection = await interaction.member.voice.channel.join();
	// 	//
	// 	// 	// Disconnect from the voice channel
	// 	// 	connection.disconnect();
	// 	//
	// 	// 	// Reply with a success message
	// 	// 	interaction.reply('Recording stopped and audio file saved.');
	// 	// }
	// },
};
