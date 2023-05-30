import type { Meta, StoryObj } from '@storybook/react'

import Header from '../../../app/characters-list/components/Header'

const meta: Meta<typeof Header> = {
  title: 'Pages/characters-list/components/Header',
    component: Header,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {
  },
}

