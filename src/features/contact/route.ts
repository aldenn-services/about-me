import { lazy } from 'react';

const Contact = lazy(() => import('./index'));

export default [
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];
