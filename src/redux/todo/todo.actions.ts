import actionCreatorFactory from 'typescript-fsa';
import { IToDo } from './todo.types';

const actionCreator = actionCreatorFactory();

export default {
	addTodo: actionCreator<IToDo>('ADD_TODO'),
	toggleTodo: actionCreator<number>('TOGGLE_TODO'),
	setVisibilityFilter: actionCreator<string>('SET_VISIBILITY_FILTER'),
	showCompleted: actionCreator<void>('SHOW_COMPLETED'),
	showActive: actionCreator<void>('SHOW_ACTIVE'),
	showAll: actionCreator<void>('SHOW_ALL')
};
