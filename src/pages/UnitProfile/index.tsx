import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { AssetMiniCard } from "../../components/AssetMiniCard";
import { ProfileMiniCard } from "../../components/ProfileMiniCard ";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import HC_exporting from "highcharts/modules/exporting";
import variablePie from "highcharts/modules/variable-pie";
import { useNavigate, useParams } from "react-router-dom";
import { useUnit } from "../../hooks/units/useUnits";
variablePie(Highcharts);
HighchartsMap(Highcharts);
HC_exporting(Highcharts);

const optionsMachineStatus = {
	chart: {
		type: "variablepie",
	},
	title: {
		text: "",
	},
	series: [
		{
			minPointSize: 20,
			innerSize: "100%",
			zMin: 0,
			name: "Assets Status",
			borderRadius: 0,
			tooltip: {
				headerFormat: "",
				pointFormat:
					'<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
					"Machines: <b>{point.y}</b><br/>",
			},
			data: [
				{
					name: "In Operation",
					y: 12,
					z: 12,
					color: "#52C41A",
				},
				{
					name: "Unplanned Stop",
					y: 10,
					z: 10,
					color: "#FAAD14",
				},
				{
					name: "In Alert",
					y: 1,
					z: 1,
					color: "#ED3833",
				},
				{
					name: "Planned Stop",
					y: 3,
					z: 3,
					color: "#8CA1FF",
				},
			],
		},
	],
};

export const UnitProfile = (): JSX.Element => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { data: unit, isLoading } = useUnit(Number(id));

	return (
		<Card noPadding>
			{isLoading && (
				<Flex
					width="100%"
					height="450px"
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
			{!isLoading && (
				<Flex flexDirection="column" height="100%" width="100%" mb="-8">
					<Box
						position="relative"
						flexDirection="column"
						height="240px"
						width="100%"
					>
						<Box zIndex="2" height="240px" position="absolute" width="100%">
							<Image
								objectFit="cover"
								height="240px"
								width="100%"
								src={unit?.image}
							/>
						</Box>
						<Box
							zIndex="3"
							width="100%"
							height="240px"
							position="absolute"
							bg="linear-gradient(0deg, rgba(26,48,113,1) 0%, rgba(255,255,255,0) 50%);"
						/>

						<Text
							color="#FFF"
							zIndex="4"
							top="170"
							left="10"
							position="absolute"
							as="b"
							fontSize="2xl"
							isTruncated
						>
							{unit?.name ?? "-"}
						</Text>
						<Text
							cursor="pointer"
							onClick={() => {
								unit?.companyId != null &&
									navigate(`/companies/${unit?.companyId}`);
							}}
							color="#FFF"
							zIndex="4"
							top="200"
							left="10"
							position="absolute"
							fontSize="sm"
						>
							{unit?.company?.name ?? "-"}
						</Text>
					</Box>
					<Flex
						flexDirection="column"
						mt="60px"
						height="100%"
						width="100%"
						pb="20px"
						paddingX={{ base: "5", sm: "10" }}
						paddingTop="5"
					>
						<Text as="b" fontSize="2xl">
							Analysis
						</Text>
						<Flex
							mt="5"
							flexDirection="row"
							gap={5}
							flexWrap="wrap"
							width="100%"
							mb="10px"
						>
							<Card
								title="Assets Status"
								height={{ base: "280px", sm: "280px" }}
								width={{
									base: "100%",
									sm: "100%",
									md: "100%",
									lg: "48%",
									xl: "48%",
								}}
							>
								<HighchartsReact
									containerProps={{ style: { height: "100%" } }}
									highcharts={Highcharts}
									options={optionsMachineStatus}
									constructorType={"chart"}
								/>
							</Card>
							<Card
								title="Assets Health"
								height={{ base: "280px", sm: "280px" }}
								width={{
									base: "100%",
									sm: "100%",
									md: "100%",
									lg: "48%",
									xl: "48%",
								}}
							>
								<div>
									<Flex flexDirection="row" alignItems="center" mt="1" mb="1">
										<Box
											width="10px"
											height="35px"
											bg="#1A3071"
											borderRadius="5px"
											marginRight="10px"
										/>
										<Text style={{ marginRight: 10 }} as="b">
											31
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
											14
										</Text>
										<Text>Correct</Text>
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
											10
										</Text>
										<Text>Risk</Text>
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
											06
										</Text>
										<Text>Urgent</Text>
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
											01
										</Text>
										<Text>No Informtaion</Text>
									</Flex>
								</div>
							</Card>
						</Flex>
						<Text as="b" fontSize="2xl">
							Assets
						</Text>
						<Flex
							mt="5"
							flexDirection="row"
							gap={5}
							flexWrap="wrap"
							width="100%"
							mb="30px"
						>
							{unit?.assets?.map((asset) => (
								<AssetMiniCard key={asset.id} asset={asset} />
							))}
						</Flex>
						<Text as="b" fontSize="2xl">
							Users
						</Text>
						<Flex
							mt="5"
							flexDirection="row"
							gap={5}
							flexWrap="wrap"
							width="100%"
						>
							{unit?.users?.map((user) => (
								<ProfileMiniCard key={user.id} user={user} />
							))}
						</Flex>
					</Flex>
				</Flex>
			)}
		</Card>
	);
};
