export type AssetStatus = 'READY' | 'MAINTENANCE' | 'OFFLINE';

export interface Asset {
    id: number;
    name: string;
    type: string;
    status: AssetStatus;
}