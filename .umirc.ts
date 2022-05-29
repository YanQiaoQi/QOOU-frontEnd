import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/new', component: '@/pages/new/index.js' },
    { path: '/new/clone', component: '@/pages/clone/index.js' },
    { path: '/', component: '@/pages/index/index.js' },
    {
      path: '/:username',
      component: '@/pages/dashboard/index.js',
      exact: true,
    },
    {
      path: '/:username/:projectName',
      component: '@/pages/project/index.js',
      exact: true,
    },
    {
      path: '/dashboard',
      component: '@/pages/dashboard/index.js',
      exact: true,
    },
  ],
  fastRefresh: {},
});
