import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RiCloseFill } from "react-icons/ri";
import { ReactNode } from "react";
import { ModalBody, TitleBox } from "./style";
import Text from "../../styles/texts";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "100%",
	maxWidth: 500,
	maxHeight: 600,
	height: "250",
	bgcolor: "background.paper",
	overflowY: "hidden",
	boxShadow: 24,
	p: 4,
	borderRadius: "5px",
};

interface ChildModalProps {
	title: string;
	children: ReactNode;
	childOpen: boolean;
	setChildOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChildModal({ children, childOpen, setChildOpen, title }: ChildModalProps) {
	const handleClose = () => {
		setChildOpen(false);
	};

	return (
		<React.Fragment>
			<Modal open={childOpen} onClose={handleClose}>
				<div>
					<Box sx={{ ...style, width: 450 }}>
						<TitleBox>
							<Text className="heading7" weight="500">
								Sucesso!
							</Text>
							<button onClick={handleClose}>
								<RiCloseFill />
							</button>
						</TitleBox>
						<ModalBody>
							<Text className="heading7" weight="500">
								{title}
							</Text>
							<Text className="body1" weight="400">
								{children}
							</Text>
						</ModalBody>
					</Box>
				</div>
			</Modal>
		</React.Fragment>
	);
}

export default ChildModal;
