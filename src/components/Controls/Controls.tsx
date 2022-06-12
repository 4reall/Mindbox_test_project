import {
	Box,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, clearCompleted } from '../../store/reducers/todosSlice';

import { MouseEvent } from 'react';
import { Filters, IStore } from '../../types';

import styles from './controls.module.css';

const Controls = () => {
	const { activeFilter, activeTodosLeft } = useSelector(
		(state: IStore) => state
	);
	const dispatch = useDispatch();

	const handleChange = (
		event: MouseEvent<HTMLElement>,
		newFilter: Filters
	) => {
		if (newFilter === null) return;
		dispatch(changeFilter(newFilter));
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
			<Button onClick={() => dispatch(clearCompleted())}>
				Clear Completed
			</Button>
		</Box>
	);
};

export default Controls;
