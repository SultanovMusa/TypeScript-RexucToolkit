import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./tools/counterSlice";
import { todoReducer } from "./tools/todoSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		counterReducer,
		todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
