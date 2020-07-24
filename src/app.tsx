/**
 * app.tsx 运行时配置
 * 覆写 render
 * 用于渲染之前做权限校验
 */
import React from 'react';
import { RequestConfig } from 'umi';

export function render(oldRender: () => void) {
    console.log(111) // 类似中间件请求加载所有前执行
    oldRender() // 继续往下走

    // fetch('/api/auth').then(auth => {
    //     if (auth) { oldRender() }
    //     else { history.push('/login'); }
    // }).catch(e => {
    //     console.log(e)
    // });
}

/**
 * 请求错误处理
 */
export const request: RequestConfig = {
    timeout: 1000,
    errorConfig: {},
    middlewares: [
        async function middlewareA(ctx, next) {
            console.log('A before 1', ctx);
            await next();
            console.log('A after 2');
        },
        async function middlewareB(ctx, next) {
            console.log('B before 3', ctx);
            await next();
            console.log('B after 4');
        }
    ],
    requestInterceptors: [

    ],
    responseInterceptors: [],
};