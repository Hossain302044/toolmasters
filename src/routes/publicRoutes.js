import Home from './../pages/Home';
import Blog from './../pages/Blog';
import Login from './../pages/Login';

export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/blog', name: 'About', Component: Blog },
    { path: '/login', name: 'Login', Component: Login },
]