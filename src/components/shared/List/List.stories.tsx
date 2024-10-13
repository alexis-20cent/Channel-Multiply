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

const Img = () => <img src='https://placehold.co/240x400?text=Hello+World' />;

export const Simple: Story = {
  args: {
    children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => <Img key={val} />),
    style: { width: '500px' }
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

export const Scrollable: Story = {
  args: {
    scrollable: true,
    children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => <Img key={val} />),
    style: { width: '500px' }
  },
};
