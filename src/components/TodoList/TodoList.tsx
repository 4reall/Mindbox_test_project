import { SetStateAction, useState } from 'react';
import List from '@mui/material/List';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Filters, IStore, ITodo } from '../../types';
import { toggleStatus, updateActiveTodosLeft } from '../../reducers/todosSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './todoList.module.css';

interface TodoListProps {
	setTodosLeft: (todosLeft: number) => void;
}

const TodoList = ({ setTodosLeft }: TodoListProps) => {
	const { activeFilter, todos } = useSelector((state: IStore) => state);
	const dispatch = useDispatch();

	const [checked, setChecked] = useState([0]);

	const handleToggle = (id: string) => () => {
		dispatch(toggleStatus(id));
		dispatch(updateActiveTodosLeft());
	};

	const render = (todos: ITodo[]) => {
		const filteredTodos = todos.filter(
			(todo) =>
				activeFilter === Filters.ALL ||
				(todo.completed && activeFilter === Filters.COMPLETED) ||
				(!todo.completed && activeFilter === Filters.ACTIVE)
		);

		if (filteredTodos.length === 0) {
			return (
				<CSSTransition
					timeout={500}
					// classNames={{
					// 	enter: styles.todoEnter,
					// 	enterActive: styles.todoEnterActive,
					// 	exit: styles.todoExit,
					// 	exitActive: styles.todoExitActive,
					// }}
				>
					<Typography variant="h4" component="div" align="center">
						There are no todos here
					</Typography>
				</CSSTransition>
			);
		}

		return filteredTodos.map(({ id, value, completed }) => (
			<CSSTransition
				key={id}
				timeout={500}
				classNames={{
					enter: styles.todoEnter,
					enterActive: styles.todoEnterActive,
					exit: styles.todoExit,
					exitActive: styles.todoExitActive,
				}}
				// classNames={'item'}
			>
				<>
					<TodoListItem
						value={value}
						handleToggle={handleToggle(id)}
						checked={completed}
					/>
					<Divider />
				</>
			</CSSTransition>
		));
	};

	const view = render(todos);

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
			<TransitionGroup>{render(todos)}</TransitionGroup>
		</List>
	);
};

export default TodoList;
