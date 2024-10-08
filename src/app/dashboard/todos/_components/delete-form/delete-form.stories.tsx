import type { Meta, StoryObj } from '@storybook/react';

import { DeleteForm } from './delete-form';

const meta: Meta<typeof DeleteForm> = {
  component: DeleteForm,
};

export default meta;
type Story = StoryObj<typeof DeleteForm>;

export const Primary: Story = {
  args: {},
};
