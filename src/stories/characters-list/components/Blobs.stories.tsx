import type { Meta, StoryObj } from '@storybook/react'
import '../../../app/characters-list/components/Blobs.scss'

import Blobs from '../../../app/characters-list/components/Blobs'

const meta: Meta<typeof Blobs> = {
  title: 'Pages/characters-list/components/Blobs',
    component: Blobs,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Blobs>

export const Primary: Story = {
  args: {
  },
}

