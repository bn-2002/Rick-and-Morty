import type { Meta, StoryObj } from '@storybook/react'

import Description from '../../../app/characters-list/components/Description'

const meta: Meta<typeof Description> = {
  title: 'Pages/characters-list/components/Description',
    component: Description,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Description>

export const Primary: Story = {
  args: {
    id : 1 ,
    name : 'Rick',
    status : 'Alive'
  },
}

