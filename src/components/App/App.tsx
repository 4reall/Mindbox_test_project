import { Box, Container, Typography } from '@mui/material';

import TodoList from '../TodoList/TodoList';
import AddForm from '../AddForm/AddForm';
import Controls from '../Controls/Controls';

import { Provider } from 'react-redux';
import store from '../../store/store';

import styles from './app.module.css';

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
