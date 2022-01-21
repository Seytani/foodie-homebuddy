import Input from "@/components/base/Input";
import React, { FunctionComponent, useState, MouseEvent } from "react";
import { useDispatch } from "@/store/hooks";
import { postNewUser } from "@/store/auth-slice";

const Signup: FunctionComponent = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	function handleSubmit(e: MouseEvent) {
		e.preventDefault();
		dispatch(postNewUser({ email, username, password }));
	}

	return (
			<div className="d-flex fd-column fai-center">
				<h3 className="mb-10">Sign up</h3>
				<Input
					label="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					label="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					label="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="btn" onClick={handleSubmit}>
					Sign Up
				</button>
			</div>
	);
};

export default Signup;
