import React, { useEffect, useState } from "react";
import { Button, Carousel, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ProductBox from "../components/ProductBox";
import axios from 'axios'
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate()

  let carouselData = [
    {
      id: 1,
      // image: Slide1,  https://n.nordstrommedia.com/id/2e07a384-0fd9-45a6-a591-24b47125410a.jpeg?h=720&w=1608
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
    {
      id: 1,
      // image: Slide2,  https://n.nordstrommedia.com/it/624d946e-e03b-4645-b59f-89e676fb07cc.jpeg?h=720&w=1608
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
    {
      id: 1,
      // image: Slide3,  https://n.nordstrommedia.com/id/2c364f48-7730-4cf1-b44b-82e0e0b71943.jpeg?h=720&w=1608
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
  ];

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

  console.log("productData", productData)

  useEffect(() => {
    getProductData()
  })

  return (
    <>
      <Header />
      <Carousel data={carouselData} />

      <h1 style={{ textAlign: "center" }}>More to Rack, easier and faster.</h1>
      <Button style={{ alignItems: "center", marginLeft: "30%" }} className="signInButton" ><Link to="/signup">sign In or Create an Account</Link> </Button>

      <h3 className="heading">Perfect Presents for Women, Men & Kids</h3>
      <p className="heading1">Shop the finds on everyone's wishlists.</p>
      {/* <div className="para">
        <p>Gifts for Her</p>
        <p>Gifts for Him</p>
        <p>Gifts for Kids</p>
        <p>The Holiday Gift Shop</p>
      </div> */}
      {/* <h2>
        From Party Looks to Activewear to Gifts—Everything You Need for the
        Season!
      </h2> */}

      <h3 className="trending">Trending now</h3>
      <ProductBox data={productData} />
      <Footer />
    </>
  );
};

export default HomePage;
