import React, { useEffect, useState } from "react";

function useCurrentTime() {
	const [currentTime, setcCurrentTime] = useState(
		new Date().toLocaleString("en-US")
	);

	useEffect(() => {
		const dateTimer = setInterval(() => {
			setcCurrentTime(new Date().toLocaleString("en-US"));
		}, 1000);

		return () => clearInterval(dateTimer);
	}, []);
	return currentTime;
}


export default useCurrentTime;
