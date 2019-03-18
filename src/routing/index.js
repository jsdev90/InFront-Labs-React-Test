import Home from '../container/home'
import Login from '../container/login'
import Dashboard from '../container/dashboard'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: false,
    component: Login
  },
  {
    path: '/dashboard',
    exact: false,
    component: Dashboard
  }
]
