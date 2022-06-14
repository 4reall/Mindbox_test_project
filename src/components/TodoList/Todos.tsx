import { Divider, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Filters, ITodo } from '../../types';

import styles from './todoList.module.css';

interface TodosProps {
	todos: ITodo[];
	activeFilter: Filters;
	handleToggle: (id: string) => () => void;
}

const Todos = ({ todos, activeFilter, handleToggle }: TodosProps) => {
	// Возможно условие фильтрации можно улучшить, но я не нашел оптимального решения.
	// Так если заменить значение свойства completed типа bool на тип Filters, то усложнится
	// проверка в редюсере.
	const filteredTodos = todos.filter(
		(todo) =>
			activeFilter === Filters.ALL ||
			(todo.completed && activeFilter === Filters.COMPLETED) ||
			(!todo.completed && activeFilter === Filters.ACTIVE)
	);

	if (filteredTodos.length === 0) {
		return (
			<CSSTransition
				exit={false}
				timeout={500}
				classNames={{
					enter: styles.todoEnter,
					enterActive: styles.todoEnterActive,
					exit: styles.todoExit,
					exitActive: styles.todoExitActive,
				}}
			>
				<Typography variant="h5" component="div" align="center">
					There are no todos here
				</Typography>
			</CSSTransition>
		);
	}

	const list = filteredTodos.map(({ id, value, completed }) => (
		<CSSTransition
			exit={false}
			key={id}
			timeout={500}
			classNames={{
				enter: styles.todoEnter,
				enterActive: styles.todoEnterActive,
				exit: styles.todoExit,
				exitActive: styles.todoExitActive,
			}}
		>
			<>
				<TodoListItem
					id={id}
					value={value}
					handleToggle={handleToggle(id)}
					checked={completed}
				/>
				<Divider />
			</>
		</CSSTransition>
	));
	return <TransitionGroup>{list}</TransitionGroup>;
};

export default Todos;
