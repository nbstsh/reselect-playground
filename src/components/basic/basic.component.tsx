import React from 'react';
import { Wrapper } from './basic.styles';
import {
	IState,
	IItem,
	shopItemsSelector,
	taxPercentSelector,
	subtotalSelector,
	taxSelector,
	totalSelector
} from './tax.selector';

const dummyItems: IItem[] = [
	{ name: 'apple', value: 1.2 },
	{ name: 'orange', value: 0.95 }
];

const state: IState = {
	shop: {
		taxPercent: 8,
		items: dummyItems
	}
};

const Basic = () => {
	const shopItems = shopItemsSelector(state);
	const taxPercent = taxPercentSelector(state);
	const subtotal = subtotalSelector(state);
	const tax = taxSelector(state);
	const { total } = totalSelector(state);

	return (
		<Wrapper>
			<h1>basic example</h1>
			<p>taxPercent: {taxPercent}</p>
			<ul>
				{shopItems.map(({ name, value }) => {
					return (
						<li>
							name: {name}, value: {value}
						</li>
					);
				})}
			</ul>
			<table>
				<tr>
					<td>subtotal</td>
					<td>{subtotal}</td>
				</tr>
				<tr>
					<td>tax</td>
					<td>{tax}</td>
				</tr>
				<tr>
					<td>total</td>
					<td>{total}</td>
				</tr>
			</table>
		</Wrapper>
	);
};

export default Basic;
