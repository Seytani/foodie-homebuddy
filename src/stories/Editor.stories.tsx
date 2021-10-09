import React, { FC, FunctionComponent } from 'react';
import Editor from '@/components/base/Editor';
import { Meta, Story } from '@storybook/react';

export default {
    title: 'Base/Editor',
    component: Editor
} as Meta;

const MockToolbar: FunctionComponent = () => {
    return <h4>Extra Toolbar</h4>;
};

export const Default: Story = (args) => <Editor {...args}/>;
export const WithExtraToolbar: Story = (args) => <Editor {...args}><MockToolbar /></Editor>;
