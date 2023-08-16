import { Client, SimpleCommand, SimpleCommandMessage } from 'discordx'
import { Category } from '@discordx/utilities'
import { ApplicationCommandOptionType, CommandInteraction } from 'discord.js'

import { Discord, Slash, SlashOption } from '@decorators'
import { Guard } from '@guards'
import { test } from 'node:test'

@Discord()
@Category('General')
export default class TestCommand {

	@SimpleCommand({
		prefix: [""],
		name: "test"
	})
	async test(command: SimpleCommandMessage) {
		command.message.reply("icle")
	}

}