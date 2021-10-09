import React from 'react';
import { Meta, Story } from '@storybook/react';

import '@/styles/index.scss';

import Input, { InputProps } from '@/components/base/Input';

export default {
    title: 'Base/Input',
    component: Input
} as Meta;

export const Primary: Story = (args: InputProps) => <Input {...args}/>;
