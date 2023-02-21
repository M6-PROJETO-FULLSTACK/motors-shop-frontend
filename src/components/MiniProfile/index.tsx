import { MiniProfileAvatar, MiniProfileContainer } from "./style";
import Text from "../../styles/texts";

interface MiniProfileProps {
	userId: string;
	userName: string;
}

const MiniProfile = ({ userId, userName }: MiniProfileProps) => {
	const fistName = userName.split(" ")[0];
	const lastName = userName.split(" ")[userName.split(" ").length - 1];
	const initials = fistName[0] + lastName[0];

	return (
		<MiniProfileContainer>
			<a href={`/users/${userId}`}>
				<MiniProfileAvatar>{initials}</MiniProfileAvatar>
			</a>
			<a href={`/users/${userId}`}>
				<Text className="body2 mini-username" weight="500">
					{userName.length > 30 ? userName.slice(0, 30) + "..." : userName}
				</Text>
			</a>
		</MiniProfileContainer>
	);
};

export default MiniProfile;
