import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <header>
        <h1>Web Shop</h1>
      </header>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} /> {}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
