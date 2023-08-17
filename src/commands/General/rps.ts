import { ButtonComponent, Client } from 'discordx'
import { Category } from '@discordx/utilities'
import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, CommandInteraction, MessageActionRowComponentBuilder } from 'discord.js'

import { Discord, Slash } from '@decorators'
import { Guard } from '@guards'



@Discord()
@Category('General')
export default class RpsCommand {

	reply(choice: string): string {
		const options = [
			"rock",
			"paper",
			"scissors"
		];
		let bot_choice = options[Math.floor(Math.random()*3)]

		if (choice == bot_choice) {
			return `we tie, i chose ${bot_choice}`
		} else if (choice == "rock") {
			if (bot_choice == "scissors") {
				return "ur rock smashed my scissors D: u win"
			} else {
				return "my paper cover ur rock, i win"
			}
		} else if (choice == "paper") {
			if (bot_choice == "rock") {
				return "my rock kill ur scissors, idiot"
			} else {
				return "scissor cuts paper, i win!!!!"
			}
		} else if (choice == "scissors") {
			if (bot_choice == "paper") {
				return "Ur scissors sliced up my paper mannn, you win"
			} else {
				return "my rock kill ur scissors, idiot"
			}
		}

		return "i fucked up"
	}

	@ButtonComponent({id: "rock"})
	rock(interaction: ButtonInteraction): void {

		interaction.reply(this.reply("rock"));
	}
	@ButtonComponent({id: "paper"})
	paper(interaction: ButtonInteraction): void {

		interaction.reply(this.reply("paper"));
	}
	@ButtonComponent({id: "scissors"})
	scissors(interaction: ButtonInteraction): void {

		interaction.reply(this.reply("scissors"));
	}

	@Slash({
		name: 'rps',
		description: 'rock paper scissors'
	})
	async rps(
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {

		//await interaction.deferReply();

		const rock_button = new ButtonBuilder()
		.setLabel("rock")
		.setStyle(ButtonStyle.Primary)
		.setCustomId("rock");
		const paper_button = new ButtonBuilder()
		.setLabel("paper")
		.setStyle(ButtonStyle.Primary)
		.setCustomId("paper");
		const scissors_button = new ButtonBuilder()
		.setLabel("scissors")
		.setStyle(ButtonStyle.Primary)
		.setCustomId("scissors");

		const buttonRow =
      	new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        rock_button,
		paper_button,
		scissors_button
      );

		await interaction.editReply({content: "ok, lets go, choose", components: [buttonRow]});
	}
}