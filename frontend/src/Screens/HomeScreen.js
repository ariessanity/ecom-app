import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Product";
import { listProducts } from "../store/actions/productActions";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { useParams } from "react-router-dom";
import ProductCarousel from "../Components/ProductCarousel";

function HomeScreen() {
  const dispatch = useDispatch();
  const params = useParams();

  const keyword = params.keyword;

  const productList = useSelector((state) => state.productsReducer);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={3} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
