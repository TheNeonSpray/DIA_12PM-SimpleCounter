import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="p-2 bg-secondary text-white m-1 d-flex justify-content-center align-items-center">
			<h1>{props.number}</h1>
		</div>
	);
}

Counter.propTypes = {
	number: PropTypes.number
};
