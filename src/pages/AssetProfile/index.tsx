import { Box, Flex, Image, Spinner, Text, Tooltip } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { FiThermometer } from "react-icons/fi";
import { BsSpeedometer2, BsLightningCharge } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useAsset } from "../../hooks/assets/useAssets";
import { getHealthScoreInfo } from "../../utils/healthScore";
import { assetStatus } from "../../utils/enums/assetStatus";
import { assetModels } from "../../utils/enums/models";
import { HealthHistoryGraph } from "../../components/HealthHistoryGraph";

export const AssetProfile = (): JSX.Element => {
	const { id } = useParams();
	const { data: asset, isLoading } = useAsset(Number(id));

	const navigate = useNavigate();
	if (asset == null && !isLoading) navigate("/not-found");

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
				<Flex
					flexDirection="column"
					p="5"
					bg="#F8F8F8"
					height="100%"
					width="100%"
				>
					<Flex justifyContent="space-between" flexWrap="wrap" mb="4">
						<Box width={{ base: "100%", xl: "65%" }}>
							<Text as="b" fontSize="2xl">
								Informations
							</Text>
							<Flex
								mt="1"
								mb={{ base: "4", xl: "0" }}
								bg="#FFF"
								flexWrap="wrap"
								boxShadow="md"
								padding="5"
								gap="8"
								borderRadius="10"
								border="1px solid #D7D7D7"
							>
								<Image
									borderRadius="10"
									fit="cover"
									width={{ base: "100%", lg: "250px" }}
									height="235px"
									src={asset?.image}
								/>
								<Box width={{ base: "100%", lg: "40%" }}>
									<Box>
										<Text as="b" fontSize="sm">
											Name:
										</Text>
										<Text fontSize="sm" isTruncated>
											{asset?.name ?? "-"}
										</Text>
									</Box>
									<Box>
										<Text as="b" fontSize="sm">
											Model:
										</Text>
										<Text fontSize="sm" isTruncated>
											{asset?.model != null
												? assetModels[asset.model].label
												: "-"}
										</Text>
									</Box>
									<Box>
										<Text as="b" fontSize="sm">
											Sensores:
										</Text>
										<Text fontSize="sm">
											{asset?.sensors?.join(" - ") ?? "-"}
										</Text>
									</Box>
									<Box>
										<Text as="b" fontSize="sm">
											Specification:
										</Text>
										<Flex justifyContent="space-between">
											<Tooltip hasArrow label="Max Temperature">
												<Flex gap="1" alignItems="center">
													<FiThermometer color="#000" />
													<Text fontSize="sm">
														{asset?.specifications?.maxTemp ?? "-"} °C
													</Text>
												</Flex>
											</Tooltip>
											<Tooltip hasArrow label="Power">
												<Flex gap="1" alignItems="center">
													<BsLightningCharge color="#000" />
													<Text fontSize="sm">
														{asset?.specifications?.power ?? "-"} W
													</Text>
												</Flex>
											</Tooltip>
											<Tooltip hasArrow label="RPM">
												<Flex gap="1" alignItems="center">
													<BsSpeedometer2 color="#000" />
													<Text fontSize="sm">
														{asset?.specifications?.rpm ?? "-"} rpm
													</Text>
												</Flex>
											</Tooltip>
										</Flex>
									</Box>
									<Flex justifyContent="space-between">
										<Box>
											<Text as="b" fontSize="sm">
												Status:
											</Text>
											<Box
												bg={
													asset?.status != null
														? assetStatus[asset.status].color
														: "#1A3071"
												}
												py="1"
												width="100px"
												textAlign="center"
												borderRadius="5"
												color="#FFF"
											>
												<Text fontSize="sm">
													{asset?.status != null
														? assetStatus[asset.status].label
														: "No Info"}
												</Text>
											</Box>
										</Box>
										<Box>
											<Text as="b" fontSize="sm">
												Health Score:
											</Text>
											<Box
												bg={getHealthScoreInfo(asset?.healthscore).color}
												py="1"
												width="100px"
												textAlign="center"
												borderRadius="5"
												color="#FFF"
											>
												<Text fontSize="sm">{asset?.healthscore}%</Text>
											</Box>
										</Box>
									</Flex>
								</Box>
							</Flex>
						</Box>
						<Flex width={{ base: "100%", xl: "30%" }} flexDirection="column">
							<Text as="b" fontSize="2xl">
								Metrics
							</Text>
							<Flex
								bg="#FFF"
								flexDirection="column"
								justifyContent="space-between"
								padding="5"
								boxShadow="md"
								height="100%"
								borderRadius="10"
								border="1px solid #D7D7D7"
							>
								<Box>
									<Text as="b" fontSize="sm">
										Total Uptime:
									</Text>
									<Text fontSize="sm" isTruncated>
										{asset?.metrics != null
											? asset?.metrics?.totalUptime != null &&
											  `${asset?.metrics.totalUptime.toFixed(0)} hours ${(
													(asset?.metrics.totalUptime -
														Math.trunc(asset?.metrics.totalUptime)) *
													60
											  ).toFixed(0)} minutes`
											: "-"}
									</Text>
								</Box>
								<Box>
									<Text as="b" fontSize="sm">
										Total Collects:
									</Text>
									<Text fontSize="sm">
										{asset?.metrics?.totalCollectsUptime ?? "-"}
									</Text>
								</Box>
								<Box>
									<Text as="b" fontSize="sm">
										Last Collect Time:
									</Text>
									<Text fontSize="sm">
										{asset?.metrics?.lastUptimeAt != null
											? new Date(asset?.metrics.lastUptimeAt).toLocaleString()
											: "-"}
									</Text>
								</Box>
								<Box>
									<Text as="b" fontSize="sm">
										Current 4G Connection Quality:
									</Text>
									<Text fontSize="sm">
										{asset?.metrics != null ? "Good" : "-"}
									</Text>
								</Box>
							</Flex>
						</Flex>
					</Flex>
					<Box width="100%">
						<Text as="b" fontSize="2xl">
							Health History
						</Text>
						<Flex
							mt="1"
							bg="#FFF"
							padding="5"
							boxShadow="md"
							width="100%"
							justifyContent="center"
							height="200px"
							borderRadius="10"
							border="1px solid #D7D7D7"
						>
							<HealthHistoryGraph healthHistory={asset?.healthHistory} />
						</Flex>
					</Box>
				</Flex>
			)}
		</Card>
	);
};
