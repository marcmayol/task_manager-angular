import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newTask: FormGroup;
  public error=false;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.newTask = new FormGroup({
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      complete: new FormControl("", [
        Validators.required
      ])
    });
  }

  get description() {
    return this.newTask.get('description');
  }

  get complete() {
    return this.newTask.get('complete');
  }

  onSubmit() {
    this.taskService.create(this.description.value,this.complete.value).subscribe(
      response => {
        this.router.navigate(['']);
      },
      error => {
        console.log(<any>error);
        this.error=true;
      }
    );
  }

}
