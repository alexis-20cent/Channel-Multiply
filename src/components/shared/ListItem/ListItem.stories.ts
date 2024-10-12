import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '.';

const meta = {
  title: 'Shared/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Hello world',
    img: 'https://placehold.co/600x400?text=Hello+World',
  },
};

export const As: Story = {
  args: {
    as: 'article',
    title: 'Hello world as an article',
    img: 'https://placehold.co/600x400?text=Hello+World',
  },
};

export const CommonAttribute: Story = {
  args: {
    id: 'foo',
    title: 'Hello world with common attribute',
    img: 'https://placehold.co/600x400?text=Hello+World',
  },
};
