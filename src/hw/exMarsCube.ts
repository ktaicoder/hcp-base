import { DEFAULT_SERIAL_OPTIONS } from './defaultSerialOptions'
import { Hardware } from './types'

export const exMarsCube: Hardware = {
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
    supportChromeOS: true,
    supportIOS: false,
    supportAndroid: false,
    supportCodinypack: false,
}
