import { Carousel } from "antd";
import { useEffect } from "react";
import { useState } from "react";

export default function CarouselComp(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  console.log(data);
  return (
    <Carousel autoplay effect="fade" className="home-carousel">
      {data &&
        data.map((item, index) => {
          return (
            <div className="home-carousel__item" key={index}>
              <div className="home-carousel__content">
                <h2>{item.title1}</h2>
                <h1>{item.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="down-arrow">
                  <div className="arrow-container">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
              <div className="home-carousel__image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          );
        })}
    </Carousel>
  );
}
