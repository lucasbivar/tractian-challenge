import { Box, Flex, Text } from "@chakra-ui/react";

interface AssetHealthItemProps {
	quantity: string;
	label: string;
	color: string;
}

export const AssetHealthItem = ({
	label,
	color,
	quantity,
}: AssetHealthItemProps): JSX.Element => {
	return (
		<Flex flexDirection="row" mb="1" alignItems="center">
			<Box
				width="10px"
				height="35px"
				bg={color}
				borderRadius="5px"
				marginRight="10px"
			/>
			<Text style={{ marginRight: 10 }} as="b">
				{quantity}
			</Text>
			<Text>{label}</Text>
		</Flex>
	);
};
