import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    navigate(`/products?search=${searchValue}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="search"
        type="text"
        placeholder="Search for products..."
        className="input"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default Navigation;
