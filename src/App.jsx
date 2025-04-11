import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"; // ✅ ضيفيه
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
    <Header /> {/* ✅ الهيدر هنا فوق الراوتس */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
  
  );
};

export default App;
