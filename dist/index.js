"use strict";
exports.__esModule = true;
exports.DeviceLog = exports.Gateway = void 0;
var zod_1 = require("zod");
exports.Gateway = zod_1.z.object({
    id: zod_1.z.string().trim(),
    gatewayId: zod_1.z.string().trim(),
    url: zod_1.z.string().trim()
});
exports.DeviceLog = zod_1.z.object({
    timestamp: zod_1.z.number(),
    isOnline: zod_1.z.boolean()
});
var SocketDP;
(function (SocketDP) {
    SocketDP[SocketDP["turnOn"] = 1] = "turnOn";
    SocketDP[SocketDP["countdown"] = 9] = "countdown";
    SocketDP[SocketDP["current"] = 18] = "current";
    SocketDP[SocketDP["power"] = 19] = "power";
    SocketDP[SocketDP["voltage"] = 20] = "voltage";
})(SocketDP || (SocketDP = {}));
