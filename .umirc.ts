import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index.js' },
    { path: '/new', component: '@/pages/new/index.js' },
    { path: '/new/clone', component: '@/pages/clone/index.js' },
  ],
  fastRefresh: {},
});
