import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleStatus } from '../../reducers/todosSlice';

interface TodoListItemProps {
	value: string;
	handleToggle: () => void;
	checked: boolean;
}

const TodoListItem = ({ value, handleToggle, checked }: TodoListItemProps) => {
	const labelId = `checkbox-list-label-${value}`;

	return (
		<ListItem
			key={value}
			secondaryAction={
				<IconButton edge="end" aria-label="comments"></IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} onClick={handleToggle} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={checked}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={value} />
			</ListItemButton>
		</ListItem>
	);
};

export default TodoListItem;
