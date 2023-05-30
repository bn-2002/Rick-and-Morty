import type { Meta, StoryObj } from '@storybook/react'

import description from '../../../app/character-details/[slug]/components/Description'

const meta: Meta<typeof description> = {
  title: 'Pages/character-details/components/Description',
    component: description,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof description>

export const Primary: Story = {
  args: {
    characterData : {
        name: 'Rick Sanchez',
        status: 'Alive',
        location: {
          name: 'Earth (Replacement Dimension)',
          url : "reger"
        },
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url : "greer"
        },
        created: '2017-11-04T18:48:46.250Z',
        species: 'Human',
        episode: [
             'Pilot',
            'Lawnmower Dog',
        ],
        id : 8,
        type : "type",
        image : "www.image.com",
        url: "www.url.com"
      },
  },
}

