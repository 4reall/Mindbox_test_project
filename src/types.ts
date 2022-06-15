import { EntityState } from '@reduxjs/toolkit';
import store from './store/store';

export enum Actions {
	DEC = 'DECREASE',
	INC = 'INCREASE',
}
export enum Filters {
	ALL = 'ALL',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED',
}

export interface ITodo {
	value: string;
	id: string;
	isCompleted: boolean;
}

export type Todos = ITodo[];

export interface ITodosState extends EntityState<ITodo> {
	activeTodosLeft: number;
	activeFilter: Filters;
}

export type RootState = ReturnType<typeof store.getState>;
