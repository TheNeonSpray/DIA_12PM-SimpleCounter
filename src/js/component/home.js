import React from "react";
import PropTypes from "prop-types";
import { Counter } from "./counter";

export function Home(props) {
	return (
		<div className="d-flex flex-row justify-content-center bg-dark">
			<div className="p-2 bg-secondary text-white m-1 d-flex justify-content-center align-items-center">
				<i className="fas fa-stopwatch fa-4x pt-2"></i>
			</div>
			<Counter number={props.firstDigit} />
			<Counter number={props.secondDigit} />
			<Counter number={props.thirdDigit} />
			<Counter number={props.fourthDigit} />
			<Counter number={props.fifthDigit} />
			<Counter number={props.sixthDigit} />
		</div>
	);
}

Home.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
	fifthDigit: PropTypes.number,
	sixthDigit: PropTypes.number
};
