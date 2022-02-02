import React, {
	FunctionComponent,
	ChangeEvent,
	EventHandler,
	FocusEvent,
	KeyboardEvent,
} from "react";

import "@/styles/components/base/Input.scss";
export interface InputProps {
	label: string;
	value?: string;
	type?: string;
	autoFocus?: boolean;
	maxlength?: number;
	icon?: JSX.Element;
	onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
	onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
	onKeyPress?: EventHandler<KeyboardEvent<HTMLInputElement>>;
}

const Input: FunctionComponent<InputProps> = (props) => {
	const { label, type, icon} = props;
	return (
		<div className="input d-flex fd-column">
			<label htmlFor={label} className="forder-2">
				{label}
			</label>

			{icon && <span className="material-icons input__icon"
				>{icon}</span>}
		

			<input id={label} type={type} {...props} />
		</div>
	);
};

export default Input;
