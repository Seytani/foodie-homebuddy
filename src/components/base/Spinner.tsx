import React, { FunctionComponent } from "react";
import "@/styles/components/base/Spinner.scss";

export interface SpinnerProps {
	color?: string;
	size?: number;
	text?: string;
}

const Spinner: FunctionComponent<SpinnerProps> = (props) => {
	return (
		<div className="spinner">
			<svg className="spinner__element" viewBox="0 0 50 50" 
			style={{width: props.size}}>
				<circle
					className={`spinner__path ${props.color}`}
					cx="25"
					cy="25"
					r="20"
					fill="none"
					strokeWidth="5"
				></circle>
			</svg>
			{props.text ? <span className="spinner__text">{props.text}</span>: null}
		</div>
	);
};

export default Spinner;
