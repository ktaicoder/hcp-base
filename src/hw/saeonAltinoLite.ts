import { DEFAULT_SERIAL_OPTIONS } from './defaultSerialOptions'
import { Hardware } from './types'

export const saeonAltinoLite: Hardware = {
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
    supportChromeOS: true,
    supportIOS: false,
    supportAndroid: false,
    supportCodinypack: false,
}
