import type { Meta, StoryObj } from '@storybook/react';
import Character from "../app/characters-list/components/CharacterCard";

const meta: Meta<typeof Character> = {
  title: 'Example/Character',
  component: Character,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Character>;

export const CharacterStory: Story = {
  args: {
    character: {
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick Sanchez',
        status: 'Alive',
        location: { name: 'Earth (Replacement Dimension)',url:"ebebb" },
        gender: 'Male',
        origin: { name: 'Earth (C-137)',url:"vefbeb" },
        created: '2017-11-04T18:48:46.250Z',
        episode : ["https://rickandmortyapi.com/api/123","https://rickandmortyapi.com/api/1234"],
        id : 6,
        species: "Earth (Replacement Dimension)",
        type: "unknown",
        url: "www.blablabla.com" ,
      },
  },
};

