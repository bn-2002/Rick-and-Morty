import type { Meta, StoryObj } from '@storybook/react';

import CardShimmer from '../../../app/characters/components/CardShimmer';

const meta: Meta<typeof CardShimmer> = {
  title: 'Pages/characters/components/CardShimmer',
  component: CardShimmer,
  tags: ['autodocs'],
  }

export default meta;
type Story = StoryObj<typeof CardShimmer>;

export const Primary: Story = {
  args: {
  },
};
