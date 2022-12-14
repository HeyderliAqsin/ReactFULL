import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./productList.scss";

const ProductList = ({ loading, data }) => {
  console.log(data);
  return (
    <>
      <section className="product-list">
        {/* {data.length===0 && <p className="alert alert-warning">Mehsul tapilmadı</p>} */}
        {loading ? (
          <div className="container">
            <div className="row">
              {data &&
                data.map((pro) => (
                  <div className="col-lg-3" key={pro.id}>
                    <div className="product-item">
                      <img
                        style={{ height: "250px", objectFit: "contain" }}
                        className="img-fluid"
                        alt=""
                        src={pro.photoUrl}
                      />
                      <Link key={pro.id} to={`/products/${pro.id}`}>
                        <h4 className="my-3">{pro.name}</h4>
                      </Link>
                      <h6 className="my-3">{pro.categoryName}</h6>
                      <p className="price">{pro.price} Azn</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductList;



