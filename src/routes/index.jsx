import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page Journey
import Home from "../views/Home";
import Payment from "../views/Payment";

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagamento" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
