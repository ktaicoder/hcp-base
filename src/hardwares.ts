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

const DEFAULT_SERIAL_OPTIONS: Omit<HardwareSerialOptions, 'baudRate'> = {
    dataBits: 8, // 7 or 8
    stopBits: 1, // 1 or 2
    parity: 'none', // 'none' | 'even' | 'odd'
    flowControl: 'none', // 'none' | 'hardware'
    bufferSize: 255,
}

export const hardwares: Hardware[] = [
    {
        hwId: 'wiseXboardPremium',
        kind: 'serial',
        hwName: 'KT AI Codiny IoT 키트',
        shortHwName: 'IoT 키트',
        packetLengthHint: 11,

        // baudRate 외에는 web serial 기본값이다
        serialOptions: {
            baudRate: 38400,
            ...DEFAULT_SERIAL_OPTIONS,
        },
        supportDesktop: true,
        supportChromeOS: true,
        supportIOS: true,
        supportAndroid: true,
        supportCodinypack: true,
    },
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
        supportDesktop: true,
        supportChromeOS: true,
        supportIOS: true,
        supportAndroid: true,
        supportCodinypack: true,
    },
    {
        hwId: 'ozo',
        kind: 'etc',
        hwName: '오조봇',
        shortHwName: '오조봇',
        packetLengthHint: undefined,
        supportDesktop: false,
        supportChromeOS: false,
        supportIOS: false,
        supportAndroid: false,
        supportCodinypack: true,
    },
    {
        hwId: 'exMarsCube',
        kind: 'serial',
        hwName: 'eX-Mars Cube',
        shortHwName: 'eX-Mars Cube',
        packetLengthHint: undefined,
        // baudRate 외에는 web serial 기본값이다
        serialOptions: {
            baudRate: 115200,
            ...DEFAULT_SERIAL_OPTIONS,
        },
        supportDesktop: true,
        supportChromeOS: false,
        supportIOS: false,
        supportAndroid: false,
        supportCodinypack: false,
    },

    {
        hwId: 'saeonAltinoLite',
        kind: 'serial',
        hwName: '새온 알티노라이트',
        shortHwName: '알티노라이트',
        packetLengthHint: undefined,
        // baudRate 외에는 web serial 기본값이다
        serialOptions: {
            baudRate: 115200,
            ...DEFAULT_SERIAL_OPTIONS,
        },
        supportDesktop: true,
        supportChromeOS: false,
        supportIOS: false,
        supportAndroid: false,
        supportCodinypack: false,
    },
]

export const hardwareMap: Record<string, Hardware> = hardwares.reduce((acc, cur) => {
    acc[cur.hwId] = cur
    return acc
}, {})

export interface IHwConnEnv {
    isChromeOS: boolean
    isCodingpack: boolean
    isMobile: boolean
    isAndroid: boolean
    isIOS: boolean
    isDesktop: boolean
    isWindows: boolean
    isMacOs: boolean
}

type HwFilterFn = (hw: Hardware) => boolean

/**
 * Env 필터 함수 생성
 * @param connEnv
 * @returns
 */
export function createHwEnvFilterFn(connEnv: IHwConnEnv): HwFilterFn {
    if (connEnv.isCodingpack) {
        return (hw) => hw.supportCodinypack
    }

    if (connEnv.isChromeOS) {
        return (hw) => hw.supportChromeOS
    }

    if (connEnv.isAndroid) {
        return (hw) => hw.supportAndroid
    }

    if (connEnv.isIOS) {
        return (hw) => hw.supportIOS
    }

    return (hw) => hw.supportDesktop
}

export function createHwFilterFn(connEnv: IHwConnEnv, serialPortOnly: boolean): HwFilterFn {
    const envFilterFn = createHwEnvFilterFn(connEnv)
    if (!serialPortOnly) return envFilterFn
    const serialPortFilterFn = (hw: Hardware) => !!hw.serialOptions
    return (hw: Hardware) => envFilterFn(hw) && serialPortFilterFn(hw)
}
