import '@testing-library/jest-dom';
import App from '../App/App';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';

describe('Add form', () => {
	const user = userEvent.setup();

	beforeEach(() => {
		render(<App />);
	});

	it('should validate short value', async () => {
		await user.type(screen.getByTestId('input'), '12');
		await user.click(screen.getByTestId('btn'));

		expect(screen.getByTestId('errorMessage')).toBeInTheDocument();
		expect(screen.getByTestId('errorMessage')).toHaveTextContent(
			'Minimal length is 5 characters'
		);
	});
	it('should validate long value', async () => {
		await user.type(screen.getByTestId('input'), '{a>101}');
		await user.click(screen.getByTestId('btn'));

		expect(screen.getByTestId('errorMessage')).toBeInTheDocument();
		expect(screen.getByTestId('errorMessage')).toHaveTextContent(
			'Maximal length is 100 characters'
		);
	});
	it('should be required', async () => {
		await user.click(screen.getByTestId('btn'));

		await waitFor(() => {
			expect(screen.getByTestId('errorMessage')).toHaveTextContent(
				'Required'
			);
		});
	});
	it('should add todo', async () => {
		const todoList = screen.queryAllByTestId('todo');
		await user.type(screen.getByTestId('input'), 'New todo');
		await user.click(screen.getByTestId('btn'));

		expect(screen.getAllByTestId('todo').length).toBe(todoList.length + 1);
	});
});
