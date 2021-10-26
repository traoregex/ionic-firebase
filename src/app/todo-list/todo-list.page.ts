import { CrudService, ToDo } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  tasks: ToDo[];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getTasks();
  }

  async getTasks() {
    const result = await this.crudService.getTasks();
    if(!result.empty) {
      this.tasks = result.docs.map(task => ({
        id: task.id,
        ...task.data() as ToDo
      }));
    } else {
      this.tasks = [];
      console.log('Empty list');
    }
  }

  remove(id: string) {
    console.log(id);
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id).then(() => this.getTasks());
    }
  }

}
