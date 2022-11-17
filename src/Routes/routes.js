import CreateService from "../Pages/CreateService";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";

export const routes = [
    {
        path: '/',
        exact: true,
        isPrivate: true,
        component: Home
    }, 
    {
        path: '/login',
        exact: false,
        isPrivate: false,
        component: Login
    },
    {
        path: '/register',
        exact: false,
        isPrivate: false,
        component: Register
    },
    {
        path: '/profile',
        exact: false,
        isPrivate: true,
        component: Profile
    },
    {
        path: '/createService',
        exact: false,
        isPrivate: true,
        component: CreateService
    },
]