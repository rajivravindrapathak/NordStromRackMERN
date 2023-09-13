import React from "react";
import Mainmenu from "./Mainmenu";
import { Col, Row, Select } from "antd";
const { Option } = Select;

const Header = () => {  
  return (
    <>
      <div>  
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "blueviolet",
          }}
        >
          <h3 style={{ color: "white", justifyContent: "center" }}>
            GET YOUR GIFTS IN TIME FOR CHRISTMAS
            <span>Order by 5PM PT on 12/18 for expedited shipping.</span>
            <span>The Holiday Gift Shop</span>
          </h3>
        </div>

        <Row>
          <Col xs={4} sm={24} md={12} lg={4} xl={2}>
            <img
              src="https://n.nordstrommedia.com/id/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
              alt="logo"
              style={{ height: "50px", width: "100%" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4} xl={10}>
            <input placeholder="Search for products or brand" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4} xl={6}>
            <Select style={{ width: 200 }} placeholder="Sign In">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={12} lg={4} xl={2}>
            Stores
          </Col>
          <Col xs={24} sm={24} md={12} lg={4} xl={2}>
            Purchases
          </Col>
          <Col xs={24} sm={24} md={12} lg={4} xl={2}>
            img
          </Col>
        </Row>
        <div>
          {/* <img
              src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
              alt="logo"
              style={{ height: "50px", width: "120px" }}
          /> */}
          {/* <input
            placeholder="Search for products or brand"
          /> */}
          {/* <p>NordStromeRack</p>
          <div>
            <p>search</p>
            <button>Sign In</button>
          </div> */}
        </div>
        <hr />
        <Mainmenu />
      </div>
    </>
  );
};

export default Header;
