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
import BreedingPage from './pages/breedingPage/BreedingPage';
import EmployeePage from './pages/employeePage/EmployeePage';
import FeedPage from './pages/feedPage/FeedPage';
import InventoryPage from './pages/inventoryPage/InventoryPage';
import ContactPage from './pages/contactPage/ContactPage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import DoePage from './pages/doePage/DoePage';
import BuckPage from './pages/buckPage/BuckPage';
import MatingPage from './pages/matingPage/MatingPage';

//check styles here, theres a position relative
const Layout = () => {
  return (
    <div className="mainSection">
      <Navigation />
      <div className="midSection">
        <div className="menuSection">
          <Menu />
        </div>
        <div className="contentSection" style={{ position: 'relative' }}>
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
        <Route path="employee" element={<EmployeePage />} />
        <Route path="breeding" element={<BreedingPage />}>
          <Route path="doe" element={<DoePage />} />
          <Route path="buck" element={<BuckPage />} />
          <Route path="mating" element={<MatingPage />} />
        </Route>
        <Route path="feed" element={<FeedPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="transaction" element={<TransactionPage />} />
        {/*<Route path="" element={<Home />} /> */}
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
