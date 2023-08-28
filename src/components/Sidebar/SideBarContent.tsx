import { Box, Flex, type BoxProps, Show, Hide } from "@chakra-ui/react";
import { FiX, FiActivity, FiCpu, FiList, FiUser } from "react-icons/fi";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { TractianLogo } from "../../assets/icons/TractianLogo";
import { BsBank } from "react-icons/bs";
import { NavItem } from "../NavItem";
import { useNavigate } from "react-router-dom";

interface LinkItemProps {
	name: string;
	icon: JSX.Element;
	path: string;
}

const LinkItems: LinkItemProps[] = [
	{ name: "Overview", icon: <FiActivity color="#fff" />, path: "/" },
	{ name: "Companies", icon: <BsBank color="#fff" />, path: "/companies" },
	{
		name: "Units",
		icon: <MdOutlineStoreMallDirectory color="#fff" />,
		path: "/units",
	},
	{ name: "Assets", icon: <FiCpu color="#fff" />, path: "/assets" },
	{ name: "Work Orders", icon: <FiList color="#fff" />, path: "/work-orders" },
	{ name: "Users", icon: <FiUser color="#fff" />, path: "/users" },
];

interface SidebarContentProps extends BoxProps {
	onClose: () => void;
}

export const SidebarContent = ({
	onClose,
	...rest
}: SidebarContentProps): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Box
			bg="#1A3071"
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			paddingTop={{ base: "10", md: "5" }}
			{...rest}
		>
			<Show above="sm">
				<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
					<Box
						cursor="pointer"
						onClick={() => {
							navigate("/");
						}}
						style={{ width: "80%" }}
					>
						<TractianLogo />
					</Box>
				</Flex>
			</Show>

			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					label={link.name}
					onClick={onClose}
					path={link.path}
					icon={link.icon}
				/>
			))}
			<Hide above="sm">
				<NavItem
					key={"Close"}
					onClick={onClose}
					path={"#"}
					label="Close"
					icon={<FiX color="#fff" />}
				/>
			</Hide>
		</Box>
	);
};
