import { DEFAULT_SERIAL_OPTIONS } from './defaultSerialOptions'
import { Hardware } from './types'

export const wiseXboard: Hardware = {
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

    /**
     * desktop 지원 여부
     */
    supportDesktop: true,

    /**
     * chromeOS 지원 여부
     */
    supportChromeOS: true,

    /**
     * iOS 지원 여부
     */
    supportIOS: true,

    /**
     * 안드로이드 지원 여부
     */
    supportAndroid: true,

    /**
     * 코딩팩 지원 여부
     */
    supportCodinypack: true,
}
