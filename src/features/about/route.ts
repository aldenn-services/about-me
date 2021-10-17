import { lazy } from 'react';

const About = lazy(() => import('./index'));

export default [
  {
    name: 'About',
    path: '/about-me',
    exact: true,
    component: About,
  },
];
