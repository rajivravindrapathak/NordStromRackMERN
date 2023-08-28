import React, { useEffect } from "react";
import { Button, Carousel } from 'antd'

const HomePage = () => {

  const getData = () => {
    
  }

  useEffect(()=> {
    getData()
  })

  let carouselData = [
    {
      id: 1,
      // image: Slide1,
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
    {
      id: 1,
      // image: Slide2,
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
    {
      id: 1,
      // image: Slide3,
      title1: "Life without Limits",
      title: "with Limitless data",
      description: "Unlimited Downloading<br/> with High-speed Fiber Internet",
    },
    
  ]


  return (
    <>
     

      <Carousel data={carouselData} />
      <h2>More to Rack, easier and faster.</h2>
      <Button className="signInButton">sign In or Create an Account</Button>


      <h3 className="heading">Perfect Presents for Women, Men & Kids</h3>
      <p className="heading1">Shop the finds on everyone's wishlists.</p>
      <div className="para">
        <p>Gifts for Her</p>
        <p>Gifts for Him</p>
        <p>Gifts for Kids</p>
        <p>The Holiday Gift Shop</p>
      </div>
      <h2>
        From Party Looks to Activewear to Gifts—Everything You Need for the
        Season!
      </h2>
      
      <h3 className="trending">Trending now</h3>
    </>
  );
};

export default HomePage;
