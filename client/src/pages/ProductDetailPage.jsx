import { Button, Col, Row, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const [currentData, setCurrentData] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => { 
        GetSingleData(productId)
    }, [productId])

    const GetSingleData = async (id) => {
        const response = await axios.get(`http://localhost:4001/products/${id}`)
        // console.log("API Response:", response.data.data);
        setCurrentData(response.data)
    }

    if(loading) {
        return <Spin />;
    }
    
    if(!currentData) {
        return <div>No data available.</div>;
    }
    

    return ( 
        <>
            <div>
                <h1>ProductDetailPage</h1>
                {currentData &&
                    currentData.map((item, index) => {
                        return (
                        <Col
                            xs={24}
                            sm={24}
                            md={6}
                            lg={6}
                            xl={6}
                            xxl={6}
                            key={index}
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
                                        <Button className="booknow-btn">Book Now!</Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    );
                })}
            </div>
        </>
    );
}

export default ProductDetailPage;