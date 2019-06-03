const HID = require('node-hid');

export class HIDDevices {
  duplicatedevices = HID.devices();

  getAllDevices = () => {
    // !removing the duplicate elements
    const devices = this.duplicatedevices.filter(
      (device, index, self) =>
        index ===
        self.findIndex(
          t =>
            t.productId === device.productId && t.vendorId === device.vendorId
        )
    );
    return devices;
  }
}
