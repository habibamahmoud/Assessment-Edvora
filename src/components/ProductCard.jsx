import "../styles/components/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card-container">
      <div className="container g-0">
        <div className="row g-0">
          <div className="col-6 g-0">
            <div className="card-img-container g-0">
              <img src={product.image} alt="" className="card-img" />
            </div>
          </div>
          <div className="col-6 g-0">
            <p>{product.product_name}</p>
            <p className="fw-light text-secondary">{product.brand_name}</p>
            <p>$ {product.price}</p>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-6">
            <p className="text-secondary">
              {product.address.city} - {product.address.state}
            </p>
          </div>
          <div className="col-6">
            <p className="text-secondary">
              Date: {new Date(product.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="row g-0">
          <p className="text-secondary">{product.discription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
