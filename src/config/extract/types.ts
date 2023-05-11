export interface IBaseConfig {
  app_id: string //
  base_url: string //
  web_title: 'Good Life Magazine' //
  name: string // x
}

export interface IAdsense {
  fillTaboola: 'fill' | 'unfill'
  fillGoogle: 'fill' | 'unfill'
  gajs: boolean //原（any）类型
}

export interface ITaboolaConfig {
  channel: string //
  placement: string //
  api_key: string //
  source_id: string //
  view_id: string //
}

export interface IGoogleConfig {
  ca_pub: string //
  list: string //
  detail: string //
  middle: string //
}

interface IGtagId {
  id: string //
}

interface IProperty {
  property: IGtagId //
}

export interface IGtagConfig {
  event_name: string //
  gtag_config: IProperty //
}
