import React from 'react';
import { Meta, Story} from '@storybook/react';

import '@/styles/index.scss';

import Button from '@/components/base/Button';

export default {
    title: 'Base/Button',
    component: Button
} as Meta;

export const Regular: Story = () => (<>
    <Button variant='primary'>Regular</Button>
    <Button variant='secondary'>Regular</Button>
</>);
export const  Circular: Story = () => (<>
    <Button variant='circular'>
        <span className="material-icons">search</span>
    </Button>
    <Button variant='circular-secondary'>
        <span className="material-icons">search</span>
    </Button>
</>);
