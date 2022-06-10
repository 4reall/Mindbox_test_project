import {
	Box,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';

import styles from './controls.module.css';
import { useState, MouseEvent } from 'react';

const Controls = () => {
	const [alignment, setAlignment] = useState('left');

	const handleChange = (
		event: MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setAlignment(newAlignment);
	};

	return (
		<Box className={styles.controls}>
			<Typography component={'div'}>2 items lefts</Typography>
			<ToggleButtonGroup
				onChange={handleChange}
				exclusive
				value={alignment}
			>
				<ToggleButton value={'left'}>All</ToggleButton>
				<ToggleButton value={'justify'}>Active</ToggleButton>
				<ToggleButton value={'right'}>Completed</ToggleButton>
			</ToggleButtonGroup>
			<Button>Clear Completed</Button>
		</Box>
	);
};

export default Controls;
