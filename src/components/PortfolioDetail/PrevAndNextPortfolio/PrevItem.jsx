import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { HiOutlineArrowLeft } from "react-icons/hi";

const PrevItem = ({ item }) => {
	const navigate = useNavigate();

	const goToPrevItem = (id) => {
		navigate("/portfolio/" + id);
		window.scroll(0, 0);
	};

	return (
		<div className="prev__item">
			{item &&
				item.map((item) => (
					<>
						<div className="prev__item__banner">
							<img
								className="prev__item__banner__item"
								src={item.img}
								alt={item.title}
							/>
						</div>
						<div
							className="prev__item__info"
							onClick={() => goToPrevItem(item.id)}
						>
							<div className="prev__item__info__arrow">
								<IconButton className="prev__item__info__arrow__item">
									<HiOutlineArrowLeft />
								</IconButton>
							</div>
							<div className="prev__item__title">
								<h1 className="prev__item__title__item">{item.subtitle}</h1>
							</div>
						</div>
					</>
				))}
		</div>
	);
};

export default PrevItem;
