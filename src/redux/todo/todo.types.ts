export interface IToDo {
	text: string;
	completed: boolean;
}

export enum VisibilityFilter {
	ShowAll = 'SHOW_ALL',
	ShowActive = 'SHOW_ACTIVE',
	ShowCompleted = 'SHOW_COMPLTED'
}
