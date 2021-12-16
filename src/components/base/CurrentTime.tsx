import React, { createContext, FunctionComponent, useContext, useEffect, useState } from "react";

export const CurrentTimeContext = createContext(null);

export const CurrentTimeProvider = ({children}) => {
	const [currentTime, setcCurrentTime] = useState(
		new Date().toLocaleString("en-US")
	);

	useEffect(() => {
		const dateTimer = setInterval(() => {
			setcCurrentTime(new Date().toLocaleString("en-US"));
		}, 1000);

		return () => clearInterval(dateTimer);
	}, []);


    return <CurrentTimeContext.Provider value={{currentTime}}>
		{ children }
	</CurrentTimeContext.Provider>;
};

export function useCurrentTime() {
	const time = useContext(CurrentTimeContext);
	return time;
}

const CurrentTime: FunctionComponent = () => {
	const time = useContext(CurrentTimeContext);

	return <div className="c-danger"> {time.currentTime} </div>;
};

export default CurrentTime;
