"use strict";
exports.__esModule = true;
exports.SocketDPEnum = exports.SocketDP = exports.User = exports.DeviceRef = exports.Device = exports.DeviceLog = exports.BodyNewGateway = exports.NewGateway = exports.Gateway = void 0;
var zod_1 = require("zod");
exports.Gateway = zod_1.z.object({
    id: zod_1.z.string().trim(),
    gatewayId: zod_1.z.string().trim(),
    url: zod_1.z.string().trim()
});
exports.NewGateway = exports.Gateway.omit({ id: true });
exports.BodyNewGateway = exports.NewGateway.omit({ url: true });
exports.DeviceLog = zod_1.z.object({
    timestamp: zod_1.z.number(),
    isOnline: zod_1.z.boolean()
});
exports.Device = zod_1.z.object({
    deviceName: zod_1.z.string().trim(),
    id: zod_1.z.string().trim(),
    gatewayId: zod_1.z.string().trim(),
    deviceId: zod_1.z.string().trim(),
    deviceKey: zod_1.z.string().trim(),
    isOnline: zod_1.z.boolean()
});
exports.DeviceRef = zod_1.z.object({
    id: exports.Device.shape.id,
    nameAlias: zod_1.z.string().trim()
});
exports.User = zod_1.z.object({
    id: zod_1.z.string().trim(),
    chatId: zod_1.z.number(),
    devices: zod_1.z.record(exports.DeviceRef)
});
var SocketDP;
(function (SocketDP) {
    SocketDP[SocketDP["turnOn"] = 1] = "turnOn";
    SocketDP[SocketDP["countdown"] = 9] = "countdown";
    SocketDP[SocketDP["current"] = 18] = "current";
    SocketDP[SocketDP["power"] = 19] = "power";
    SocketDP[SocketDP["voltage"] = 20] = "voltage";
})(SocketDP = exports.SocketDP || (exports.SocketDP = {}));
exports.SocketDPEnum = zod_1.z.nativeEnum(SocketDP);
