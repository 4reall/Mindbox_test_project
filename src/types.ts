export enum Filters {
	ALL = 'ALL',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED',
}

export interface ITodo {
	value: string;
	id: string;
	completed: boolean;
}

export interface IStore {
	activeTodosLeft: number;
	activeFilter: Filters;
	todos: ITodo[];
}
