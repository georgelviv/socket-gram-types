import { z } from 'zod';

export const Gateway = z.object({
  id: z.string().trim(),
  gatewayId: z.string().trim(),
  url: z.string().trim()
});

export type Gateway = z.infer<typeof Gateway>;
export type NewGateway = Omit<Gateway, 'id'>;

export const DeviceLog = z.object({
  timestamp: z.number(),
  isOnline: z.boolean()
});

export type DeviceLog = z.infer<typeof DeviceLog>;

export const Device = z.object({
  deviceName: z.string().trim(),
  id: z.string().trim(),
  gatewayId: z.string().trim(),
  deviceId: z.string().trim(),
  deviceKey: z.string().trim(),
  isOnline: z.boolean()
});

export type Device = z.infer<typeof Device>;

export type NewDevice = Omit<Device, 'id' | 'isOnline'>;

export const DeviceRef = z.object({
  id: Device.shape.id,
  nameAlias: z.string().trim()
});

export type DeviceRef = z.infer<typeof DeviceRef>;

export const User = z.object({
  id: z.string().trim(),
  chatId: z.number(),
  devices: z.record(DeviceRef)
});

export type User = z.infer<typeof User>;

export type NewUser = Omit<User, 'id'>;

export enum SocketDP {
  turnOn = 1,
  countdown = 9,
  current = 18,
  power = 19,
  voltage = 20
}

export const SocketDPEnum = z.nativeEnum(SocketDP);
export type SocketDPEnum = z.infer<typeof SocketDPEnum>;

