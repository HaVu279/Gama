import { Component, HostListener, OnInit } from '@angular/core';
import { GamaFile } from 'src/app/shared/entity/gama-file';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GamaFileService } from 'src/app/shared/services/gama-file.service';

@Component({
  selector: 'app-gama-file',
  templateUrl: './gama-file.component.html',
  styleUrls: ['./gama-file.component.css']
})
export class GamaFileComponent implements OnInit {

  isShow: boolean;
  isOpenGraph: boolean;
  isOpenModel: boolean;
  listFiles: Array<GamaFile>;
  fileSelected: GamaFile;
  projectId: Number;
  s3: any;
  contentFile: string;
  constructor(private gameFileService: GamaFileService) {
    if(localStorage.getItem('projectId')) {
      this.projectId = +localStorage.getItem('projectId');
    }
  }

  ngOnInit(): void {
    this.isOpenGraph = true;
    this.listFiles = new Array<GamaFile>();
    this.getListFile();
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "29rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    showToolbar: false,
  };

  showControls() {
    this.isShow = !this.isShow;
  }

  openGraph() {
    this.isOpenGraph = true;
    this.isOpenModel = false;
  }

  openModel() {
    this.isOpenModel = true;
    this.isOpenGraph = false;
  }

  selectFile(file: GamaFile) {
    this.fileSelected = file;
    this.contentFile = file.content;
  }

  /**
   * import media
   */
  importMedia(event: any) {
    let element = document.getElementById("importedFile") as HTMLInputElement;
    element.click();
  }

  keyCodeMap = {
    17: false, // Ctrl
    18: false, // Alt
    83: false, // S
  };
  /**
     *
     * @param e
     */
  @HostListener("document:keydown", ["$event"])
  keyDown(e) {
    if (e.keyCode in this.keyCodeMap) {
      this.keyCodeMap[e.keyCode] = true;
      // save data
      if (this.keyCodeMap[17] && this.keyCodeMap[18] && this.keyCodeMap[83]) {
        this.saveData();
      }
    }
  }

  @HostListener("document:keyup", ["$event"])
  keyUp(e) {
    if (e.keyCode == 17) {
      this.keyCodeMap[17] = false;
    }
    if (e.keyCode == 18) {
      this.keyCodeMap[18] = false;
    }
    if (e.keyCode == 83) {
      this.keyCodeMap[83] = false;
    }
  }

  saveData() {
    this.fileSelected.content = this.contentFile;
    this.gameFileService.editGamaFile(this.fileSelected).subscribe(data => {
      let index = this.listFiles.findIndex(fileData => fileData.id == data.id);
      if(index != -1) {
        this.listFiles[index] = data;
        this.selectFile(this.listFiles[index]);
      }
    })
  }

  getListFile() {
    this.gameFileService.getGamaFilesByProjectId(this.projectId).subscribe(data => {
      this.listFiles = data;
    })
  }

  listParams: Array<Param>;
  /**
   * upload media files
   * @param event
   */
  async upload(event: any) {
    let selectedFiles: any[] = event.target.files;
    this.listParams = new Array<Param>();
    let $this = this;
    // upload file
    for (const file of selectedFiles) {
      var f = file;
      let item = new GamaFile();
      item.name = f.name;
      item.path = '..';
      var reader = new FileReader();
      reader.onload = processFile(f);
      reader.readAsText(f);
      function processFile(theFile) {
        return function (e) {
          var theBytes = e.target.result;
          item.content = theBytes;
          item.projectId = $this.projectId;
          $this.gameFileService.addGamaFile(item).subscribe(data => {
            $this.listFiles.push(data);
          });
          for (const line of theBytes.split(/[\r\n]+/)){
            if(!line.includes('parameter')) {
              continue;
            }
            let param = new Param(); 
            let indexStart = line.indexOf('"');
            let indexEnd = line.lastIndexOf('"');
            let indexMin = line.indexOf('min: ');
            let indexMax = line.indexOf('max: ');
            let end = line.indexOf(';');
            param.title = line.substring(indexStart + 1, indexEnd);
            param.type = 'INT';
            param.minValue = line.substring(indexMin + 5, indexMax - 1);
            param.maxValue = line.substring(indexMax + 5, end);

            $this.listParams.push(param);
          }
        }
      }
    }
  }

  ngOnDestroy(): void {
  }
}

export class Param {
  title: string;
  name: string;
  type: string;
  minValue: string;
  maxValue: string;
  defaultValue: string;
}
