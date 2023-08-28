import { Flex, Text } from "@chakra-ui/react";
import { MdSearchOff } from "react-icons/md";

export const NoDataFound = (): JSX.Element => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			width="100%"
			height="calc(100vh - 240px)"
		>
			<MdSearchOff color="#1A3071" size="100" />
			<Text fontSize="xl" as="b">
				NO DATA FOUND
			</Text>
		</Flex>
	);
};
