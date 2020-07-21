import { defineConfig } from 'umi';

export default defineConfig({
  // ssr: {},  // 服务端渲染
  dva: {
    immer: true,
    hmr: false,
  },
  request: {
    dataField: 'data'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/test/:id', component: '@/pages/test', title: "测试页面", wrappers: [
            '@/auth/index',
          ]
        }
      ],
    },
  ],
});
