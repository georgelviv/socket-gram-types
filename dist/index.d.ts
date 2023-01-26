import { z } from 'zod';
export declare const Gateway: z.ZodObject<{
    id: z.ZodString;
    gatewayId: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    gatewayId: string;
    url: string;
}, {
    id: string;
    gatewayId: string;
    url: string;
}>;
export type Gateway = z.infer<typeof Gateway>;
export type NewGateway = Omit<Gateway, 'id'>;
export declare const DeviceLog: z.ZodObject<{
    timestamp: z.ZodNumber;
    isOnline: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    timestamp: number;
    isOnline: boolean;
}, {
    timestamp: number;
    isOnline: boolean;
}>;
export type DeviceLog = z.infer<typeof DeviceLog>;
export declare const Device: z.ZodObject<{
    deviceName: z.ZodString;
    id: z.ZodString;
    gatewayId: z.ZodString;
    deviceId: z.ZodString;
    deviceKey: z.ZodString;
    isOnline: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    gatewayId: string;
    isOnline: boolean;
    deviceName: string;
    deviceId: string;
    deviceKey: string;
}, {
    id: string;
    gatewayId: string;
    isOnline: boolean;
    deviceName: string;
    deviceId: string;
    deviceKey: string;
}>;
export type Device = z.infer<typeof Device>;
export type NewDevice = Omit<Device, 'id' | 'isOnline'>;
export declare const DeviceRef: z.ZodObject<{
    id: z.ZodString;
    nameAlias: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    nameAlias: string;
}, {
    id: string;
    nameAlias: string;
}>;
export type DeviceRef = z.infer<typeof DeviceRef>;
export declare const User: z.ZodObject<{
    id: z.ZodString;
    chatId: z.ZodNumber;
    devices: z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodString;
        nameAlias: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        nameAlias: string;
    }, {
        id: string;
        nameAlias: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    chatId: number;
    devices: Record<string, {
        id: string;
        nameAlias: string;
    }>;
}, {
    id: string;
    chatId: number;
    devices: Record<string, {
        id: string;
        nameAlias: string;
    }>;
}>;
export type User = z.infer<typeof User>;
export type NewUser = Omit<User, 'id'>;
export declare enum SocketDP {
    turnOn = 1,
    countdown = 9,
    current = 18,
    power = 19,
    voltage = 20
}
export declare const SocketDPEnum: z.ZodNativeEnum<typeof SocketDP>;
export type SocketDPEnum = z.infer<typeof SocketDPEnum>;
