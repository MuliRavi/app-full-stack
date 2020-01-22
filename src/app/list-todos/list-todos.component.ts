import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public targetDate:Date,
    public done:boolean){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }
  refreshTodos(){
    this.todoService.retriveAllTodos('ravi').subscribe(
      response=>{
        console.log(response)
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('ravi',id).subscribe(
      Response=>{
        console.log(Response)
        this.message=`Delete of todo ${id} SuccessFull!`
        this.refreshTodos()
      }
    )
  }
  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])

  }
  todos:Todo[]
  message:string
  //=[
    // new Todo(1,'Learn To Dance',new Date(),false),
    // new Todo(2,'Become an Expert in Angular',new Date(),false),
    // new Todo(3,'Visit Indiae',new Date(),false)

    // {id:1,description:'Learn To Dance'},
    // {id:2,description:'Become an Expert in Angular'},
    // {id:3,description:'Visit India'}
  //]
  // todo={id:1,description:'Learn to Dance'}

  
}
