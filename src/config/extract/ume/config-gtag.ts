import { IGtagConfig } from '../types'
import { gaID } from './config-gaId'

export const gatgConfig: IGtagConfig = {
  event_name: 'goodlifemag_ume',
  gtag_config: {
    property: { id: gaID['goodlifemag.co'] }
  }
}
