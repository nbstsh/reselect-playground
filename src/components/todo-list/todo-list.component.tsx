import React from 'react';
import Todo from '../todo/todo.component';
import { IToDo } from '../../redux/todo/todo.types';

interface ITodoList {
	todos: IToDo[];
	onTodoClick: (index: number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map((todo, index) => (
			<Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
		))}
	</ul>
);

export default TodoList;
