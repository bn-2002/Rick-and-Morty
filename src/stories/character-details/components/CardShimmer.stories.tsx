import type { Meta, StoryObj } from '@storybook/react';

import CardShimmer from '../../../app/character-details/[slug]/components/CardShimmer';

const meta: Meta<typeof CardShimmer> = {
  title: 'Pages/character-details/components/CardShimmer',
    component: CardShimmer,
  tags: ['autodocs'],
  }

export default meta;
type Story = StoryObj<typeof CardShimmer>;

export const Primary: Story = {
  args: {
  },
};
