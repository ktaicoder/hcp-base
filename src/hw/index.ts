import { exMarsCube } from './exMarsCube'
import { ozo } from './ozo'
import { saeonAltinoLite } from './saeonAltinoLite'
import { Hardware } from './types'
import { wiseXboard } from './wiseXboard'
import { wiseXboardPremium } from './wiseXboardPremium'

export const hardwares: Hardware[] = [
    wiseXboard, //
    wiseXboardPremium,
    ozo,
    exMarsCube,
    saeonAltinoLite,
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
