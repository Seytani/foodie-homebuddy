import React, { VFC } from 'react';
import { Meta } from '@storybook/react';

import '@/styles/index.scss';

import Input from '@/components/base/Input';

export default {
    title: 'Base/Input',
    component: Input
} as Meta;

export const Primary: VFC<unknown> = () => <Input label="test"/>;
