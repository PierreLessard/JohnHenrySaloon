import { Client } from 'discordx'
import { Category } from '@discordx/utilities'
import { CommandInteraction } from 'discord.js'

import { Discord, Slash } from '@decorators'
import { Guard } from '@guards'

@Discord()
@Category('General')
export default class HowdyCommand {

	@Slash({
		name: 'howdy',
		description: 'howdy, world!'
	})
	@Guard()
	async howdy(
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {
		
		interaction.followUp(`Howdy, ${interaction.member}!`)
	}
}