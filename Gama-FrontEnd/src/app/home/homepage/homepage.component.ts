import { DialogService } from './../../shared/services/dialog.service';
import { ProjectService } from './../../shared/services/project.service';
import { Project } from './../../shared/entity/project';
import { Component, OnInit } from '@angular/core';
import { DialogProjectComponent } from '../component/dialog/dialog-project/dialog-project.component';
import { DialogConfirmComponent } from '../component/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  gridList: boolean = true;
  projectList: Array<Project> = new Array<Project>();
  userId: Number;
  projectSelected: Project;

  constructor(private projectService: ProjectService, private dialogService: DialogService) { }

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.userId = +localStorage.getItem('userId');
    }
    this.getAllProject();
  }

  showList() {
    this.gridList = true;
  }

  showGrid() {
    this.gridList = false;
  }

  getAllProject() {
    this.projectService.getProjectsByUserId(this.userId).subscribe(project => {
      this.projectList = project;
    })
  }

  addProject() {
    this.dialogService.showDialog(DialogProjectComponent, { data: { project: new Project() } },
      (result) => {
        if (result) {

        }
      })
  }

  deleteProject(project: Project) {
    this.dialogService.showDialog(DialogConfirmComponent,
      { data: { text: `Do you want to delete ${project.name}`, button1: 'Save', button2: 'Cancel' } },
      (result) => {
        if (result) {
          this.projectService.deleteProject(project.id).subscribe(() => {
            // display toast
            alert("sssssssssssss")
          })
        }
      })
  }

  selectProject(project: Project) {
    this.projectSelected = project;
  }

  onChange(event) {
    if (event.target.value == "ASC") {
      this.projectList.sort();
    }
    else {
      this.projectList.reverse();
    }
  }
}

