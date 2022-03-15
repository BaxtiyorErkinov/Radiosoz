import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CustomerFeedback.scss";
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className="customerfd__container">
        <Swiper
          loop={true}
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="pagination-container">
            <div className="my-custom-pagination-div"></div>
          </div>
          <SwiperSlide>
            <div className="customer__feedback__banner"></div>
            <div className="slide__info">
              <div className="slide__info__text">
                <p className="slide__info__text__item">
                  Kind isn't had.Their whose seasons fowl light created they're
                  void is female fowl he second shall that form, firmament you
                  over had brought herb void cattle image form creeping
                </p>
              </div>
              <div className="avatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"
                  sx={{ width: 60, height: 60 }}
                />
              </div>
              <div className="user__info">
                <h4 className="user__name">John Uick</h4>
                <p className="user__job">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer__feedback__banner"></div>

            <div className="slide__info">
              <div className="slide__info__text">
                <p className="slide__info__text__item">
                  Kind isn't had.Their whose seasons fowl light created they're
                  void is female fowl he second shall that form, firmament you
                  over had brought herb void cattle image form creeping
                </p>
              </div>
              <div className="avatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"
                  sx={{ width: 60, height: 60 }}
                />
              </div>
              <div className="user__info">
                <h4 className="user__name">John Uick</h4>
                <p className="user__job">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer__feedback__banner"></div>

            <div className="slide__info">
              <div className="slide__info__text">
                <p className="slide__info__text__item">
                  Kind isn't had.Their whose seasons fowl light created they're
                  void is female fowl he second shall that form, firmament you
                  over had brought herb void cattle image form creeping
                </p>
              </div>
              <div className="avatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"
                  sx={{ width: 60, height: 60 }}
                />
              </div>
              <div className="user__info">
                <h4 className="user__name">John Uick</h4>
                <p className="user__job">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
