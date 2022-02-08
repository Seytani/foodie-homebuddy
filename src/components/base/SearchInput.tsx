import React, { FunctionComponent } from 'react';

import '@/styles/components/base/SearchInput.scss';

import '@/styles/index.scss';

interface SearchInputProps {
    size?: string;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ size }) => {
    return <div className="search-input d-flex fai-center">
		<span className={`icon material-icons ${size}`}>search</span>
		<input className={size} type="text" />
	</div>;
};

export default SearchInput;

