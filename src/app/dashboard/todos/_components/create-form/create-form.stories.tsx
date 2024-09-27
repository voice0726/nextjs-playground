import type { Meta, StoryObj } from '@storybook/react';

import { CreateForm } from './create-form';

const meta: Meta<typeof CreateForm> = {
  component: CreateForm,
};

export default meta;
type Story = StoryObj<typeof CreateForm>;

export const Primary: Story = {
  args: {},
};
