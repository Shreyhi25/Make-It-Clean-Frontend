import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import About from "./About";
import Donation from "./Donation";
import LoginSignIn from "./LoginSignIn";
import Forget from "./Forget.jsx";
import AdminPage from "./AdminPage.jsx";
import Default from "./Default.jsx";
import Contact from "./ContactUs.jsx";
import UpdateForm from "./UpdateForm.jsx";
import TestDashboard from "./Test/TestDashboard.jsx";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/donation" element={<Donation/>}></Route>
        <Route path="/registation" element={<LoginSignIn/>}></Route>
        <Route path="/login" element={<LoginSignIn/>}></Route>
        <Route path="/AdminPage" element={<AdminPage/>}></Route>
        <Route path="/Forget" element={<Forget/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/UpdateForm" element={<UpdateForm/>}></Route>
        <Route path="*" element={<TestDashboard/>}></Route>
      </Routes>
   </BrowserRouter>
  
  );
}

export default App;
