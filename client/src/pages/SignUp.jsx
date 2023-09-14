import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Layout, Row, Spin, message } from "antd";
import axios from "axios";
import Header from "../components/Header";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post(
        "https://nord-strom-rack-mern.vercel.app/signup",
        formData
      );
      console.log("Sign-up successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Sign-up failed:", error.response.data);
    }
  };

  const onFinish = (e) => {
    handleSignUp(formData);
  };

  return (
    <>
      <Header />
      <Layout>
        <Row className="modal-mainDiv">
          <Col className="model-firstDiv"></Col>
          <Col
            className={`model-secDiv`} // ${loading ? "blur" : ""}
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
          >
            <h1>SignUp page</h1>
            <hr />
            <Form className="FormDiv" onFinish={onFinish}>
              <Form.Item name="userName">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  placeholder="Enter Your userName"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item name="email">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item name="password">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </Form.Item>
              
              <div className="btn-div">
                <Form.Item>
                  <Link to="/login" style={{ textAlign: "center" }}>
                    <Button type="primary">Click here to Login</Button>
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    SignUp
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Col>
        </Row>
      </Layout>
      {/* {loading && <Spin className="loader" size="large" />} */}
    </>
  );
};

export default SignUp;
