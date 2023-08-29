 import { Row, Col } from "antd";
import maskgroup from "../assets/Images/maskgroup.png";
import rajni from "../assets/Images/rajni.png";
import Groupcar from "../assets/Images/Groupcar.png";
import truebadge from "../assets/Images/truebadge.png";
import userouter from "../assets/Images/userouter.png";

export default function HomeBanner() {

    // https://n.nordstrommedia.com/id/ddf7eb5e-12e7-4d24-a0fe-446510ce5eb2.png?h=200&w=1608

  return (
    <div>
      <Row
        gutter={[0, 0]}
        className="banner-container"
        style={{ marginTop: "90px" }}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="banner-img-col">
          <img src={maskgroup} alt="" srcset="" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="banner-text-col"
        >
          <h2>Unlock Your Potential.</h2>
          <p className="banner-subtext">
            Get connected with Budanta Broadband & experience the power of the
            internet!
          </p>
          <p>
            We offers high speed Fiber internet connection for home, office &
            businesses in Chennai. Experience reliable internet services with
            free wi-Fi router. We provides internet services to keep you
            connected to the world.
          </p>
          <img
            src={userouter}
            style={{ width: "60%", padding: "10%" }}
            alt=""
            srcset=""
          />
        </Col>
      </Row>

      {/* second img */}
      <Row gutter={[0, 0]} className="banner-container2">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="banner-text-col2"
        >
          <h2>Unlimited video streaming & Movies with Budanta</h2>
          <p>
            Yes, you can watch unlimited video and Movies from YouTube, Netflix,
            Amazon Prime, Disney Hotstar Zee5, Voot, SunNXT, SonyLiv and more
            without ever worried about data limit.
          </p>
          <img src={truebadge} alt="" srcset="" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="banner-img-col2"
        >
          <img src={rajni} alt="" srcset="" />
        </Col>
      </Row>

      {/* third img */}
      <Row style={{ marginTop: "50px" }} gutter={[0, 0]}>
        <Col span={24}>
          <img src={Groupcar} className="groupcar-img" alt="" srcset="" />
        </Col>
      </Row>
    </div>
  );
}

 
 
 {/* <img src="https://n.nordstrommedia.com/id/24c67dfb-a06f-4834-ac51-aef707765a79.jpeg?h=200&w=1334" />
      <img
        src="https://n.nordstrommedia.com/id/0854bcbe-21c4-4453-9b35-8b068e6c9d97.jpeg?h=720&w=1608"
        alt=""
      /> */}


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