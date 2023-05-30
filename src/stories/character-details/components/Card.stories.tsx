import type { Meta, StoryObj } from '@storybook/react'

import Card from '../../../app/character-details/[slug]/components/Card'

const meta: Meta<typeof Card> = {
  title: 'Pages/character-details/components/Card',
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
        <span>Loreamet, conse eiusmod temput l</span>
        <span>commodo consequat. Duiinoluptate vel</span>
        <span> sint occ</span>
        <span>s aute irure dolor </span>
        <span>ctetur adipiscing elit, sed do</span>
        <span>m ipsum dolor sit </span>
    </div>)
  },
}

