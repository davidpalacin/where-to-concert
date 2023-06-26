import { useSelector } from "react-redux";

export const getUser = () => {
	const user = useSelector((state: any) => state.auth.user);
	return user;
};
