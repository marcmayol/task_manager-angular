import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'task-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public updateTask: FormGroup;
  public error = false;
  @Input() public task;
  @Output() emiter = new EventEmitter();
  completeTypes = [
    {value: 'Complete', code: 'true'},
    {value: 'In Progress', code: 'false'}
  ];
  completeType: { type: string, };

  constructor(
    private taskService: TaskService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.updateTask = new FormGroup({
      description: new FormControl(this.task.description, [
        Validators.required,
        Validators.minLength(3)
      ]),
      complete: new FormControl(this.task.complete, [
        Validators.required
      ])
    });
    if (this.task.complete) {
      this.completeType = {type: "true"};
    } else {
      this.completeType = {type: "false"};
    }
  }

  get description() {
    return this.updateTask.get('description');
  }

  get complete() {
    return this.updateTask.get('complete');
  }

  onSubmit() {
    this.taskService.update(this.task._id, this.description.value, this.complete.value).subscribe(
      response => {
        console.log(response);
        this.emiter.emit({done:true});
        },
      error => {
        console.log(<any>error);
        this.error = true;
      }
    );

  }


}
