import { HardwareSerialOptions } from './types'

export const DEFAULT_SERIAL_OPTIONS: Omit<HardwareSerialOptions, 'baudRate'> = {
    dataBits: 8, // 7 or 8
    stopBits: 1, // 1 or 2
    parity: 'none', // 'none' | 'even' | 'odd'
    flowControl: 'none', // 'none' | 'hardware'
    bufferSize: 255,
}
