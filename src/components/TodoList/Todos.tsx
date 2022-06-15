import { Divider, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoListItem from '../TodoListItem/TodoListItem';
import { ITodo } from '../../types';

import styles from './todoList.module.css';

interface TodosProps {
	todos: ITodo[];
	handleToggle: (id: string) => () => void;
}

const Todos = ({ todos, handleToggle }: TodosProps) => {
	if (todos.length === 0) {
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

	const todosList = todos.map(({ id, value, isCompleted }) => (
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
					checked={isCompleted}
				/>
				<Divider />
			</>
		</CSSTransition>
	));
	return <TransitionGroup>{todosList}</TransitionGroup>;
};

export default Todos;
