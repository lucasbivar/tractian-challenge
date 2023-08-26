import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { MobileNav } from "../MobileNav";
import { SidebarContent } from "./SideBarContent";

interface SidebarProps {
	pages: React.ReactNode;
}

export const Sidebar = ({ pages }: SidebarProps): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh" bg="#FFF">
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			<MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
			<Box
				ml={{ base: 0, md: 60 }}
				padding={{ base: "40px 25px 0px 25px", sm: "40px 50px 0px 50px" }}
			>
				{pages}
			</Box>
		</Box>
	);
};
