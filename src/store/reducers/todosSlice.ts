import { Filters, IStore, ITodo } from '../../types';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

const initialState: IStore = {
	activeTodosLeft: 0,
	activeFilter: Filters.ALL,
	todos: [],
};

const todos = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		updateActiveTodosLeft: (state) => {
			state.activeTodosLeft = state.todos.filter(
				(todo) => !todo.completed
			).length;
		},
		clearCompleted: (state) => {
			state.todos = state.todos.filter((todo) => !todo.completed);
		},
		changeFilter: (state, action) => {
			state.activeFilter = action.payload;
		},
		toggleStatus: (state, action) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) todo.completed = !todo.completed;
		},
		addTodo: {
			reducer: (state, action: PayloadAction<ITodo>) => {
				state.todos.push(action.payload);
			},
			prepare: (todo: string) => {
				return {
					payload: { value: todo, id: nanoid(), completed: false },
				};
			},
		},
	},
});

const { actions, reducer } = todos;
export default reducer;
export const {
	addTodo,
	toggleStatus,
	changeFilter,
	clearCompleted,
	updateActiveTodosLeft,
} = actions;
