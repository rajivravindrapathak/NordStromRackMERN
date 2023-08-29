import React from "react";
import { Col, Layout, Row } from "antd";
import { MailFilled, ClockCircleOutlined } from "@ant-design/icons";
import {
    FacebookFilled,
    InstagramFilled,
    LinkedinFilled,
    TwitterSquareFilled,
    YoutubeFilled,
    WhatsAppOutlined,
  } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {

    const { Footer } = Layout

    return ( 
        <>
            <Footer className="footer">
                <Row className="footer-row">
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-col-tx">
                        <ul>
                        <li>
                            <Link to="/home-broadband">Home Broadband</Link>
                        </li>
                        <li>
                            <Link to="/tariff-plan">Tariff Plan</Link>
                        </li>
                        <li>
                            <Link to="/quick-payment">Quick Payment</Link>
                        </li>
                        <li>
                            <Link to="/internet-leased-line">Internet Leased Line</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact us</Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-col-tx">
                        <ul>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms-conditions">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/cancellation-refund-policy">
                            Cancellation Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/shipping-delivery-policy">
                            Shipping Delivery Policy
                            </Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Row className="footer-row-2">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <p className="footer-col-bx">Support, Service & Recharge</p>
                            <p className="footer-col-bx-2">Call: 90923 56789</p>
                            <p className="footer-col-bx-email">
                            <MailFilled /> : helpdesk@budanta.com
                            </p>
                            <p className="footer-col-bx-email">
                            <ClockCircleOutlined /> Timing: 24 x 7 <br />
                            Monday to Sunday
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <p
                            className="footer-col-bx text-primary
                            "
                            >
                            New Customer
                            </p>
                            <p className="footer-col-bx-2 text-primary">
                            Call: 95855 23456
                            </p>
                            <p className="footer-col-bx-email text-primary">
                            <MailFilled /> : contact@budanta.com
                            </p>
                            <p className="footer-col-bx-email text-primary">
                            <ClockCircleOutlined /> Timing: 24 x 7 <br />
                            Monday to Sunday
                            </p>
                        </Col>
                        </Row>
                        <Row className="footer-row-3">
                        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
                            <p className="footer-col-bx-2">
                            Follow us on : &nbsp;
                            <FacebookFilled
                                className="social-icon"
                                style={{ backgroundColor: "#3b5998", color: "#fff" }}
                                onClick={() => {
                                window.open(
                                    "https://www.facebook.com/budantaindia",
                                    "_blank"
                                );
                                }}
                            />
                            <InstagramFilled
                                className="social-icon"
                                style={{ backgroundColor: "#e1306c", color: "#fff" }}
                                onClick={() => {
                                window.open(
                                    "https://www.instagram.com/budantanetwork/",
                                    "_blank"
                                );
                                }}
                            />
                            <YoutubeFilled
                                className="social-icon"
                                style={{ backgroundColor: "#ff0000", color: "#fff" }}
                                onClick={() => {
                                window.open("https://www.youtube.com/", "_blank");
                                }}
                            />
                            <LinkedinFilled
                                className="social-icon"
                                style={{ backgroundColor: "#0077b5", color: "#fff" }}
                                onClick={() => {
                                window.open(
                                    "https://www.linkedin.com/company/budanta/",
                                    "_blank"
                                );
                                }}
                            />
                            <TwitterSquareFilled
                                className="social-icon"
                                style={{ backgroundColor: "#1da1f2", color: "#fff" }}
                                onClick={() => {
                                window.open("https://twitter.com/", "_blank");
                                }}
                            />
                            <WhatsAppOutlined
                                className="social-icon"
                                style={{ backgroundColor: "#25d366", color: "#fff" }}
                                onClick={() => {
                                window.open("https://wa.me/919585523456", "_blank");
                                }}
                            />
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            {/* <img
                                src={Play}
                                alt="playstore"
                                className="playstore"
                                style={{ cursor: "pointer", width: "60%" }}
                            /> */}
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Footer>
        </>
     );
}
 
export default Footer;