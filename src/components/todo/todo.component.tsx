import React from 'react';
import styled from 'styled-components';

interface ITodo {
	onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	completed: boolean;
	text: string;
}

const StyledList = styled.li<Partial<ITodo>>`
	text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const Todo: React.FC<ITodo> = ({ onClick, completed, text }) => (
	<StyledList onClick={onClick} completed={completed}>
		{text}
	</StyledList>
);

export default Todo;
