import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { VendeConfig } from './types'
import { useLoading } from '@/global/loading'

const { loadingToggle } = useLoading()

class VendeRequest {
  //axios实例
  instance: AxiosInstance
  /**
   * 构造器
   * @param vende Vend配置
   */
  constructor(vende: VendeConfig) {
    //创建axios对象
    this.instance = axios.create(vende.config)

    /**
     * 实例拦截器
     */
    this.instance.interceptors.request.use(
      vende.interceptors?.request_interceptor,
      vende.interceptors?.request_interceptor_catch
    )

    this.instance.interceptors.response.use(
      vende.interceptors?.response_interceptor,
      vende.interceptors?.response_interceptor_catch
    )

    /**
     * 全局拦截器
     */
    this.instance.interceptors.request.use(
      (config) => {
        loadingToggle(true)
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => res,
      (err) => err
    )
  }

  /**
   * 实例方法
   */
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => loadingToggle(false))
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export { VendeRequest }
