import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { todos } from './todo.data';
import { VisibilityFilter, IToDo } from './todo.types';
import actions from './todo.actions';

interface ITodoState {
	visibilityFilter: VisibilityFilter;
	todos: IToDo[];
}

const INITIAL_TODO_STATE: ITodoState = {
	visibilityFilter: VisibilityFilter.ShowAll,
	todos: []
};

const todoReducer = reducerWithInitialState(INITIAL_TODO_STATE)
	.case(actions.addTodo, (state, todo) => ({
		...state,
		todos: [...state.todos, todo]
	}))
	.case(actions.toggleTodo, (state, index) => ({
		...state,
		todos: state.todos.map((todo, i) => {
			if (i !== index) return todo;
			todo.completed = !todo.completed;
			return todo;
		})
	}))
	.case(actions.setVisibilityFilter, (state, visibilityFilter) => ({
		...state,
		visibilityFilter
	}));

export default todoReducer;
