import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {env} from "../../env";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks;

  constructor(private http: HttpClient,
              private router: Router,
  ) {

  }

  public getAll() {
    this.tasks = this.http.get<any>(env.basic_api + localStorage.getItem('user'),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).pipe(
      map(res => res)
    );
    return this.tasks;
  }

  public getTask($id) {
    if (!this.tasks) {
      this.getAll();
    }

  }

  public delete(id) {
    return this.http.delete(env.basic_api + id,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).pipe(
      map(res => res)
    );
  }

  public create(description, complete) {

    return this.http.post<any>(env.basic_api + localStorage.getItem('user'), {
        description: description,
        completed: complete
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).pipe(
      map(res => res)
    );
  }
  public update(id,description, complete){
    return this.http.patch<any>(env.basic_api +id, {
        description: description,
        completed: complete
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).pipe(
      map(res => res)
    );
  }
  completeTask(id){
    return this.http.patch<any>(env.basic_api +id, {
        completed:true
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).pipe(
      map(res => res)
    );
  }

}
