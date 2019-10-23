import { connect } from 'react-redux';
import actions from '../../redux/todo/todo.actions';
import Link from '../../components/link/link.component';
import { IAppState } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { VisibilityFilter } from '../../redux/todo/todo.types';

interface IFilterLinkProps {
	filter: VisibilityFilter;
	children: React.ReactNode;
}

const mapStateToProps = (state: IAppState, ownProps: IFilterLinkProps) => {
	const todoState = state.todo;
	return {
		active: ownProps.filter === todoState.visibilityFilter
	};
};

const mapDispatchToProps = (
	dispatch: Dispatch<Action<any>>,
	ownProps: IFilterLinkProps
) => {
	return {
		onClick: () => {
			dispatch(actions.setVisibilityFilter(ownProps.filter));
		}
	};
};

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink;
