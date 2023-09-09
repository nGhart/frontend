import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalTable from './pages/AnimalTable';
import Menu from './components/menu/Menu';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import './styles/global.scss';
// import {
//   createBrowserRouter,
//   Route,
//   RouterProvider,
//   Link,
//   Outlet,
//   BrowserRouter,
//   Routes,
// } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from 'react-router-dom';

import Home from './pages/home/Home';
import RequireAuth from './components/RequireAuth';
import SignupPage from './components/signup/SignupPage';
import LogoutPage from './pages/logout/LogoutPage';

const Layout = () => {
  return (
    <div className="mainSection">
      <Navigation />
      <div className="midSection">
        <div className="menuSection">
          <Menu />
        </div>
        <div className="contentSection">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="animals" element={<AnimalTable />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
