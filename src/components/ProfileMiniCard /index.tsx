import { Avatar, Flex, Text } from "@chakra-ui/react";
import { type User } from "../../interfaces/users";

interface ProfileMiniCardProps {
	user: User;
}

export const ProfileMiniCard = ({
	user,
}: ProfileMiniCardProps): JSX.Element => {
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			paddingX="5px"
			paddingY="25px"
			width={{ base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "18%" }}
			border="1px solid #D7D7D7"
			_hover={{ boxShadow: "base" }}
			bg="#FFF"
			borderRadius={10}
		>
			<Avatar bg="#1A3071" color="#FFF" name={user.name} />
			<Text as="b" fontSize="md">
				{user.name ?? "-"}
			</Text>
			<Text fontSize="xs">{user.email ?? "-"}</Text>
		</Flex>
	);
};
