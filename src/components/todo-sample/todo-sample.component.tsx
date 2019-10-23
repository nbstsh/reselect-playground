import React from 'react';
import styled from 'styled-components';

import VisibleTodoList from '../../containers/visible-todo-list/visible-todo-list.component';
import Footer from '../footer/footer.component';

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f4f4f4;
`;

export interface ITodoSampleProps {}

const TodoSample: React.SFC<ITodoSampleProps> = () => {
	return (
		<StyledWrapper>
			<VisibleTodoList />
			<Footer />
		</StyledWrapper>
	);
};

export default TodoSample;
