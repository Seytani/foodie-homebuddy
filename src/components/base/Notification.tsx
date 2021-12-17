import React, {
	FunctionComponent,
	useContext,
	useState,
	createContext,
} from "react";

import "@/styles/components/base/Notification.scss";

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState("Sample Notification");
	const [details, setDetails] = useState("");
	const [style, setStyle] = useState("info");

	return (
		<NotificationContext.Provider
			value={{ visible, setVisible, title, setTitle, details, setDetails, style, setStyle }}
		>
			{children}
		</NotificationContext.Provider>
	);
};

export function useNotification() {
	const notification = useContext(NotificationContext);
    
	return (payload) => {
        notification.setVisible(!notification.visible);
        payload.title && notification.setTitle(payload.title);
        payload.details && notification.setDetails(payload.details);
        payload.style && notification.setStyle(payload.style);
	};
}

const Notification: FunctionComponent = () => {
	const notification = useContext(NotificationContext);

	return (
		<div
			className={`notification ${notification.style} ${
				notification.visible ? "visible" : ""
			}`}
		>
			<div className="d-flex fai-center">
				<div className="icon"></div>

				<div>
					<p className="notification__title">{notification.title}</p>
					{notification.details && <p className="notification__text">{notification.details}</p>}
				</div>
				<div
					className="material-icons notification__close"
					onClick={() => notification.setVisible(false)}
				>
					close
				</div>
			</div>
		</div>
	);
};

export default Notification;
