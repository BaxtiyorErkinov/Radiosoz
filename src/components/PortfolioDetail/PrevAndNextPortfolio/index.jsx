import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "./PrevAndNextPort.scss";
import NextItem from "./NextItem";
import PrevItem from "./PrevItem";

const PrevAndNextPortfolio = ({ item }) => {
	console.log(item);
	const prev = useSelector((state) => {
		if (item > 1) {
			return state.portfolios.portfolios.filter((el) => el.id == item - 1);
		} else {
			return null;
		}
	});
	const next = useSelector((state) => {
		if (item !== state.portfolios.portfolios.length - 1) {
			return state.portfolios.portfolios.filter((el) => el.id == item + 1);
		} else {
			return null;
		}
	});
	console.log(prev);
	console.log(next);
	return (
		<div className="prev__and__next__wrapper">
			<Grid container>
				<Grid item md={6} sm={6} xs={12}>
					<PrevItem item={prev} />
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<NextItem item={next} />
				</Grid>
			</Grid>
		</div>
	);
};

export default PrevAndNextPortfolio;
