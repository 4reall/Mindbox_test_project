import { Button as ButtonMUI } from '@mui/material';
import { Form, Formik } from 'formik';
import Input from '../UI/Input/Input';

import { object, string } from 'yup';

import { useDispatch } from 'react-redux';
import {
	addTodo,
	updateActiveTodosLeft,
} from '../../store/reducers/todosSlice';

import { Actions } from '../../types';

import styles from './addForm.module.css';

const AddForm = () => {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{ todo: '' }}
			onSubmit={(values, formikHelpers) => {
				dispatch(addTodo(values.todo));
				dispatch(updateActiveTodosLeft(Actions.INC));
				formikHelpers.resetForm();
			}}
			validationSchema={object({
				todo: string()
					.required('Required')
					.transform((value) => value.replace(/\s/g, ''))
					.min(5, 'Minimal length is 5 characters')
					.max(100, 'Maximal length is 100 characters'),
			})}
		>
			<Form className={styles.addForm}>
				<Input name="todo" />
				<ButtonMUI
					data-testid={'btn'}
					sx={{ height: '2rem', width: 0.2 }}
					variant="contained"
					type="submit"
				>
					Add
				</ButtonMUI>
			</Form>
		</Formik>
	);
};

export default AddForm;
