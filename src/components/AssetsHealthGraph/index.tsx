import { Box, Flex, Text } from "@chakra-ui/react";
import { type Asset } from "../../interfaces/assets";

interface AssetHealthGrapthProps {
	assets?: Asset[];
}

export const AssetHealthGrapth = ({
	assets,
}: AssetHealthGrapthProps): JSX.Element => {
	const totalAssets = assets?.length ?? 0;
	const totalCorrectOperations =
		assets?.filter((asset) => asset.healthscore >= 85).length ?? 0;
	const totalInRisk =
		assets?.filter((asset) => asset.healthscore < 85 && asset.healthscore >= 70)
			.length ?? 0;
	const totalNeedMaintence =
		assets?.filter((asset) => asset.healthscore < 70).length ?? 0;
	const totalNoInformation =
		assets?.filter((asset) => asset.healthscore == null).length ?? 0;

	const maxLen: number =
		Math.max.apply(null, [
			String(totalAssets).length,
			String(totalCorrectOperations).length,
			String(totalInRisk).length,
			String(totalNeedMaintence).length,
			String(totalNoInformation).length,
		]) + 1;

	return (
		<Box>
			<Flex flexDirection="row" alignItems="center" mt="1" mb="1">
				<Box
					width="10px"
					height="35px"
					bg="#1A3071"
					borderRadius="5px"
					marginRight="10px"
				/>
				<Text style={{ marginRight: 10 }} as="b">
					{totalAssets.toString().padStart(maxLen, "0")}
				</Text>
				<Text>Total of Assets</Text>
			</Flex>
			<Flex flexDirection="row" alignItems="center" mb="1">
				<Box
					width="10px"
					height="35px"
					bg="#52C41A"
					borderRadius="5px"
					marginRight="10px"
				/>
				<Text style={{ marginRight: 10 }} as="b">
					{totalCorrectOperations.toString().padStart(maxLen, "0")}
				</Text>
				<Text>Correct Operation</Text>
			</Flex>
			<Flex flexDirection="row" alignItems="center" mb="1">
				<Box
					width="10px"
					height="35px"
					bg="#FAAD14"
					borderRadius="5px"
					marginRight="10px"
				/>
				<Text style={{ marginRight: 10 }} as="b">
					{totalInRisk.toString().padStart(maxLen, "0")}
				</Text>
				<Text>In Risk</Text>
			</Flex>
			<Flex flexDirection="row" alignItems="center" mb="1">
				<Box
					width="10px"
					height="35px"
					bg="#ED3833"
					borderRadius="5px"
					marginRight="10px"
				/>
				<Text style={{ marginRight: 10 }} as="b">
					{totalNeedMaintence.toString().padStart(maxLen, "0")}
				</Text>
				<Text>Need Maintenance</Text>
			</Flex>
			<Flex flexDirection="row" alignItems="center">
				<Box
					width="10px"
					height="35px"
					bg="#D7D7D7"
					borderRadius="5px"
					marginRight="10px"
				/>
				<Text style={{ marginRight: 10 }} as="b">
					{totalNoInformation.toString().padStart(maxLen, "0")}
				</Text>
				<Text>No Informtaion</Text>
			</Flex>
		</Box>
	);
};
