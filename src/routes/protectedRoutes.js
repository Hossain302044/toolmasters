import AddAReview from "../pages/DashBoard/AddAReview";
import Dashboard from "../pages/DashBoard/Dashboard";
import MyOrders from "../pages/DashBoard/MyOrders";
import MyProfile from "../pages/DashBoard/MyProfile";


export const protectedRoutes = [
    { path: '/dashboard', name: 'Dashboard', Component: Dashboard },
    { path: '/addareview', name: 'AddAReview', Component: AddAReview },
    { path: '/myorder', name: 'MyOrder', Component: MyOrders },
    { path: '/myprofile', name: 'MyProfile', Component: MyProfile },
]