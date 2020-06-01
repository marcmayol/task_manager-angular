import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../services/task.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location]
})
export class HomeComponent implements OnInit {
  public tasks;
  public filterTasks=null;
  public toupdate = null;
  public error;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }
    //para que no se sobre carge cuando ejecutamos delete
    this.tasks = [];
    this.taskService.getAll().subscribe(
      response => {
        //lo convertimos en un array para poder tratarlo sin errores en la consola
        response.forEach((x) => {
          this.tasks.push(x);

        });
        console.log(this.tasks);
      },
      error => {
        console.log(<any>error);
      }
    );
    if (this.route.snapshot.paramMap.get("id")) {
      let id= this.route.snapshot.paramMap.get("id");
      let results = this.tasks.filter(function (task) {
        return task._id == id;
      });
      let firstObj = (results.length > 0) ? results[0] : null;
      if (!firstObj) {
        this.router.navigate(['404']);
      }else{
        this.toupdate=firstObj;
      }
    }
  }

  delete(id) {
    this.taskService.delete(id).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  update(obj: object) {
    // @ts-ignore
    this.location.replaceState("update/" + obj._id);
    this.toupdate = obj;

  }

  updateClomplete($event) {
    if ($event.done) {
      this.location.replaceState("");
      this.toupdate = null;
      this.ngOnInit();
    }
  }

  completeTask(id) {
    this.taskService.completeTask(id).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.log(<any>error);
        this.error = true;
      }
    );
  }

  filterCompletedTasks(){
     this.filterTasks= this.tasks.filter(function (task) {
      return task.completed == true;
    });
  }
  filterPendingTasks(){
     this.filterTasks= this.tasks.filter(function (task) {
      return task.completed != true;
    });
  }
  clear(){
    this.filterTasks=null;
  }
}
