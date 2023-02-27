import React from 'react';
import logo from './logo.svg';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Dashboard from './components/dashboard';
import SideNav from './components/sidenav';
import Header from './components/header';
import Footer from './components/footer';
import Transactions from './components/transactions';
import Statements from './components/statements';
import UserList from './components/useList';
import Config from './components/config';
import Referal from './components/referal';
import ReferalTransaction from './components/referalTransaction';
import BBPS from './components/BBPS';
import BillPayment from './components/billPayment';

function App() {
  console.log(window.location.pathname);

  return (
    <div className="App">
      {window.location.pathname === "/" &&

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      }
      {window.location.pathname != "/" &&
        <div>
          <SideNav />

          <div id="right-panel" className="right-panel">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/statements" element={<Statements />} />
                <Route path="/billpayment" element={<BillPayment />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/config" element={<Config />} />
                <Route path="/referal" element={<Referal />} />
                <Route path="/referaltransaction" element={<ReferalTransaction />} />
                <Route path="/bbps" element={<BBPS />} />
              </Routes>
            </div>
            <div className="clearfix"></div>

          </div>
          <Footer />
        </div>
      }
    </div>

  );
}

export default App;
