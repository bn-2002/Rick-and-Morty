import type { Meta, StoryObj } from '@storybook/react'

import Buttons from '../../../app/characters/components/Buttons'
import {CharacterStatusType} from '../../../app/characters/types'

const meta: Meta<typeof Buttons> = {
    
  title: 'Pages/characters/components/Buttons',
    component: Buttons,
  tags: ['autodocs'],
  }

export default meta
type Story = StoryObj<typeof Buttons>

const characterInfo = {
        name: 'Rick Sanchez',
        status: "Alive" as CharacterStatusType ,
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
}

export const Primary: Story = {
  args: {
    isLoading : true,
    pageNumber : 1,
    setPageNumber : () => {},
    data : {
        results: [characterInfo],
        info: "",
    }
  },
}

