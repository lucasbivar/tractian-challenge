import { Flex, Spinner } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { AssetHealthGrapth } from "../../components/AssetsHealthGraph";
import { AssetsStatusHealthGraph } from "../../components/AssetsStatusHealthGraph";
import { useAssets } from "../../hooks/assets/useAssets";
import { WorkOrdersGraph } from "../../components/WorkOrdersGraph";
import { useWorkOrders } from "../../hooks/workOrders/useWorkOrders";
import { UnitsGeolocalizationGraph } from "../../components/UnitsGeolocalizationGraph";
import { useUnits } from "../../hooks/units/useUnits";

export const Overview = (): JSX.Element => {
	const { data: assets, isLoading: isLoadingAssets } = useAssets({});
	const { data: units, isLoading: isLoadingUnits } = useUnits({});
	const { data: workOrders, isLoading: isLoadingWorkOrders } = useWorkOrders(
		{},
	);

	return (
		<Flex
			width="100%"
			height="100%"
			overflowY="scroll"
			css={{ "::-webkit-scrollbar": { display: "none" } }}
			flexDirection="column"
		>
			<Flex
				flexWrap="wrap"
				flexDirection="row"
				justifyContent="space-between"
				height={{ base: "auto", sm: "280px" }}
				mb={{ base: "0px", sm: "20px" }}
				width="100%"
			>
				<Card
					title="Assets Status"
					height={{ base: "280px", sm: "100%" }}
					width={{ base: "100%", sm: "32%" }}
				>
					{(isLoadingAssets || isLoadingUnits || isLoadingWorkOrders) && (
						<Flex
							width="100%"
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							<Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="#1A3071"
								size="xl"
							/>
						</Flex>
					)}
					{!isLoadingAssets && !isLoadingUnits && !isLoadingWorkOrders && (
						<AssetsStatusHealthGraph assets={assets} />
					)}
				</Card>
				<Card
					title="Assets Health"
					height={{ base: "280px", sm: "100%" }}
					width={{ base: "100%", sm: "32%" }}
				>
					{(isLoadingAssets || isLoadingUnits || isLoadingWorkOrders) && (
						<Flex
							width="100%"
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							<Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="#1A3071"
								size="xl"
							/>
						</Flex>
					)}
					{!isLoadingAssets && !isLoadingUnits && !isLoadingWorkOrders && (
						<AssetHealthGrapth assets={assets} />
					)}
				</Card>
				<Card
					title="Work Orders Status"
					height={{ base: "280px", sm: "100%" }}
					width={{ base: "100%", sm: "32%" }}
				>
					{(isLoadingAssets || isLoadingUnits || isLoadingWorkOrders) && (
						<Flex
							width="100%"
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							<Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="#1A3071"
								size="xl"
							/>
						</Flex>
					)}
					{!isLoadingAssets && !isLoadingUnits && !isLoadingWorkOrders && (
						<WorkOrdersGraph workOrders={workOrders} />
					)}
				</Card>
			</Flex>
			<Card title="Unit's Geolocalization" height="350px" width="100%">
				{(isLoadingAssets || isLoadingUnits || isLoadingWorkOrders) && (
					<Flex
						width="100%"
						height="100%"
						alignItems="center"
						justifyContent="center"
					>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="#1A3071"
							size="xl"
						/>
					</Flex>
				)}
				{!isLoadingAssets && !isLoadingUnits && !isLoadingWorkOrders && (
					<UnitsGeolocalizationGraph units={units} />
				)}
			</Card>
		</Flex>
	);
};
