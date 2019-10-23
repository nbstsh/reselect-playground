const createTodo = (text: string) => ({
	text,
	completed: false
});

const generateDummyTodos = () => {
	return [...new Array(10)].fill(null).map((_, i) => createTodo(`sample${i}`));
};

export const todos = generateDummyTodos();
