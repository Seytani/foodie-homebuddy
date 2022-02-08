import React from 'react';
import { Meta, Story } from '@storybook/react';

import '@/styles/index.scss';

import ButtonGroup from '@/components/base/ButtonGroup';
import Button from '@/components/base/Button';

export default {
    title: 'Base/ButtonGroup',
    component: ButtonGroup,
} as Meta;

export const Default: Story = () => <ButtonGroup>
    <Button>test</Button>
    <Button>test</Button>
    <Button>test</Button>
</ButtonGroup>;
