import { Button as ButtonMUI, useTheme } from '@mui/material';

import styles from './addForm.module.css';
import { Form, Formik, FormikHelpers } from 'formik';
import Input from '../UI/Input/Input';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
	addTodo,
	updateActiveTodosLeft,
} from '../../store/reducers/todosSlice';
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

interface AddFormValues {
	todo: string;
}

export const submitHandler =
	(dispatch: Dispatch<AnyAction>) =>
	(values: AddFormValues, formikHelpers: FormikHelpers<AddFormValues>) => {
		dispatch(addTodo(values.todo));
		dispatch(updateActiveTodosLeft());
		formikHelpers.resetForm();
	};

const AddForm = () => {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{ todo: '' }}
			// onSubmit={submitHandler(dispatch)}
			onSubmit={(values, formikHelpers) => {
				dispatch(addTodo(values.todo));
				dispatch(updateActiveTodosLeft());
				formikHelpers.resetForm();
			}}
			validationSchema={Yup.object({
				todo: Yup.string()
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
