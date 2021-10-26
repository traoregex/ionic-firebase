import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, addDoc, getDocs, getDoc, deleteDoc  } from '@angular/fire/firestore';


export class ToDo {
  id: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: Firestore
  ) { }

  create(todo: ToDo) {
    return addDoc(collection(this.firestore, 'tasks'), todo);
  }

  getTasks() {
    return getDocs(collection(this.firestore, 'tasks'));
  }

  getTask(id: string) {
    return getDoc(doc(this.firestore, 'tasks', id));
  }

  update(id: string, todo: ToDo) {
    return setDoc(doc(this.firestore, 'tasks', id), todo, {merge: true});
  }

  delete(id: string) {
    return deleteDoc(doc(this.firestore, 'tasks', id));
  }
}
