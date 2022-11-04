import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	private _mock: ITodo[] = [ {
		title: 'Holdlamis',
		discription: 'Cordylus giganteus',
		isCompleted: true,
		isArchived: false,
		endDate: '12/4/2021',
	},
	{
		title: 'Lotlux',
		discription: 'Pseudalopex gymnocercus',
		isCompleted: false,
		isArchived: false,
		endDate: '6/9/2022',
	},
	{
		title: 'Vagram',
		discription: 'Gymnorhina tibicen',
		isCompleted: true,
		isArchived: true,
		endDate: '5/10/2022',
	},
	{
		title: 'Veribet',
		discription: 'Coluber constrictor foxii',
		isCompleted: false,
		isArchived: false,
		endDate: '10/25/2022',
	},
	{
		title: 'Otcom',
		discription: 'Aegypius tracheliotus',
		isCompleted: true,
		isArchived: true,
		endDate: '4/5/2022',
	},
	{
		title: 'Y-find',
		discription: 'Cyrtodactylus louisiadensis',
		isCompleted: true,
		isArchived: false,
		endDate: '5/11/2022',
	}, ];

	private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this._mock)

	constructor() { }
	public getTodos(): Observable<Array<ITodo>>{
		return this._todoSubject.asObservable()
	}
}
