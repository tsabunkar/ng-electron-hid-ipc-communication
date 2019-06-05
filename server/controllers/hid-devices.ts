const HID = require('node-hid');
import * as fs from 'fs';

export class HIDDevices {
  duplicatedevices = HID.devices();

  getAllDevices = () => {
    // !removing the duplicate elements
    const devices = this.duplicatedevices.filter(
      (device, index, self) =>
        index ===
        self.findIndex(
          t =>
            t.productId === device.productId && t.vendorId === device.vendorId,
        ),
    );
    return devices;
  }

  storeListOfDevicesInDesktop = (devices, app) => {
    const desktopPath = app.getPath('desktop');
    fs.writeFile(
      `${desktopPath}/myfile.txt`,
      JSON.stringify(devices, null, 2),
      'utf-8',
      console.log,
    );
  }
}
