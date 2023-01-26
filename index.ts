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

interface Device {
  deviceName: string;
  id: string;
  gatewayId: string;
  deviceId: string;
  deviceKey: string;
  isOnline: boolean;
}

type NewDevice = Omit<Device, 'id' | 'isOnline'>;

interface DeviceRef {
  id: Device['id'];
  nameAlias: string;
}

interface User {
  id: string;
  chatId: number;
  devices: {
    [deviceId: string]: DeviceRef;
  }
}

type NewUser = Omit<User, 'id'>;

enum SocketDP {
  turnOn = 1,
  countdown = 9,
  current = 18,
  power = 19,
  voltage = 20
}

