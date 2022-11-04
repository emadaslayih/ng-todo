export interface ITodo {
	title: string;
	discription: string;
	isCompleted: boolean;
	isArchived: boolean;
	endDate:Date | number | string
}