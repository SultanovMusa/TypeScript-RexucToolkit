import { createSlice } from "@reduxjs/toolkit";

interface createSliceType {
	id: number;
	name: string;
	age: number;
	img: string;
}

const initialState: { data: createSliceType[] } = {
	data: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newData = {
				id: Date.now(),
				name: action.payload.name,
				age: action.payload.age,
				img: action.payload.img,
			};
			state.data.push(newData);
		},

		deleteTodo: (state, action) => {
			state.data = state.data.filter((todo) => todo.id !== action.payload);
		},
		deleteOl: (state) => {
			state.data = [];
		},
		editTodo: (state, action) => {
			const { id, name, age, img } = action.payload;
			const todoEdit = state.data.find((todo) => todo.id === id);
			if (todoEdit) {
				todoEdit.name = name;
				todoEdit.age = age;
				todoEdit.img = img;
			}
		},
	},
});

export const { addTodo, deleteTodo, editTodo,deleteOl } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
