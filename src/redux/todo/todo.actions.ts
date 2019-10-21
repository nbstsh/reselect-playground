import actionCreatorFactory from 'typescript-fsa';
import { IToDo, VisibilityFilter } from './todo.types';

const actionCreator = actionCreatorFactory();

export default {
	addTodo: actionCreator<IToDo>('ADD_TODO'),
	toggleTodo: actionCreator<number>('TOGGLE_TODO'),
	setVisibilityFilter: actionCreator<VisibilityFilter>('SET_VISIBILITY_FILTER'),
	showCompleted: actionCreator<void>('SHOW_COMPLETED'),
	showActive: actionCreator<void>('SHOW_ACTIVE'),
	showAll: actionCreator<void>('SHOW_ALL')
};
