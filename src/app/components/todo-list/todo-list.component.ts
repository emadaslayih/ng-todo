import { TodoService } from './../../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ITodo} from 'src/app/models/todo.interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {

	public todos: Array<ITodo> = []

	private subscription: Subscription = new Subscription()
  constructor(private  todoService: TodoService) {}

	ngOnInit(): void {
		this.subscription.add(
			this.todoService.getTodos().subscribe(data => {
				this.todos = data
			})

		)
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe(

		)
	}
}

