import React from 'react';
import Todo from '../todo/todo.component';

interface ITodo {
	id: number;
	completed: boolean;
	text: string;
}

interface ITodoList {
	todos: ITodo[];
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
