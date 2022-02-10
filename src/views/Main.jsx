import "../styles/views/Main.css";

import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [products, setProducts] = useState([]);
  const [productNames, setProductNames] = useState([]);
  const [productStates, setProductStates] = useState([]);
  const [productCities, setProductCities] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productBrands, setProductBrands] = useState([]);

  const [nameFilter, setNameFilter] = useState(null);
  const [stateFilter, setStateFilter] = useState(null);
  const [cityFilter, setCityFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://assessment-edvora.herokuapp.com/");
      const products = res.data;
      setProducts(products);
      setProductNames([...new Set(products.map((el) => el.product_name))]);
      setProductStates([...new Set(products.map((el) => el.address.state))]);
      setProductCities([...new Set(products.map((el) => el.address.city))]);
      setFilteredProducts(products);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(nameFilter);
    setFilteredProducts(
      products
        .filter((el) => {
          if (nameFilter === null) return true;
          return el.product_name === nameFilter;
        })
        .filter((el) => {
          if (stateFilter === null) return true;
          return el.address.state === stateFilter;
        })
        .filter((el) => {
          if (cityFilter === null) return true;
          return el.address.city === cityFilter;
        })
    );
  }, [products, nameFilter, stateFilter, cityFilter]);

  useEffect(() => {
    setProductBrands([...new Set(filteredProducts.map((el) => el.brand_name))]);
  }, [filteredProducts]);

  return (
    <div id="Main" className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mx-auto my-4">
            <Filters
              names={productNames}
              states={productStates}
              cities={productCities}
              setNameFilter={setNameFilter}
              setStateFilter={setStateFilter}
              setCityFilter={setCityFilter}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <h1 className="text-light">Edvora</h1>
            <h2 className="text-white-50">Products</h2>
            {productBrands.map((brand) => {
              return (
                <div className="mt-4">
                  <ProductsList
                    title={brand}
                    products={filteredProducts.filter(
                      (el) => el.brand_name === brand
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
