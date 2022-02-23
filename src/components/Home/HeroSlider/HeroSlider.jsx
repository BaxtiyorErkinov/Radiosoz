import React, { useState, useRef } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./Slider.scss";
const HeroSlider = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const sliderItems = [
    {
      id: 1,
      title: "DESIGN INSPIRATION",
      desc: "We create modern experiences fortomorrows brands.",
      img: "https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603__480.jpg",
    },
    {
      id: 2,
      title: "DESIGN INSPIRATION",
      desc: "We create modern experiences fortomorrows brands.",
      img: "https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278__340.jpg",
    },
    {
      id: 3,
      title: "DESIGN INSPIRATION",
      desc: "We create modern experiences fortomorrows brands.",
      img: "https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425__340.jpg",
    },
  ];
  return (
    <div>
 <Carousel activeIndex={index} onSelect={handleSelect} style={{height: "400px"}}>
      {sliderItems.map(item => (
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          style={{height: "400px"}}
          src={item.img}
          alt={item.title}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default HeroSlider;
