import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/Navbar';
import { publicRoutes } from './routes/publicRoutes';
import { protectedRoutes } from './routes/protectedRoutes';
import RequireAuth from './pages/RequireAuth';
import Footer from './shared/Footer';

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
          <Route element={<RequireAuth />}>
            {
              protectedRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))
            }
          </Route>
        </Routes>
      </Navbar>
      <Footer />

    </div>
  );
}

export default App;
