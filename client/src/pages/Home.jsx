import React, { useEffect } from "react";

const HomePage = () => {

  const getData = () => {
    
  }

  useEffect(()=> {
    getData()
  })


  return (
    <>
      <div className="Div2">
        <div>
            <img
                src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
                alt="logo"
                style={{ height: "50px", width: "120px" }}
            />
            <input
             placeholder="Search for"
            />
            <p>NordStromeRack</p>
        </div>
        <div>
          <p>search</p>
          <button>Sign In</button>
        </div>
      </div>
      <div>
        <button>Holiday Gifts</button>
        <button>Women</button>
        <button>Men</button>
        <button>Kids</button>
        <button>Shoes</button>
        <button>Bags & Accessories</button>
        <button>Home</button>
        <button>Beauty</button>
        <button>Clearance</button>
        <button>Flash Events</button>
      </div>
      <h2>Convenient. Easy. Rack your style.</h2>
      <button className="signInButton">sign In or Create an Account</button>
      <img src="https://n.nordstrommedia.com/id/24c67dfb-a06f-4834-ac51-aef707765a79.jpeg?h=200&w=1334" />
      <img
        src="https://n.nordstrommedia.com/id/0854bcbe-21c4-4453-9b35-8b068e6c9d97.jpeg?h=720&w=1608"
        alt=""
      />
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
      <div className="twoImage">
        <div>
          <img
            width="100%"
            src="https://n.nordstrommedia.com/id/84a823b3-f9da-42e5-bce8-3d4d7a12e570.jpeg?h=555&w=804"
            alt=""
          />
          <h3>Party Styles from $29.97</h3>
          <p className="twoImagepara">
            We've got outfits for all your holiday occasions from Elodie & more.
          </p>
          <div className="para">
            <p>Young Adult Dresses</p>
            <p>Cocktail & Party Dresses</p>
          </div>
        </div>
        <div>
          <img
            width="100%"
            src="https://n.nordstrommedia.com/id/4726d517-6d61-4ca6-8b2c-56c55c9462a2.jpeg?h=555&w=804"
            alt=""
          />
          <h3>Activewear, Sneakers, Wellness & More</h3>
          <p className="twoImagepara">For working out (or hanging out).</p>
          <div className="para">
            <p>Shop Now</p>
            <p>Going Out</p>
          </div>
        </div>
      </div>
      <h3 className="trending">Trending now</h3>
    </>
  );
};

export default HomePage;
