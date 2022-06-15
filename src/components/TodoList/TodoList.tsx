import List from '@mui/material/List';

import { useDispatch } from 'react-redux';
import {
	filteredTodosSelector,
	selectTodoById,
	toggleStatus,
	updateActiveTodosLeft,
} from '../../store/reducers/todosSlice';
import store from '../../store/store';

import { Actions } from '../../types';

import Todos from './Todos';

const TodoList = () => {
	const filteredTodos = filteredTodosSelector(store.getState());
	const dispatch = useDispatch();

	const handleToggle = (id: string) => () => {
		const todo = selectTodoById(store.getState(), id);
		if (!todo) return;
		dispatch(toggleStatus(todo));
		dispatch(
			// если задача активна, то при переключении ее статуса количество
			// активных задач должно уменьшиться и наоборот
			updateActiveTodosLeft(!todo.isCompleted ? Actions.DEC : Actions.INC)
		);
	};

	return (
		<List
			sx={{
				mx: 'auto',
				mb: 2,
				bgcolor: 'background.paper',
				borderRadius: 3,
				maxHeight: 400,
				overflow: 'scroll',
			}}
		>
			<Todos todos={filteredTodos} handleToggle={handleToggle} />
		</List>
	);
};

export default TodoList;
