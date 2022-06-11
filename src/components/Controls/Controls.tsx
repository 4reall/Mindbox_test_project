import {
	Box,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';

import styles from './controls.module.css';
import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters, IStore } from '../../types';
import {
	changeFilter,
	clearCompleted,
	updateActiveTodosLeft,
} from '../../reducers/todosSlice';

interface ControlsProps {
	todosLeft: number;
}

const Controls = ({ todosLeft }: ControlsProps) => {
	const { activeFilter, activeTodosLeft } = useSelector(
		(state: IStore) => state
	);
	// const [alignment, setAlignment] = useState(Filters.ALL);
	const dispatch = useDispatch();

	const handleChange = (
		event: MouseEvent<HTMLElement>,
		newFilter: Filters
	) => {
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
