import { VendeRequest } from '../axios'
// import { baseConfig } from '@/config/export-base'
import { baseConfig } from '@/config/index'
import { useError } from '@/global/error'

const { errorCatch } = useError()
const articlesRequest = new VendeRequest({
  config: {
    baseURL: baseConfig.base_url,
    timeout: 5000
  },
  interceptors: {
    request_interceptor: (config) => {
      if (config.params) {
        config.params.app_id = baseConfig.app_id
      } else {
        config.params = { app_id: baseConfig.app_id }
      }
      return config
    },
    request_interceptor_catch: (err) => err,
    response_interceptor: (res) => {
      const { status } = res
      if (status < 200 || status >= 300) {
        errorCatch({
          type: 'data',
          _error: 'Network Error!'
        })
      } else {
        if (res.data.error) {
          errorCatch({
            type: 'data',
            _error: res.data.error
          })
        }
      }
      return res.data
    },
    response_interceptor_catch: (err) => err
  }
})

export { articlesRequest }
