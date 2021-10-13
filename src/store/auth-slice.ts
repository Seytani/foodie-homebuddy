import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: null as IUser,
} as IAuth;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		set_auth(state, action: PayloadAction<IAuth>) {
			return action.payload;
		},

	},
});

const authSelector = (state: IState):IAuth => {
	return state.auth;
};

export { authSelector };
export const { set_auth } = authSlice.actions;
export default authSlice.reducer;
