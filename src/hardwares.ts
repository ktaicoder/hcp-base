/*~ https://wicg.github.io/serial/#dom-serialoptions */
export type HardwareSerialOptions = {
    baudRate: number
    dataBits?: number // 7 or 8 (default 8)
    stopBits?: number // 1 or 2 (default 1)
    parity?: 'none' | 'even' | 'odd' // default none
    bufferSize?: number // default 255
    flowControl?: 'none' | 'hardware' // default none
}

export type Hardware = {
    hwId: string
    kind: 'serial'
    hwName: string
    shortHwName: string
    packetLengthHint?: number
    serialOptions?: HardwareSerialOptions
}

const DEFAULT_SERIAL_OPTIONS: Omit<HardwareSerialOptions, 'baudRate'> = {
    dataBits: 8, // 7 or 8
    stopBits: 1, // 1 or 2
    parity: 'none', // 'none' | 'even' | 'odd'
    bufferSize: 255,
    flowControl: 'none', // 'none' | 'hardware'
}

export const hardwares: Hardware[] = [
    {
        hwId: 'wiseXboard',
        kind: 'serial',
        hwName: '와이즈 엑스보드',
        shortHwName: '엑스보드',
        packetLengthHint: 19,

        // baudRate 외에는 web serial 기본값이다
        serialOptions: {
            baudRate: 38400,
            ...DEFAULT_SERIAL_OPTIONS,
        },
    },
    {
        hwId: 'wiseXboardPremium',
        kind: 'serial',
        hwName: 'KT AI Codiny IoT 키트',
        shortHwName: 'IoT 키트',
        packetLengthHint: 20,

        // baudRate 외에는 web serial 기본값이다
        serialOptions: {
            baudRate: 38400,
            ...DEFAULT_SERIAL_OPTIONS,
        },
    },
]