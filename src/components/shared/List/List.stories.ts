import type { Meta, StoryObj } from '@storybook/react';

import { List } from '.';

const meta = {
  title: 'Shared/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: 'I am a container with a class list and a child',
  },
};

export const As: Story = {
  args: {
    as: 'section',
    children: 'I am a rendered as a section',
  },
};

export const ClassName: Story = {
  args: {
    className: 'foo',
    children: 'I have a custom class in addition to my initial class',
  },
};

export const CommonAttribute: Story = {
  args: {
    id: 'foo',
    children: 'I accept common attributes too',
  },
};
