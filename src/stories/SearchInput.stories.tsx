import React from 'react';
import { Meta, Story} from '@storybook/react';

import '@/styles/index.scss';

import SearchInput from '@/components/base/SearchInput';

export default {
    title: 'Base/SearchInput',
    component: SearchInput
} as Meta;

export const Sizes: Story = () => (<>
    <SearchInput />
    <br />
    <SearchInput size="medium" />
    <br />
    <SearchInput size="small" />
</>);
