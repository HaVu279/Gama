import { DialogService } from './../../shared/services/dialog.service';
import { ProjectService } from './../../shared/services/project.service';
import { Project } from './../../shared/entity/project';
import { Component, OnInit } from '@angular/core';
import { DialogProjectComponent } from '../component/dialog/dialog-project/dialog-project.component';
import { DialogConfirmComponent } from '../component/dialog/dialog-confirm/dialog-confirm.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  gridList = true;
  projectList: Array<Project> = new Array<Project>();
  userId: Number;
  projectSelected: Project;
  listProjectOrigin: Array<Project>;

  constructor(private projectService: ProjectService, private dialogService: DialogService,
    private router: Router, private route: ActivatedRoute) { }

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
      this.listProjectOrigin = this.projectList;
    });
  }

  addProject() {
    this.dialogService.showDialog(DialogProjectComponent, { data: { title: 'Add Project', projectData: new Project() } },
      (result) => {
        if (result) {
          this.projectList.push(result);
        }
      });
  }

  editProject(project: Project) {
    this.dialogService.showDialog(DialogProjectComponent, { data: { title: 'Edit Project', projectData: project } },
      (result) => {
        if (result) {
          const index = this.projectList.findIndex(projectData => projectData.id === result.id);
          if (index !== -1) {
            this.projectList[index] = result;
          }
        }
      });
  }

  deleteProject(project: Project) {
    this.dialogService.showDialog(DialogConfirmComponent,
      { data: { text: `Do you want to delete project ${project.name}?`, button1: 'Save', button2: 'Cancel' } },
      (result) => {
        if (result) {
          this.projectService.deleteProject(project.id).subscribe((data) => {
            const index = this.projectList.findIndex(projectData => projectData.id === project.id);
            if (index !== -1) {
              this.projectList.splice(index, 1);
            }
          });
        }
      });
  }

  selectProject(project: Project) {
    this.projectSelected = project;
  }

  openGama(project: Project) {
    localStorage.setItem('projectId', `${project.id}`);
    this.router.navigate(['../gama-file'], { relativeTo: this.route });
  }

  onChange(event) {
    if (event.target.value === 'ASC') {
      this.projectList = this.projectList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.projectList = this.projectList.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  searchProject(event) {
    this.projectList = this.listProjectOrigin;
    if (event.value !== '') {
      this.projectList = this.projectList.filter(projectData => projectData.name.includes(event.value));
    }
  }

}

