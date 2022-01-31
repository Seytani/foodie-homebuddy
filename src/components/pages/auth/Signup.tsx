import Input from "@/components/base/Input";
import React, { FunctionComponent, useState, MouseEvent, useEffect } from "react";
import { useDispatch } from "@/store/hooks";
import { postNewUser } from "@/store/auth-slice";
import { useHistory } from "react-router-dom";

const Signup: FunctionComponent = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [enableRegistration, setEnableRegistration] =useState(false);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if(password.localeCompare(confPassword) === 0 && password != '' && confPassword != '') {
			setEnableRegistration(true);
		} else {
			setEnableRegistration(false);
		}
	}), [password, confPassword];

	async function handleSubmit(e: MouseEvent) {
		e.preventDefault();
		await dispatch(postNewUser({ email, username, password }));
		history.push('/recipes');
	}

	function matchPassword() {
		return !!(password.localeCompare(confPassword));
	}

	return (
		<div className="d-flex fd-column fai-center">
			<h3 className="mb-10">Sign up</h3>
			<Input label="email" type='email' onChange={(e) => setEmail(e.target.value)} autoFocus/>
			<Input
				label="username"
				onChange={(e) => setUsername(e.target.value)}
							/>
			<Input
				label="password"
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				
			/>
			<Input
				label="confirm"
				onChange={(e) => setConfPassword(e.target.value)}
				type="password"
				
			/>
			<button
				className="btn"
				onClick={handleSubmit}
				disabled={!enableRegistration}
			>
				Sign Up
			</button>
		</div>
	);
};

export default Signup;
