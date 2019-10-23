import React from 'react';
import './App.css';
import Basic from './components/basic/basic.component';
import TodoSample from './components/todo-sample/todo-sample.component';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Basic />
			<TodoSample />
		</div>
	);
};

export default App;
