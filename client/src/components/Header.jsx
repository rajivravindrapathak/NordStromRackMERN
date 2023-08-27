import React from "react";

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
          {/* <img
            src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
            alt="logo"
            style={{ height: "50px", width: "120px" }}
          /> */}
          {/* <h1 style={{ color: 'white' }}>welcome to notes app</h1> */}
          <h3 style={{ color: "white", justifyContent:"center" }}>
            GET YOUR GIFTS IN TIME FOR CHRISTMAS
            <span>Order by 5PM PT on 12/18 for expedited shipping.</span>
            <span>The Holiday Gift Shop</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
