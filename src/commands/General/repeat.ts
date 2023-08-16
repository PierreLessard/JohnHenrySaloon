import { Client } from 'discordx'
import { Category } from '@discordx/utilities'
import { ApplicationCommandOptionType, CommandInteraction } from 'discord.js'

import { Discord, Slash, SlashOption } from '@decorators'
import { Guard } from '@guards'

@Discord()
@Category('General')
export default class RepeatCommand {

	@Slash({
		name: 'repeat',
		description: 'Repeat after me...'
	})
	@Guard()
	async repeat(
		@SlashOption({
			name: 'text',
			required: true,
			type: ApplicationCommandOptionType.String
		})
		text: String,
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {
		interaction.followUp(`${text}`)
	}
}