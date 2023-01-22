export = SocketGram;

export as namespace SocketGram;

declare namespace SocketGram {
  interface DeviceLog {
    timestamp: number;
    isOnline: boolean;
  }
  
  interface Device {
    deviceName: string;
    id: string;
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
  
}


