import { createSelector } from 'reselect';

export interface IItem {
	name: string;
	value: number;
}

export interface IState {
	shop: {
		taxPercent: number;
		items: IItem[];
	};
}

export const shopItemsSelector = (state: IState) => state.shop.items;

export const taxPercentSelector = (state: IState) => state.shop.taxPercent;

export const subtotalSelector = createSelector(
	[shopItemsSelector],
	items => items.reduce((acc, item) => acc + item.value, 0)
);

export const taxSelector = createSelector(
	[subtotalSelector, taxPercentSelector],
	(subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

export const totalSelector = createSelector(
	[subtotalSelector, taxSelector],
	(subtotal, tax) => ({ total: subtotal + tax })
);
