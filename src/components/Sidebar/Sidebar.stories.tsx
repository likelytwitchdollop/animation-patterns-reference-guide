import { Meta, StoryObj } from '@storybook/react'

import Sidebar from '.'

const meta: Meta<typeof Sidebar> = {
	title: 'Components/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}
