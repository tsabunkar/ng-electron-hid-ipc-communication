"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HID = require('node-hid');
var fs = require("fs");
var HIDDevices = /** @class */ (function () {
    function HIDDevices() {
        var _this = this;
        this.duplicatedevices = HID.devices();
        this.getAllDevices = function () {
            // !removing the duplicate elements
            var devices = _this.duplicatedevices.filter(function (device, index, self) {
                return index ===
                    self.findIndex(function (t) {
                        return t.productId === device.productId && t.vendorId === device.vendorId;
                    });
            });
            return devices;
        };
        this.storeListOfDevicesInDesktop = function (devices, app) {
            var desktopPath = app.getPath('desktop');
            fs.writeFile(desktopPath + "/myfile.txt", JSON.stringify(devices, null, 2), 'utf-8', console.log);
        };
    }
    return HIDDevices;
}());
exports.HIDDevices = HIDDevices;
//# sourceMappingURL=hid-devices.js.map