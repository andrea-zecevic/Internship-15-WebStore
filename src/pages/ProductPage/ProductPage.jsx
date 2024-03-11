import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) =>
        setRecommendedProducts(
          data.filter((p) => p.id !== parseInt(productId)).slice(0, 4)
        )
      );
  }, [productId]);

  if (!product) return <div>Učitavanje...</div>;

  return (
    <div className="container">
      <img src={product.image} alt={product.title} className="image" />
      <div className="details">
        <h2 className="title">{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
