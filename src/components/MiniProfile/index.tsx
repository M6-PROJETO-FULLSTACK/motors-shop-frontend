import { MiniProfileAvatar, MiniProfileContainer } from "./style";
import Text from "../../styles/texts";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";

interface MiniProfileProps {
	userId: string;
	userName: string;
}

	const MiniProfile = ({ userId, userName }: MiniProfileProps) => {

		if (!userName || !userId) {
			userName = "Anônimo";
			userId = "0";
		}

	const fistName = userName.split(" ")[0];
	const lastName = userName.split(" ")[userName.split(" ").length - 1];
	const initials = fistName[0] + lastName[0];

	return (
		<MiniProfileContainer>
			<a href={`/profile/${userId}`}>
				<MiniProfileAvatar>{initials}</MiniProfileAvatar>
			</a>
			<a href={`/profile/${userId}`}>
				<Text className="body2 mini-username" weight="500">
					{userName.length > 30 ? userName.slice(0, 30) + "..." : userName}
				</Text>
			</a>
		</MiniProfileContainer>
	);
};

export default MiniProfile;
