import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {

  todoForm = this.fb.group({
    title: [],
    description: []
  });

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.create(this.todoForm.value)
      .then((res) => {
        console.log(res);
        this.todoForm.reset();
        this.navCtrl.navigateRoot('todo-list');
      }).catch((err) => {
        console.log(err);
      });
    }
  }

}
