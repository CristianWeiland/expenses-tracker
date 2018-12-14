import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Tables from '@/components/Tables';
import UserForm from '@/components/UserForm';
import AddExpense from '@/components/AddExpense';
import Dashboards from '@/components/Dashboards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/user-form',
      name: 'user-form',
      component: UserForm,
    },
    {
      path: '/add-expense',
      name: 'add-expense',
      component: AddExpense,
    },
    {
      path: '/dashboards',
      name: 'dashboards',
      component: Dashboards,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
  ],
});
