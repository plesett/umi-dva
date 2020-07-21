/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 *
 */

import { request, RequestConfig } from 'umi'
import { config } from '@/config'

const BASE = process.env.NODE_ENV === 'development' ? config.HOST_URL_SOURCE : config.HOST_URL

export const http = (url: string, param: RequestConfig): Promise<Object> => {
    return request(BASE + url, {
        method: "GET",
        headers: {
            Authorize: `Bearer ${localStorage.getItem('token')}`
        },
        ...param
    })
}

