import MyOrders from "../pages/DashBoard/MyOrders";
import AddAReview from "../pages/DashBoard/AddAReview";

export const DashboardRoutes = [
    { path: '/addareview', name: 'AddAReview', Component: AddAReview },
    { path: '/myorder', name: 'MyOrder', Component: MyOrders }
]