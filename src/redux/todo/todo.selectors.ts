import { createSelector } from 'reselect';
import { IAppState } from '../root-reducer';
import { VisibilityFilter } from './todo.types';

export const selectTodo = (state: IAppState) => state.todo;

export const selectTodos = createSelector(
	[selectTodo],
	state => state.todos
);

export const selectVisivilityFilter = createSelector(
	[selectTodo],
	state => state.visibilityFilter
);

export const selectVisibleTodos = createSelector(
	[selectVisivilityFilter, selectTodos],
	(visibilityFilter, todos) => {
		switch (visibilityFilter) {
			case VisibilityFilter.ShowAll:
				return todos;
			case VisibilityFilter.ShowCompleted:
				return todos.filter(t => t.completed);
			case VisibilityFilter.ShowActive:
				return todos.filter(t => !t.completed);
		}
	}
);
