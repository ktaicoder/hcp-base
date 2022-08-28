import { Observable } from 'rxjs'

export type HwDeviceState = 'opening' | 'opened' | 'closing' | 'closed'

export type BufferTimestamped = { timestamp: number; dataBuffer: Uint8Array }

export interface IDevice {
    isOpened: () => boolean
    waitUntilOpened: (timeoutMilli: number) => Promise<boolean>
    write: (buffer: Uint8Array) => Promise<void>
    observeReceivedData: () => Observable<BufferTimestamped>
    observeDeviceState: () => Observable<HwDeviceState>
    close: () => Promise<void>
}

export interface IHwControl {
    // 자동 호출 함수
    onAfterOpen(ctx: any): Promise<void>
    onBeforeClose(ctx: any): Promise<void>
}

export interface IHw {
    hwId: string
    hwKind: 'serial'
    // openDevice: (opts: any) => Promise<IDevice>
    createControl: () => IHwControl
}
