export default {
    // 支持值为 Object 和 Array
    'GET /api/users': { success: true, data: { msg: "数据管理", data: [{ id: 1 }, { id: 2 }, { id: 3 }] } },
    // GET 可忽略
    '/api/users/1': { id: 1 },
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req: any, res: { setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void; }) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    },
}