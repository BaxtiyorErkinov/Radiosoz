import { GET_PORTFOLIOS } from "../action-types/portfolioActionTypes";
import Img1 from "../../assets/images/portfolio-item-1.jpg";
import Img2 from "../../assets/images/portfolio-item-2.jpg";
import Img3 from "../../assets/images/portfolio-item-3.jpg";
import Img4 from "../../assets/images/portfolio-item-4.jpg";
import Img5 from "../../assets/images/portfolio-item-5.jpg";
import Img6 from "../../assets/images/portfolio-item-6.jpg";
import SlideItem from "../../assets/images/portfolio-slider-item.jpg";

const defaultState = {
  // portfolios: [
  //   {
  //     id: 1,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img1,
  //     fatured: false,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img2,
  //     fatured: false,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img3,
  //     fatured: true,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img4,
  //     fatured: false,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img5,
  //     fatured: false,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Web Design",
  //     subtitle: "Slumber",
  //     img: Img6,
  //     fatured: true,
  //     start: "08 Jan 2020",
  //     launch: "08 Jan 2020",
  //     role: "Designer",
  //     website: "blabla.com",
  //     sliderItems: [
  //       { id: 1, img: SlideItem },
  //       { id: 2, img: SlideItem },
  //       { id: 3, img: SlideItem },
  //       { id: 4, img: SlideItem },
  //     ],
  //   },
  // ],
  portfolios: [],
};

export const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PORTFOLIOS:
      return { ...state, portfolios: action.payload };
    default:
      return state;
  }
};
