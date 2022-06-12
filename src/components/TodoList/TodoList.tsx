import List from '@mui/material/List';

import { useDispatch, useSelector } from 'react-redux';
import {
	toggleStatus,
	updateActiveTodosLeft,
} from '../../store/reducers/todosSlice';

import { IStore } from '../../types';

import Todos from './Todos';

const TodoList = () => {
	const { activeFilter, todos } = useSelector((state: IStore) => state);
	const dispatch = useDispatch();

	const handleToggle = (id: string) => () => {
		dispatch(toggleStatus(id));
		dispatch(updateActiveTodosLeft());
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
			<Todos
				todos={todos}
				activeFilter={activeFilter}
				handleToggle={handleToggle}
			/>
		</List>
	);
};

export default TodoList;
