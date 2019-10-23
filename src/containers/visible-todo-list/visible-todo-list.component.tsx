import { connect } from 'react-redux';
import actions from '../../redux/todo/todo.actions';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { IAppState } from '../../redux/root-reducer';
import { createStructuredSelector } from 'reselect';
import { IToDo } from '../../redux/todo/todo.types';
import { selectVisibleTodos } from '../../redux/todo/todo.selectors';
import TodoList from '../../components/todo-list/todo-list.component';

interface IVisibleTodoListMappedState {
	todos: IToDo[];
}

const mapStateToProps = createStructuredSelector<
	IAppState,
	IVisibleTodoListMappedState
>({
	todos: selectVisibleTodos
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		onTodoClick: (index: number) => {
			dispatch(actions.toggleTodo(index));
		}
	};
};

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
