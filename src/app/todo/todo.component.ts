import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService:TodoDataService,
    private route:ActivatedRoute
  ) { }
  id:number
  todo:Todo

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.todo=new Todo(0,'',new Date(),false);
    this.todoService.retriveTodo('Ravi',this.id).subscribe(
      data=>this.todo=data
    )
  }
  saveTodo(){
    console.log("save the todo")
  }

}
