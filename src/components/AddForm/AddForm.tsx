import { Button as ButtonMUI, useTheme } from '@mui/material';

import styles from './addForm.module.css';
import { Form, Formik } from 'formik';
import Input from '../UI/Input/Input';
import * as Yup from 'yup';

const AddForm = () => {
	return (
		// <Box className={}>
		// 	<TextField
		// 		id="standard-basic"
		// 		label="Standard"
		// 		variant="standard"
		// 	/>
		// </Box>
		<Formik
			initialValues={{ todo: '' }}
			onSubmit={(values) => console.log(values)}
			validationSchema={Yup.object({
				todo: Yup.string()
					.min(5, 'Minimal length is 5 characters')
					.max(100, 'Maximal length is 100 characters'),
			})}
		>
			<Form className={styles.addForm}>
				<Input name="todo" />
				<ButtonMUI
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
