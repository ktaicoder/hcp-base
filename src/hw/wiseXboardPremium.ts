import { DEFAULT_SERIAL_OPTIONS } from './defaultSerialOptions'
import { Hardware } from './types'

export const wiseXboardPremium: Hardware = {
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
}
