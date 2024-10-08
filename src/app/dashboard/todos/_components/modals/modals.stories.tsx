import type { Meta, StoryObj } from '@storybook/react';

import { Modals } from './modals';

const meta: Meta<typeof Modals> = {
  component: Modals,
};

export default meta;
type Story = StoryObj<typeof Modals>;

export const Primary: Story = {
  args: {},
};
