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
                    <Col xs={24} sm={24} md={6} lg={4} xl={4} className="footer-col-tx">
                        <ul>
                            <li>
                                <h3>Customer Service</h3>
                            </li>
                            <li>
                                <Link to="/home-broadband">Order Status</Link>
                            </li>
                            <li>
                                <Link to="/tariff-plan">Guest Returns</Link>
                            </li>
                            <li>
                                <Link to="/quick-payment">Shipping & Return Policy</Link>
                            </li>
                            <li>
                                <Link to="/internet-leased-line">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Product Recalls</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} xl={4} className="footer-col-tx">
                        <ul>
                            <li>
                                <h3>About Us</h3>
                            </li>
                            <li>
                                <Link to="/about-our-brand">About Our Brand</Link>
                            </li>
                            <li>
                                <Link to="/the-nordy-club">The Nordy Club</Link>
                            </li>
                            <li>
                                <Link to="/store-locator"> Store Locator </Link> 
                            </li>
                            <li>
                                <Link to="/all-brands"> All Brands </Link> 
                            </li>
                            <li>
                                <Link to="/careers"> Careers </Link> 
                            </li>
                            <li>
                                <Link to="/nordstrom-blog"> Nordstrom Blog </Link> 
                            </li>
                            <li>
                                <Link to="/nordy-podcast"> Nordy Podcast </Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} xl={4} className="footer-col-tx">
                        <ul>
                            <li>
                                <h3>Nordstrom Rack & The Community</h3>
                            </li>
                            <li>
                                <Link to="/about-our-brand">About Our Brand</Link>
                            </li>
                            <li>
                                <Link to="/the-nordy-club">The Nordy Club</Link>
                            </li>
                            <li>
                                <Link to="/store-locator"> Store Locator </Link> 
                            </li>
                            <li>
                                <Link to="/all-brands"> All Brands </Link> 
                            </li>
                            <li>
                                <Link to="/careers"> Careers </Link> 
                            </li>
                            <li>
                                <Link to="/nordstrom-blog"> Nordstrom Blog </Link> 
                            </li>
                            <li>
                                <Link to="/nordy-podcast"> Nordy Podcast </Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} xl={4} className="footer-col-tx">
                        <ul>
                            <li>
                                <h3>Nordstrom Rack & The Community</h3>
                            </li>
                            <li>
                                <Link to="/about-our-brand">About Our Brand</Link>
                            </li>
                            <li>
                                <Link to="/the-nordy-club">The Nordy Club</Link>
                            </li>
                            <li>
                                <Link to="/store-locator"> Store Locator </Link> 
                            </li>
                            <li>
                                <Link to="/all-brands"> All Brands </Link> 
                            </li>
                            <li>
                                <Link to="/careers"> Careers </Link> 
                            </li>
                            <li>
                                <Link to="/nordstrom-blog"> Nordstrom Blog </Link> 
                            </li>
                            <li>
                                <Link to="/nordy-podcast"> Nordy Podcast </Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} xl={4} className="footer-col-tx">
                        <ul>
                            <li>
                                <h3>Nordstrom Rack & The Community</h3>
                            </li>
                            <li>
                                <Link to="/about-our-brand">About Our Brand</Link>
                            </li>
                            <li>
                                <Link to="/the-nordy-club">The Nordy Club</Link>
                            </li>
                            <li>
                                <Link to="/store-locator"> Store Locator </Link> 
                            </li>
                            <li>
                                <Link to="/all-brands"> All Brands </Link> 
                            </li>
                            <li>
                                <Link to="/careers"> Careers </Link> 
                            </li>
                            <li>
                                <Link to="/nordstrom-blog"> Nordstrom Blog </Link> 
                            </li>
                            <li>
                                <Link to="/nordy-podcast"> Nordy Podcast </Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                        <Row className="footer-row-2">
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <p className="footer-col-bx"></p>
                                <p className="footer-col-bx-2">Download our app</p>
                                {/* <p className="footer-col-bx-email">
                                <MailFilled /> : helpdesk@rajiv.com
                                </p>
                                <p className="footer-col-bx-email">
                                <ClockCircleOutlined /> Timing: 24 x 7 <br />
                                    Monday to Sunday
                                </p> */}
                            </Col>
                            {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <p
                                    className="footer-col-bx text-primary"
                                >
                                    New Customer
                                </p>
                                <p className="footer-col-bx-2 text-primary">
                                    Call: 63071 38273 
                                </p>
                                <p className="footer-col-bx-email text-primary">
                                <MailFilled /> : contact@rajiv.com
                                </p>
                                <p className="footer-col-bx-email text-primary">
                                <ClockCircleOutlined /> Timing: 24 x 7 <br />
                                    Monday to Sunday
                                </p>
                            </Col> */}
                        </Row>
                        <Row className="footer-row-3">
                            <Col xs={24} sm={24} md={17} lg={17} xl={17}>
                                <p className="footer-col-bx-2">
                                    {/* Follow us on : &nbsp; */}   
                                    <FacebookFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#3b5998", color: "#fff" }}
                                        onClick={() => {
                                            window.open(
                                                "https://www.facebook.com/",
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <InstagramFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#e1306c", color: "#fff" }}
                                        onClick={() => {
                                            window.open(
                                                "https://www.instagram.com/",
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
                                                "https://www.linkedin.com/company/",
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
                                            window.open("https://wa.me/916307138273", "_blank");
                                        }}
                                    />
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Footer>
        </>
     );
}
 
export default Footer;