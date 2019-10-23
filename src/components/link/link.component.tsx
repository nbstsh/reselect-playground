import React from 'react';

export interface ILinkProps {
	active: boolean;
	onClick: () => void;
}

const Link: React.FC<ILinkProps> = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a
			href='#'
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

export default Link;
