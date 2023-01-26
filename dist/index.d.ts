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
