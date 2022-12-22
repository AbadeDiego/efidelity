import CreateService from "../Pages/CreateService";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import LoginEnterprise from "../Pages/LoginEnterprise";
import Profile from "../Pages/Profile";
import Promotion from "../Pages/Promotion";
import Register from "../Pages/Register";
import Vendas from "../Pages/Vendas";

export const routes = [
    {
        path: '/',
        exact: true,
        isPrivate: true,
        component: Home
    }, 
    {
        path: '/login',
        exact: true,
        isPrivate: false,
        component: Login
    },
    {
        path: '/login-enterprise',
        exact: true,
        isPrivate: false,
        component: LoginEnterprise
    },
    {
        path: '/register',
        exact: true,
        isPrivate: false,
        component: Register
    },
    {
        path: '/profile',
        exact: true,
        isPrivate: true,
        component: Profile
    },
    {
        path: '/createService',
        exact: true,
        isPrivate: true,
        component: CreateService
    },
    {
        path: '/dashboard',
        exact: true,
        isPrivate: true,
        component: Dashboard
    },
    {
        path: '/vendas',
        exact: true,
        isPrivate: true,
        component: Vendas
    },
    {
        path: '/promotion',
        exact: true,
        isPrivate: true,
        component: Promotion
    },
]