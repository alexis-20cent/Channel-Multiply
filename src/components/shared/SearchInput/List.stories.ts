import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from '.';

const meta = {
  title: 'Shared/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    value: 'Simple controlled search input',
    onChange: () => {},
  },
};

export const Value: Story = {
  args: {
    value: 'My value is controlled by props',
    onChange: () => {},
  },
};

export const OnChange: Story = {
  args: {
    value: 'Alert on change',
    onChange: () => alert('Change event'),
  },
};

export const CommonAttribute: Story = {
  args: {
    id: 'foo',
    placeholder: 'I accept common attributes too',
    value: '',
    onChange: () => {},
  },
};
