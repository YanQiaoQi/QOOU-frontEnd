import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index.js' },
    { path: '/newProject', component: '@/pages/newProject/index.js' },
  ],
  fastRefresh: {},
});
