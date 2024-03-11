import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <img src={product.image} alt={product.title} className="image" />
      <div className="details">
        <h2 className="title">{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
      </div>
      {}
      <div className="recommendationsSection">
        <h3 className="recommendationHeading">You might like it</h3>
        <div className="recommendationList">
          {recommendedProducts.map((rp) => (
            <Link
              to={`/product/${rp.id}`}
              key={rp.id}
              className="recommendationCard"
            >
              <img
                src={rp.image}
                alt={rp.title}
                className="recommendationImage"
              />
              <div className="recommendationTitle">{rp.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
