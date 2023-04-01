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
    hwName: string
    shortHwName: string
    kind: 'serial' | 'etc'
    serialOptions?: HardwareSerialOptions
    packetLengthHint?: number
    supportDesktop: boolean
    supportChromeOS: boolean
    supportIOS: boolean
    supportAndroid: boolean
    supportCodinypack: boolean
}
