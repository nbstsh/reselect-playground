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
