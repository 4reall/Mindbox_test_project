import TodoList from '../TodoList/TodoList';

import styles from './app.module.css';
import { Box, Container, Typography } from '@mui/material';
import AddForm from '../AddForm/AddForm';
import Controls from '../Controls/Controls';

function App() {
	return (
		<Box className={styles.app}>
			<Container maxWidth={'md'}>
				<Typography variant="h2" component="h1" align="center">
					Todos
				</Typography>
				<AddForm />
				<TodoList></TodoList>
				<Controls />
			</Container>
		</Box>
	);
}

export default App;
