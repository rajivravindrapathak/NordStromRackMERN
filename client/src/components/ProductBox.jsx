import { Button, Col, Row } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductBox(props) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  console.log("data:", data)

  return (
    <Row gutter={[16, 16]} className="ProductBox">
        {data &&
          data.map((item, index) => {
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
                    <Button className="booknow-btn"><Link to='/productpage'>Book Now!</Link></Button>
                  </Col>
                </Row>
              </Row>
              {/* <Row className="ProductBox-footer">
                <Col span={14} className="ProductBox-footer-price">
                  <sup
                    style={{
                      position: "relative",
                      top: "-3px",
                      color: "#FFF",
                      fontFamily: "Rupee Foradian",
                      fontSize: "1.50963rem",
                      fontWeight: "400",
                    }}
                  >
                    ₹
                  </sup>{" "}
                  <b className="bold">{item.price}</b> 
                  <sup>*</sup> 
                </Col>
                <Col span={10} className="ProductBox-footer-btn">
                  <Button className="booknow-btn">Book Now!</Button>
                </Col>
              </Row> */}
            </Col>
          );
        })}
    </Row>
  );
}