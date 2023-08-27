import { Box, Flex, Text } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { type Asset } from "../../interfaces/assets";
import { assetStatus } from "../../utils/enums/assetStatus";
import { assetModels } from "../../utils/enums/models";

interface AssetMiniCardProps {
	asset: Asset;
}

export const AssetMiniCard = ({ asset }: AssetMiniCardProps): JSX.Element => {
	const navigate = useNavigate();
	return (
		<Flex
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			padding="5"
			width={{ base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%" }}
			border="1px solid #D7D7D7"
			_hover={{ boxShadow: "base" }}
			bg="#FFF"
			borderLeft={`15px solid ${
				asset.status != null ? assetStatus[asset.status].color : "#1A3071"
			}`}
			borderRadius={10}
		>
			<Flex flexDirection="column" width="80%">
				<Text as="b" fontSize="md" isTruncated>
					{asset.name ?? "-"}
				</Text>
				<Text fontSize="sm" isTruncated>
					<Text as="b" fontSize="sm">
						Model:&nbsp;
					</Text>
					{asset.model != null ? assetModels[asset.model].label : "-"}
				</Text>
				<Text fontSize="sm" isTruncated>
					<Text as="b" fontSize="sm">
						Status:&nbsp;
					</Text>
					{asset.status != null ? assetStatus[asset.status].label : "-"}
				</Text>
				<Text fontSize="sm" isTruncated>
					<Text as="b" fontSize="sm">
						Health Score:&nbsp;
					</Text>
					{asset.healthscore ?? "-"}%
				</Text>
			</Flex>
			<Box
				onClick={() => {
					navigate(`/assets/${asset.id}`);
				}}
				width="15px"
				aria-label="open machine"
				cursor="pointer"
				mr="2"
				alignSelf="flex-end"
			>
				<FiEye size="23" color="#1A3071" />
			</Box>
		</Flex>
	);
};
