import {
	Box,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
	changeFilter,
	clearCompletedTodos,
	selectAllTodos,
} from '../../store/reducers/todosSlice';
import store from '../../store/store';

import { MouseEvent } from 'react';
import { Filters, RootState } from '../../types';

import styles from './controls.module.css';

const Controls = () => {
	const { activeFilter, activeTodosLeft } = useSelector(
		(state: RootState) => state
	);
	const todos = selectAllTodos(store.getState());
	const dispatch = useDispatch();

	const handleChange = (
		event: MouseEvent<HTMLElement>,
		newFilter: Filters
	) => {
		if (newFilter === null) return;
		dispatch(changeFilter(newFilter));
	};

	const handleClick = () => {
		dispatch(clearCompletedTodos(todos));
	};

	return (
		<Box className={styles.controls}>
			<Typography
				variant="button"
				component={'div'}
				sx={{ height: 'max-content' }}
			>
				{activeTodosLeft} todos left
			</Typography>
			<ToggleButtonGroup
				onChange={handleChange}
				exclusive
				value={activeFilter}
			>
				<ToggleButton value={Filters.ALL}>All</ToggleButton>
				<ToggleButton value={Filters.ACTIVE}>Active</ToggleButton>
				<ToggleButton value={Filters.COMPLETED}>Completed</ToggleButton>
			</ToggleButtonGroup>
			<Button onClick={handleClick}>Clear Completed</Button>
		</Box>
	);
};

export default Controls;
