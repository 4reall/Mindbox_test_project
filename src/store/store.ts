import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/todosSlice';

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
