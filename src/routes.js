import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./containers/Profile'));
const ChangePass = React.lazy(() => import('./containers/Profile/ChangePassword'));
const MedicineForm = React.lazy(() => import('./containers/Medicine/MedicineForm'));
const MedicineList = React.lazy(() => import('./containers/Medicine/MedicineList'));
const MedicineDetails = React.lazy(() => import('./containers/Medicine/MedicineDetails'));
const CartList = React.lazy(()=> import('./containers/Medicine/CartList'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Prifile', component: Profile },
  { path: '/change-password', name: 'Change Password', component: ChangePass },

  //------------------------------ Manage Medicine --------------------------------
  { path: '/medicine', exact: true, name: "Medicine", component: MedicineList },
  { path: '/medicine/add', name: "Add", component: MedicineForm },
  { path: '/medicine/edit/:medicineId', name: "Edit", component: MedicineForm },
  { path: '/medicine/list', name: "List", component: MedicineList },
  { path: '/medicine/details/:medicineId', name: "Details", component: MedicineDetails },
  { path: '/medicine/cart', name: "Cart", component: CartList },
];

export default routes;
