import { ProjectService } from './../../../../shared/services/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from './../../../../shared/entity/project';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-project',
  templateUrl: './dialog-project.component.html',
  styleUrls: ['./dialog-project.component.css']
})
export class DialogProjectComponent implements OnInit {

  projectName = '';
  description = '';
  userId = 0;
  isErrorName = false;

  constructor(public dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private projectService: ProjectService) {
    if (localStorage.getItem('userId')) {
      this.userId = +localStorage.getItem('userId');
    }
    this.projectName = data.projectData ? data.projectData.name : '';
    this.description = data.projectData ? data.projectData.description : '';
  }

  ngOnInit() {
  }

  save() {
    this.isErrorName = !this.projectName || (this.projectName && this.projectName.trim() === '');
    if (this.isErrorName) {
      this.projectName = '';
      document.getElementById('name').focus();
      return;
    }
    const project = new Project();
    project.name = this.projectName;
    project.description = this.description;
    project.createAt = new Date().toString();
    project.userId = this.userId;
    this.projectService.addProject(project).subscribe(projectData => {
      this.dialogRef.close(projectData);
    });
  }

}
/**
 * Interface DialogData (title, project)
 */
export interface DialogData {
  title: string;
  projectData: Project;
}