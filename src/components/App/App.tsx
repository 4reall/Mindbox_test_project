import TodoList from '../TodoList/TodoList';

import styles from './app.module.css';
import { Box, Container, Typography } from '@mui/material';
import AddForm from '../AddForm/AddForm';
import Controls from '../Controls/Controls';
import store from '../../store/store';
import { Provider } from 'react-redux';
import { useState } from 'react';

function App() {
	const [todosLeft, setTodosLeft] = useState(2);
	return (
		<Provider store={store}>
			<Box className={styles.app}>
				<Container maxWidth={'md'}>
					<Typography variant="h2" component="h1" align="center">
						Todos
					</Typography>
					<AddForm />
					<TodoList setTodosLeft={setTodosLeft}></TodoList>
					<Controls todosLeft={todosLeft} />
				</Container>
			</Box>
		</Provider>
	);
}

export default App;
