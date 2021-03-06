import { ErrorMessage, useField } from 'formik';
import { Box, Input as InputMUI } from '@mui/material';

import styles from './input.module.css';

interface InputProps {
	name: string;
}

const Input = ({ name }: InputProps) => {
	const [field] = useField(name);
	return (
		<Box className={styles.inputWrapper}>
			<InputMUI
				data-testid={'input'}
				sx={{ mb: 1 }}
				placeholder="What needs to be done?"
				name={name}
				onChange={field.onChange}
				value={field.value}
			/>
			<ErrorMessage
				data-testid={'errorMessage'}
				name="todo"
				component={'div'}
			/>
		</Box>
	);
};

export default Input;
