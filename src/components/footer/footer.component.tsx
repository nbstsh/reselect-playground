import React from 'react';
import FilterLink from '../../containers/filter-link/filter-link.container';
import { VisibilityFilter } from '../../redux/todo/todo.types';

const Footer: React.FC = () => (
	<p>
		Show: <FilterLink filter={VisibilityFilter.ShowAll}>All</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilter.ShowActive}>Active</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilter.ShowCompleted}>Completed</FilterLink>
	</p>
);

export default Footer;
