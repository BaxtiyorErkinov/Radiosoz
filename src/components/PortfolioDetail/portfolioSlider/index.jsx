import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/free-mode";
import "./portfolioSlider.css";

const PortfolioSlider = ({ item }) => {
	console.log(item);
	return (
		<div className="portfolio-slider-container">
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
					el: ".pagination-div",
					clickable: true,
					bulletClass: "swiper-pagination-bullett",
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{item.map((el) => (
					<SwiperSlide key={el.id}>
						<img src={el.img} alt={el.id} />
					</SwiperSlide>
				))}
				<div className="pagination-div"></div>
			</Swiper>
		</div>
	);
};

export default PortfolioSlider;
