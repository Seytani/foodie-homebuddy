import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authClient, initializeClient } from "@/client";

interface AuthResponse {
	access_token: string;
}

const initialState = {
	user: null as IUser,
	status: "idle",
} as IAuth;

export const postNewUser = createAsyncThunk(
	"auth/post",
	async (newUser: IUser) => {
		const res = await authClient.post<unknown, AuthResponse>(
			"/register",
			newUser
		);
		initializeClient(res.access_token);
		const userinfo: IUser = await authClient.get("/userinfo", {
			headers: { Authorization: "Bearer " + res.access_token },
		});
		return userinfo;
	}
);

export const loginUser = createAsyncThunk(
	"auth/login", 
	async (user: IUser) => {
	const res =  await authClient.post<unknown, AuthResponse>("/login", user);
	initializeClient(res.access_token);
	const userinfo: IUser = await authClient.get("/userinfo", {
		headers: {
		'Authorization': "Bearer " + res.access_token
		}
	});
	return userinfo;
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		set_auth(state, action: PayloadAction<IAuth>) {
			return action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(postNewUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(postNewUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(postNewUser.rejected, (state) => {
				state.status = "rejected";
			});
			builder
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

const authSelector = (state: IState): IAuth => {
	return state.auth;
};

export { authSelector };
export const { set_auth } = authSlice.actions;
export default authSlice.reducer;
