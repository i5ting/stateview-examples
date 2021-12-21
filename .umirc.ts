import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/', component: '../pages/index' },
        { path: '/1', component: '../pages/1' },
        { path: '/2', component: '../pages/2' },
        { path: '/3', component: '../pages/3' },
        { path: '/4', component: '../pages/4' },
        { path: '/5', component: '../pages/5' },
        { path: '/6', component: '../pages/6' },
        { path: '/7', component: '../pages/7' },
        { path: '/8', component: '../pages/8' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'stateview-examples',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
