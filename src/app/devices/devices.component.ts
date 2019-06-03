import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from '../providers/electron.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devicesList;

  constructor(
    private electronService: ElectronService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.electronService.ipcRenderer.on('deviceData', (event, devices) => {
      console.log(event);
      console.log(devices);
      this.devicesList = devices;
      this.changeDetectorRef.detectChanges();
    });
  }
}
