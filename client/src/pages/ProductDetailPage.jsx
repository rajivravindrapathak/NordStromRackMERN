import { Button, Col, Row, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // console.log("pid", id);

  console.log("id", id);

  const GetSingleData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      if (response) {
        if (response?.data?.product !== null) {
          let arr = [];
          arr.push(response.data?.product);
          setCurrentData(arr);
        } else {
          alert(response.data?.error);
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("currentdata", currentData);

  useEffect(() => {
    GetSingleData(id);
  }, [id]);

  const handleAddToBag = async () => {
    try {
     
        const response = await axios.post("https://nord-strom-rack-mern.vercel.app/addtobag"  );
        console.log("add to bag successful:", response.data);
        const { userId, token } = response.data;
  
        // Store the token in local storage (you can use session storage as well)
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);
  
        // navigate("/notes");
        // You can handle successful sign-up, show a success message, or redirect to another page.
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Row>
        {loading === true ? (
          <Spin />
        ) : (
          <>
            <h1>ProductDetailPage</h1>
            {currentData.map((item, index) => {
              return (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  xxl={24}
                  key={index}
                  className="ProductBox-container"
                >
                  <Row className="ProductBox-content">
                    <Col span={12}>
                      <img style={{ width: "50%" }} src={item.image_url} />
                    </Col>
                    <Col span={12}>
                      <p className="ProductBox-content-info-text1">
                        {" "}
                        {item.subtext}
                      </p>
                      <p className="ProductBox-content-bold">
                        {item.subletter}
                      </p>
                      <br />
                      <p className="ProductBox-content-info-text1">
                        {item.price}
                      </p>
                      <p className="ProductBox-content-info-text1">
                        {item.lprice}
                      </p>
                      <Button className="booknow-btn" onClick={handleAddToBag}>Add to bag!</Button>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </>
  );
};

export default ProductDetailPage;
