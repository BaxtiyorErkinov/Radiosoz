import React from "react";
import { Grid } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import "./Blogs.scss";

const Blogs = () => {
  return (
    <div className="posts__container">
      <div className="posts__title">
        <p className="posts__title__item">OUR JOURNAL</p>
      </div>
      <div className="posts__desc">
        <h1 className="posts__desc__item">Latest news</h1>
      </div>
      <Grid container spacing={4}>
        <Grid item md={4} sm={6} xs={12}>
          <div className="postblog__container">
            <div className="postblog__img">
              <img
                className="postblog__img__item"
                src="https://cdn.pixabay.com/photo/2021/12/06/05/00/animal-6849259__340.jpg"
                alt="post"
              />
            </div>
            <div className="postblog__date">
                <p className="postblog__date__item">Typography - May 28, 2020</p>
                </div>
            <div className="postblog__title">
              <h2 className="postblog__title__item">
                Mobile UI Design: 7 Basic Typography Rules
              </h2>
            </div>
            <div className="postblog__action">
              <button className="postblog__action__btn">
                Read More
                <span className="postblog__action__btn__icon">
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className="postblog__container">
            <div className="postblog__img">
              <img
                className="postblog__img__item"
                src="https://cdn.pixabay.com/photo/2021/12/06/05/00/animal-6849259__340.jpg"
                alt="post"
              />
            </div>
            <div className="postblog__date">
                <p className="postblog__date__item">Typography - May 28, 2020</p>
                </div>
            <div className="postblog__title">
              <h2 className="postblog__title__item">
                Mobile UI Design: 7 Basic Typography Rules
              </h2>
            </div>
            <div className="postblog__action">
              <button className="postblog__action__btn">
                Read More
                <span className="postblog__action__btn__icon">
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className="postblog__container">
            <div className="postblog__img">
              <img
                className="postblog__img__item"
                src="https://cdn.pixabay.com/photo/2021/12/06/05/00/animal-6849259__340.jpg"
                alt="post"
              />
            </div>
            <div className="postblog__date">
                <p className="postblog__date__item">Typography - May 28, 2020</p>
                </div>
            <div className="postblog__title">
              <h2 className="postblog__title__item">
                Mobile UI Design: 7 Basic Typography Rules
              </h2>
            </div>
            <div className="postblog__action">
              <button className="postblog__action__btn">
                Read More
                <span className="postblog__action__btn__icon">
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blogs;
