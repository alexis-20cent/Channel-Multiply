import type { Meta, StoryObj } from '@storybook/react';

import { Section } from '.';

const meta = {
  title: 'Shared/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: 'I am a container with a class section and a child',
  },
};

export const Title: Story = {
  args: {
    title: 'Hello',
    children: 'I can have a title',
  },
};

export const As: Story = {
  args: {
    as: 'header',
    children: 'I am a rendered as a header',
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
