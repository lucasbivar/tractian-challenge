import { Box } from "@chakra-ui/react";
import { type Asset } from "../../interfaces/assets";
import { MotionBox } from "../MotionBox";
import { AssetHealthItem } from "./AssetHealthItem";

interface AssetHealthGrapthProps {
	assets?: Asset[];
}

export const AssetHealthGrapth = ({
	assets,
}: AssetHealthGrapthProps): JSX.Element => {
	const correctOperationFilter = (asset: Asset): boolean =>
		!!asset.healthscore && asset.healthscore >= 85;
	const inRiskFilter = (asset: Asset): boolean =>
		!!asset.healthscore && asset.healthscore < 85 && asset.healthscore >= 70;
	const needMaintenceFilter = (asset: Asset): boolean =>
		!!asset.healthscore && asset.healthscore < 70;
	const noInformationFilter = (asset: Asset): boolean => !asset.healthscore;

	const totalAssets = assets?.length ?? 0;
	const totalCorrectOperation =
		assets?.filter(correctOperationFilter).length ?? 0;
	const totalInRisk = assets?.filter(inRiskFilter).length ?? 0;
	const totalNeedMaintence = assets?.filter(needMaintenceFilter).length ?? 0;
	const totalNoInformation = assets?.filter(noInformationFilter).length ?? 0;

	const maxLen: number =
		Math.max.apply(null, [
			String(totalAssets).length,
			String(totalCorrectOperation).length,
			String(totalInRisk).length,
			String(totalNeedMaintence).length,
			String(totalNoInformation).length,
		]) + 1;

	return (
		<Box>
			<MotionBox duration="0.5">
				<AssetHealthItem
					label="Total of Assets"
					color="#1A3071"
					quantity={totalAssets.toString().padStart(maxLen, "0")}
				/>
			</MotionBox>
			<MotionBox duration="0.8">
				<AssetHealthItem
					label="Correct Operation"
					color="#52C41A"
					quantity={totalCorrectOperation.toString().padStart(maxLen, "0")}
				/>
			</MotionBox>
			<MotionBox duration="1.1">
				<AssetHealthItem
					label="In Risk"
					color="#FAAD14"
					quantity={totalInRisk.toString().padStart(maxLen, "0")}
				/>
			</MotionBox>
			<MotionBox duration="1.4">
				<AssetHealthItem
					label="Need Maintenance"
					color="#ED3833"
					quantity={totalNeedMaintence.toString().padStart(maxLen, "0")}
				/>
			</MotionBox>
			<MotionBox duration="1.7">
				<AssetHealthItem
					label="No Information"
					color="#D7D7D7"
					quantity={totalNoInformation.toString().padStart(maxLen, "0")}
				/>
			</MotionBox>
		</Box>
	);
};
