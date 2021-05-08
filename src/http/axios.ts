/*
 * @Author: wenzhenjin
 * @Date: 2021-04-23 15:16:08
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-25 16:06:48
 * @Description:
 */
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

class Axios {
    timeout: number

    constructor() {
        this.timeout = 7000
    }
    request(config: {}) {
        const instance = axios.create({
            ...config,
            timeout: this.timeout
        })
        this.interceptors(instance as AxiosInstance)
        return instance.request(config)
    }

    interceptors(instance: any) {
        instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // 请求之前的操作
            },
            (error: any) => {
                // 错误
            }
        )
        instance.interceptors.response.use(
            (response: AxiosResponse) => {
                // 响应成功
            },
            (error: any) => {
                // 响应拦截
            }
        )
    }

    get(url: string, config: {}) {
        return this.request({
            url,
            method: 'GET',
            ...config
        })
    }
    post(url: string, data: {}, config: {}) {
        return this.request({
            url,
            method: 'POST',
            data,
            ...config
        })
    }
}

export default new Axios()
