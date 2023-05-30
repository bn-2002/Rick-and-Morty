import type { Meta, StoryObj } from '@storybook/react'

import Card from '../../../app/characters-list/components/Card'

const meta: Meta<typeof Card> = {
  title: 'Pages/characters-list/components/Card',
    component: Card,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    image : <p>image</p>,
    description  : (
    <div className='flex flex-col justify-between gap-2 h-full'>
        <span>Character Name</span>
        <span>Character Status</span>
    </div>)
  },
}

