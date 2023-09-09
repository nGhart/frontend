import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalTable from './pages/AnimalTable';
import Menu from './components/menu/Menu';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import './styles/global.scss';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import Home from './pages/home/Home';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/animals',
        element: <AnimalTable />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
