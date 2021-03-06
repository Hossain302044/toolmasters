import Home from './../pages/Home';
import Blog from './../pages/Blog';
import Login from './../pages/Login';
import SignUp from '../pages/SignUp';
import Portfolio from '../pages/Portfolio';
import Products from '../pages/Products';

export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/home', name: 'Home', Component: Home },
    { path: '/blog', name: 'About', Component: Blog },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
    { path: '/products', name: 'Products', Component: Products },
    { path: '/signup', name: 'Signup', Component: SignUp },
]