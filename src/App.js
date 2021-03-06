import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/Navbar';
import { publicRoutes } from './routes/publicRoutes';
import Dashboard from './pages/DashBoard/Dashboard';
import RequireAuth from './pages/RequireAuth';
import MyProfile from './pages/DashBoard/MyProfile';
import MyOrders from './pages/DashBoard/MyOrders';
import AddAReview from './pages/DashBoard/AddAReview';
import ManageOrder from './pages/DashBoard/ManageOrder';
import ManageProduct from './pages/DashBoard/ManageProduct';
import Users from './pages/DashBoard/Users';
import AddProduct from './pages/DashBoard/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './pages/RequireAdmin';
import ProductsRow from './components/Shop/ProductsRow';
import Payment from './pages/DashBoard/Payment';
import Footer from './shared/Footer'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          {/* <Route element={<RequireAuth />}>
            {
              protectedRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component></Component>}>
                  <Route index element={<MyProfile />} />
                  {
                    DashboardRoutes.map(({ path, Component }, index) => (
                      <Route key={index} path={path} element={<Component />} />
                    ))
                  }
                </Route>
              ))
            }
          </Route> */}
          <Route path='/products/:id' element={<RequireAuth>
            <ProductsRow></ProductsRow>
          </RequireAuth>}></Route>
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>} />
            <Route path='addareview' element={<AddAReview></AddAReview>} />
            <Route path='payment/:id' element={<Payment></Payment>} />
            <Route path='myorders' element={<MyOrders></MyOrders>} />
            <Route path='manageorder' element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            } />
            <Route path='manageproduct' element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            } />
            <Route path='users' element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            } />
            <Route path='addproduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
