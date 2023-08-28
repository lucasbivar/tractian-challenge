import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { UnitCard } from "../../components/UnitCard";
import { useCompany } from "../../hooks/companies/useCompanies";
import { useParams } from "react-router-dom";

export const CompanyProfile = (): JSX.Element => {
	const { id } = useParams();
	const { data: company, isLoading } = useCompany(Number(id));

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
				<Flex flexDirection="column" height="100%" width="100%">
					<Flex
						bg="#1A3071"
						paddingLeft="10"
						justifyContent="center"
						alignItems="flex-start"
						flexDirection="column"
						height="100px"
						width="100%"
					>
						<Box mb="15">
							<Text color="#FFF" as="b" fontSize={{ base: "2xl", sm: "4xl" }}>
								{company?.name}
							</Text>
						</Box>
					</Flex>
					<Flex
						flexDirection="column"
						height="100%"
						width="100%"
						paddingX="10"
						paddingY="8"
					>
						<Text as="b" fontSize="2xl">
							Units
						</Text>
						<Flex
							mt="5"
							flexDirection="row"
							gap={5}
							flexWrap="wrap"
							width="100%"
						>
							{company?.units?.map((unit) => (
								<UnitCard key={unit.id} disableEdit unit={unit} />
							))}
						</Flex>
					</Flex>
				</Flex>
			)}
		</Card>
	);
};
