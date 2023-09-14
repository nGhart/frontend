import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalTable from './pages/AnimalTable';
import Menu from './components/menu/Menu';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import './styles/global.scss';
import axios from 'axios';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
import InvoicePage from './pages/invoicepage/InvoicePage';
import AddEmployee from './contents/employees/AddEmployee';
import EmployeeList from './contents/employees/EmployeeList';
import EditEmployee from './contents/employees/EditEmployee';
import HealthPage from './pages/health/HealthPage';
import DiseaseList from './contents/health/DiseaseList';

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

export const makeApiRequest = async (url, method, data = null) => {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
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
        <Route path="animals" element={<AnimalTable />}>
          <Route path="animals/:id" element={<AnimalTable />} />
        </Route>
        <Route path="employee" element={<EmployeePage />}>
          <Route index element={<EmployeeList />} />
          {/* <Route path="create-employee" element={<AddEmployee />} /> */}
          {/* <Route path="employee/:id" element={<EditEmployee />} /> */}
        </Route>

        <Route path="breeding" element={<BreedingPage />}>
          {/* Render a different component based on the route */}
          <Route index element={<DoePage />} />
          <Route path="doe" element={<DoePage />} />
          <Route path="buck" element={<BuckPage />} />
          <Route path="mating" element={<MatingPage />} />
        </Route>
        <Route path="health" element={<HealthPage />}>
          {/* Render a different component based on the route */}
          <Route index element={<DiseaseList />} />
          {/* <Route path="doe" element={<DoePage />} />
          <Route path="buck" element={<BuckPage />} />
          <Route path="mating" element={<MatingPage />} /> */}
        </Route>

        <Route path="feed" element={<FeedPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="invoice" element={<InvoicePage />} />
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
