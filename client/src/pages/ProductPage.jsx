import { Button, Col, Row, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
    const [productData, setProductData] = useState([])
    const navigate = useNavigate()

    const getProductData = async () => {
        
        // debugger;
        try {
          const response = await axios.get("https://nord-strom-rack-mern.vercel.app/products" ) 
          console.log("API Response:", response.data.data);
          setProductData(response.data.data)
          if(response.data.success) {
              setProductData(response.data.data)
              console.log("responsedatadata", response.data)
          } else {
              message.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    return ( 
        <>
            <Header />
            <Row gutter={[16, 16]} className="ProductBox">
                {productData.length > 0 &&
                    productData.map((item, index) => {
                        return (
                        <Col
                            xs={24}
                            sm={24}
                            md={6}
                            lg={6}
                            xl={6}
                            xxl={6}
                            key={item.id}
                            className="ProductBox-container"
                        >
                            <Row className="ProductBox-content">
                                <Col span={24}>
                                    <img style={{ width: "100%"}} src={item.image_url} />
                                    <h2>
                                        {item.title}
                                    </h2>
                                    <p>{item.subtitle}</p>
                                </Col>
                                <Row className="ProductBox-content-info">
                                    <Col span={12}>
                                        <p className="ProductBox-content-info-text1"> {item.subtext}</p>
                                        <p className="ProductBox-content-bold">{item.subletter}</p>
                                        <br />
                                        <p className="ProductBox-content-info-text1">
                                        {item.price}
                                        </p>
                                        <p className="ProductBox-content-info-text1">
                                        {item.lprice}
                                        </p>
                                        <Button className="booknow-btn"><Link to={`/products/${item._id}`}> + Quick View!</Link></Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    );
                })}
            </Row>
            <Footer />
        </>
    );
}

export default ProductPage;