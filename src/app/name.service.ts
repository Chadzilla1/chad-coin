import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private dataSource = new BehaviorSubject<{}>('jeff');
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(name: string){
    this.dataSource.next(name);
  }
}
