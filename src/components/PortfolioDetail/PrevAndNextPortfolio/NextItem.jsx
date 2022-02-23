import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { HiOutlineArrowRight } from "react-icons/hi";

const NextItem = ({ item }) => {
	const navigate = useNavigate();

	const goToNextItem = (id) => {
		navigate("/portfolio/" + id);
		window.scroll(0, 0);
	};

	return (
		<div className="next__item">
			{item &&
				item.map((item) => (
					<>
						<div className="next__item__banner">
							<img
								className="next__item__banner__item"
								src={item.img}
								alt={item.title}
							/>
						</div>
						<div
							className="next__item__info"
							onClick={() => goToNextItem(item.id)}
						>
							<div className="next__item__title">
								<h1 className="next__item__title__item">{item.subtitle}</h1>
							</div>
							<div className="next__item__info__arrow">
								<IconButton className="next__item__info__arrow__item">
									<HiOutlineArrowRight />
								</IconButton>
							</div>
						</div>
					</>
				))}
		</div>
	);
};

export default NextItem;
