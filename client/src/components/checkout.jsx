import { Button, Form } from "antd";
import React from "react";

const CheckoutPage = () => {

    const submitBtn = () => {
      alert ("your order has been placed")
    }  

    return ( 
        <>
          <h2>Delivery  Address</h2>
          <form className='form'>
            <label>Address </label>
            <input className=''  placeholder='Fill address'/>  <br/>
            <label>District </label>
            <input className='' placeholder='district Name'/>   <br/>
            <label>Pincode</label>
            <input className='' placeholder='ie 277XXX'/>  <br/>
            <label>State.. </label>
            <input className='' placeholder='ie Gujrat'/>  <br/>
            <label>Mobile No</label>
            <input className='' placeholder='ie +91 XXXXXXXXX'/>  <br/>
          </form>

          <Form className="FormDiv">
            <Form.Item name="email">
              <label>
                Address
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Address"
              />
            </Form.Item>
            <Form.Item name="password">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item name="age">
              <input
                type="number"
                name="age"
                placeholder="Enter Your age"
              />
            </Form.Item>
            <div className="btn-div">
              <Form.Item>
                <Button htmlType="submit" type="primary" onClick={submitBtn} >
                  CheckoutPage
                </Button>
              </Form.Item>
            </div>
          </Form>

        </>
    );
}
 
export default CheckoutPage;