import {
	Actions,
	Filters,
	ITodo,
	ITodosState,
	RootState,
	Todos,
} from '../../types';
import {
	createEntityAdapter,
	createSelector,
	createSlice,
	nanoid,
	PayloadAction,
} from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter<ITodo>();

const initialState: ITodosState = todosAdapter.getInitialState({
	activeTodosLeft: 0,
	activeFilter: Filters.ALL,
});

const todos = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// получает Action.DEC или Action.INC
		updateActiveTodosLeft: (state, action: PayloadAction<Actions>) => {
			state.activeTodosLeft += action.payload === Actions.INC ? 1 : -1;
		},
		// получает массив задач
		clearCompletedTodos: (state, action: PayloadAction<Todos>) => {
			todosAdapter.setAll(
				state,
				action.payload.filter((todo) => !todo.isCompleted)
			);
		},
		// получает фильтер
		changeFilter: (state, action: PayloadAction<Filters>) => {
			state.activeFilter = action.payload;
		},
		// получает задачу
		toggleStatus: (state, action: PayloadAction<ITodo>) => {
			const status = action.payload.isCompleted;
			todosAdapter.updateOne(state, {
				id: action.payload.id,
				changes: { isCompleted: !status },
			});
		},
		// получает строку со значением задачи и доплняет до интерфейса ITodo
		addTodo: {
			reducer: (state, action: PayloadAction<ITodo>) => {
				todosAdapter.addOne(state, action.payload);
			},
			prepare: (todo: string) => {
				return {
					payload: { value: todo, id: nanoid(), isCompleted: false },
				};
			},
		},
	},
});

export const { selectAll: selectAllTodos, selectById: selectTodoById } =
	todosAdapter.getSelectors((state: RootState) => state);

export const filteredTodosSelector = createSelector(
	(state: RootState) => state.activeFilter,
	selectAllTodos,
	(activeFilter, todos) =>
		todos.filter(
			(todo) =>
				// isCompleted === true ~ Filters.COMPLETED, isCompleted === false ~ Filters.ACTIVE
				activeFilter === Filters.ALL ||
				(todo.isCompleted && activeFilter === Filters.COMPLETED) ||
				(!todo.isCompleted && activeFilter === Filters.ACTIVE)
		)
);

const { actions, reducer } = todos;

export default reducer;

export const {
	addTodo,
	toggleStatus,
	changeFilter,
	clearCompletedTodos,
	updateActiveTodosLeft,
} = actions;
