import type { Meta, StoryObj } from '@storybook/react'

import Header from '../../../app/characters/components/Header'

const meta: Meta<typeof Header> = {
  title: 'Pages/characters/components/Header',
    component: Header,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Header>


export const Primary: Story = {
  args: {
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

