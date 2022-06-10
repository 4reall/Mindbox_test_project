import { useState } from 'react';
import List from '@mui/material/List';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Divider } from '@mui/material';

const TodoList = () => {
	const [checked, setChecked] = useState([0]);

	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const list = [0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
		return (
			<>
				<TodoListItem
					value={value}
					handleToggle={handleToggle}
					checked={checked}
				/>
				<Divider />
			</>
		);
	});

	return (
		<List
			sx={{
				// width: 0.5,
				mx: 'auto',
				mb: 2,
				bgcolor: 'background.paper',
			}}
		>
			{list}
		</List>
	);
};

export default TodoList;
