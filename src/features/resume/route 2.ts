import { lazy } from 'react';

const Resume = lazy(() => import('./index'));

export default [
  {
    name: 'Resume',
    path: '/resume',
    exact: true,
    component: Resume,
  },
];
