import { combineReducers } from 'redux';
import todoReducer, { ITodoState } from './todo/todo.reducer';

export interface IAppState {
	todo: ITodoState;
}

const rootReducer = combineReducers<IAppState>({
	todo: todoReducer
});

export default rootReducer;
