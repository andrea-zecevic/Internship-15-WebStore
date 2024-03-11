import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products"
    )
      .then((res) => res.json())
      .then((data) => {
        let filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (selectedCategory) {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === selectedCategory
          );
        }

        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="productsPageContainer">
      <label className="categoryLabel">Odaberi kategoriju:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="categoryFilter"
      >
        <option value="">All products</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="productsContainer">
        {products.map((product) => (
          <div
            key={product.id}
            className="productCard"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="productImage"
            />
            <h2 className="productTitle">{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
