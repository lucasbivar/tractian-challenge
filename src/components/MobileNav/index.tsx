import { Box, Flex, type FlexProps, IconButton } from "@chakra-ui/react";
import { TractianLogo } from "../../assets/icons/TractianLogo";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps): JSX.Element => {
	const navigate = useNavigate();
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg="#1A3071"
			justifyContent="space-between"
			{...rest}
		>
			<IconButton
				variant="ghost"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FiMenu size={30} color="#fff" />}
			/>

			<Box
				cursor="pointer"
				onClick={() => {
					navigate("/");
				}}
				width="50%"
				paddingRight={10}
			>
				<TractianLogo />
			</Box>
		</Flex>
	);
};
