import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

interface TodoListItemProps {
	value: number;
	handleToggle: (value: number) => () => void;
	checked: number[];
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
			<ListItemButton
				role={undefined}
				onClick={handleToggle(value)}
				dense
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={checked.indexOf(value) !== -1}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
			</ListItemButton>
		</ListItem>
	);
};

export default TodoListItem;
