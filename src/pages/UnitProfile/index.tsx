import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { AssetMiniCard } from "../../components/AssetMiniCard";
import { ProfileMiniCard } from "../../components/ProfileMiniCard ";
import { useNavigate, useParams } from "react-router-dom";
import { useUnit } from "../../hooks/units/useUnits";
import { AssetHealthGrapth } from "../../components/AssetsHealthGraph";
import { AssetsStatusHealthGraph } from "../../components/AssetsStatusHealthGraph";

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
								<AssetsStatusHealthGraph assets={unit?.assets} />
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
								<AssetHealthGrapth assets={unit?.assets} />
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
