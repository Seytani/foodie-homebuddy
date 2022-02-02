import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import Input, { InputProps } from './Input';
import '@/styles/components/base/InputSelector.scss';

interface InputSelectorProps extends InputProps {
	displayName: string;
	options?: IngredientInterface[];
}

const InputSelector: FunctionComponent<InputSelectorProps> = (props) => {
	const { label, options, displayName } = props;

	const [inputValue, setInputValue] = useState('');
	const [optionDisplay, setOptionDisplay] = useState(false);

	const optionsRef = useRef(null);
	console.log(options);
	const inputIcon = (
		<span
			className="material-icons"
			onClick={() => setOptionDisplay(!optionDisplay)}
		>
			arrow_drop_down
		</span>
	);

	useEffect(() => {
		function isClickedOutside(e) {
			if (
				optionDisplay &&
				optionsRef &&
				!optionsRef.current.contains(e.target)
			)
				setOptionDisplay(false);
		}
		document.addEventListener('mousedown', isClickedOutside);
		return () => {
			document.removeEventListener('mousedown', isClickedOutside);
		};
	}, [optionDisplay]);

	function handleInputChange(e) {
		setInputValue(e.target.value);
		props.onChange(e);
	}

	return (
		<div className="input-selector">
			<Input
				label={label}
				type="text"
				icon={inputIcon}
				onChange={handleInputChange}
				onBlur={() => setOptionDisplay(false)}
			/>
			{optionDisplay && (
				<div
					className="input-selector__option-container"
					ref={optionsRef}
				>
					{options.map((op) => (
						<div key={op.id} className="input-selector__option">
							{op[displayName]}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default InputSelector;
