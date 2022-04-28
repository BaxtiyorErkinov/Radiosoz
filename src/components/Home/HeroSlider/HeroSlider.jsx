import React, { useState, useRef, useEffect } from "react";
import { IconButton, Grid } from "@mui/material";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { TweenLite, TweenMax, Power3 } from "gsap";
import "./Slider.scss";

const HeroSlider = () => {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });
  const imageWidth = 700;
  const sliderItems = [
    {
      id: 1,
      title: "DESIGN INSPIRATION",
      desc: "We create modern experiences fortomorrows brands.",
      img: "https://cdn.pixabay.com/photo/2020/12/22/00/06/river-5851177__340.jpg",
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
  useEffect(() => {
    console.log(testimonialList);
    TweenMax.to(testimonialList.children[0], 0, {
      opacity: 1
    });
  }, []);
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  // Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: true
      });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({
        isActive2: false,
        isActive3: true
      });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({
        isActive1: true,
        isActive3: false
      });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive3: true
      });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({
        isActive2: false,
        isActive1: true
      });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({
        isActive2: true,
        isActive3: false
      });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="t-content">
          <ul ref={ (el) => (testimonialList = el) }>
            <li className={ state.isActive1 ? "active" : "" }>
              <div className="content-inner">
                <p className="title">
                  { sliderItems[0].title }
                </p>
                <h1 className="desc">{ sliderItems[0].desc }</h1>
                <div className="action">
                  <button>Get In Touch</button>
                </div>
              </div>
            </li>
            <li className={ state.isActive2 ? "active" : "" }>
              <div className="content-inner">
                <p className="title">
                  { sliderItems[1].title }
                </p>
                <h1 className="desc">{ sliderItems[1].desc }</h1>
                <div className="action">
                  <button>Get In Touch</button>
                </div>
              </div>
            </li>
            <li className={ state.isActive3 ? "active" : "" }>
              <div className="content-inner">
                <p className="title">
                  { sliderItems[2].title }
                </p>
                <h1 className="desc">{ sliderItems[2].desc }</h1>
                <div className="action">
                  <button>Get In Touch</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="t-image">
          <ul ref={ (el) => (imageList = el) }>
            <li className={ state.isActive1 ? "active" : "" }>
              <img src={ sliderItems[0].img } />
            </li>
            <li className={ state.isActive2 ? "active" : "" }>
              <img src={ sliderItems[1].img } />
            </li>
            <li className={ state.isActive3 ? "active" : "" }>
              <img src={ sliderItems[2].img } />
            </li>
          </ul>
        </div>
      </div>
      <div className="actions__btn">
        <div className="arrows left">
          <span>
                <IconButton className="arrow__icon" onClick={ prevSlide }>
                  <HiOutlineArrowLeft />
                </IconButton>
              </span>
        </div>
        <div className="arrows right">
          <span>
                <IconButton className="arrow__icon" onClick={ nextSlide }>
                  <HiOutlineArrowRight />
                </IconButton>
              </span>
        </div>
      </div>
    </div>
    );
};

export default HeroSlider;