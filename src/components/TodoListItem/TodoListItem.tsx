import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

interface TodoListItemProps {
	id: string;
	value: string;
	handleToggle: () => void;
	checked: boolean;
}

const TodoListItem = ({
	id,
	value,
	handleToggle,
	checked,
}: TodoListItemProps) => {
	return (
		<ListItem
			data-testid={'todo'}
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
						inputProps={{ 'aria-labelledby': id }}
					/>
				</ListItemIcon>
				<ListItemText id={id} primary={value} />
			</ListItemButton>
		</ListItem>
	);
};

export default TodoListItem;
