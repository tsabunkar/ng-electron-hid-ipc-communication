import { Component, ViewChild, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputId', { static: false }) inputId;
  desktopPath;

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');

    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer ', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  ngOnInit() {
    this.desktopPath = this.electronService.remote.app.getPath('desktop');
  }
  submit() {
    console.log(this.inputId.nativeElement.value);
    this.writeToMyFile(this.inputId.nativeElement.value);
  }
  writeToMyFile(text) {
    // const remote = this.electronService.remote;
    // const fs = remote.require('fs');
    this.electronService.fs.writeFile(
      `${this.desktopPath}/myfile.txt`,
      text,
      console.log,
    );
  }
}
