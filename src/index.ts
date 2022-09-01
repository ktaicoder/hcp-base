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
    observeData(): Observable<Uint8Array>

    // 연결이 되었을 때 자동으로 호출되는 함수
    onBeforeClose(ctx: any): Promise<void>

    // 연결 끊어졌을 때 자동으로 호출되는 함수
    onAfterOpen(ctx: any): Promise<void>
}

export interface IHw {
    hwId: string
    hwKind: 'serial'
    // openDevice: (opts: any) => Promise<IDevice>
    createControl: (ctx: any) => IHwControl
}

export interface IHwEmul {
    runCmd: (emulCtx: any, hwId: string, cmd: string, ...args: unknown[]) => Promise<any>

    onEmulStart: () => Promise<void>

    onEmulStop: () => Promise<void>
}

/*~ https://wicg.github.io/serial/#dom-serialoptions */
export type HardwareSerialOptions = {
    baudRate: number
    dataBits?: number // 7 or 8
    stopBits?: number // 1 or 2
    parity?: 'none' | 'even' | 'odd'
    bufferSize?: number // default 255
    flowControl?: 'none' | 'hardware'
}

export type Hardware = {
    hwId: string
    kind: 'serial'
    hwName: string
    shortHwName: string
    packetLengthHint?: number
    serialOptions?: HardwareSerialOptions
}
