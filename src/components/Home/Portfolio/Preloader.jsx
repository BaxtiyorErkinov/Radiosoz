import React from "react";
import { Skeleton } from "@mui/material";
import "./Preloader.css";

export default function Preloader() {
	const counter = 6;
	const FeedSkeleton = () => (
		<div className="postSk">
			<div className="postSkImg"></div>
			<div className="postSkInfo">
				<div className="postSkDetail">
					<div className="postSkText"></div>
					<div className="postSkText sm"></div>
				</div>
			</div>
		</div>
	);

	return Array(counter).fill(<FeedSkeleton />);
}
