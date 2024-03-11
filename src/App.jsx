import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <header>
        <h1>Web Shop</h1>
      </header>
      <div>
        <Navigation />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
