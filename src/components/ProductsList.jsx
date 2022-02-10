import ProductCard from "./ProductCard";
import "../styles/components/ProductsList.css";

function ProductsList({ title, products }) {
  function scrollRight(e) {
    const carouselEl = e.target.parentElement.parentElement.querySelector(
      ".product-cards-carousel"
    );
    carouselEl.scrollLeft += 100;
  }

  return (
    <div className="text-white">
      <h4>{title}</h4>
      <hr />
      <div className="container g-0">
        <div className="row">
          <div className="product-cards-carousel d-flex flex-row col-11">
            {products.map((product) => {
              return (
                <div>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
          <div className="col-1 my-auto" onClick={scrollRight}>
            <i className="bi bi-arrow-right fs-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
