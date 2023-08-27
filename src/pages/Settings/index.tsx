import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Select } from "@chakra-ui/select";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import { useCompanies } from "../../hooks/companies/useCompanies";

export const Settings = (): JSX.Element => {
	const storedView = localStorage.getItem("view") ?? "admin";
	const [visualization, setVisualization] = useState(storedView);
	const storedCompany = localStorage.getItem("company") ?? "";
	const [company, setCompany] = useState(storedCompany);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const toast = useToast();
	const { data: companies, isLoading } = useCompanies({});

	const handleSubmit = (): void => {
		setIsSubmitting(true);
		setTimeout(() => {
			if (visualization === "admin") {
				localStorage.setItem("view", "admin");
				localStorage.removeItem("company");
			} else {
				if (company === "" || company == null) {
					toast({
						title: "Error",
						description: "You must select a company!",
						status: "error",
						position: "bottom-right",
						duration: 3000,
					});
					setIsSubmitting(false);
					return;
				}
				localStorage.setItem("view", "simulated");
				localStorage.setItem("company", company);
			}
			toast({
				title: "Success",
				description: "Changes made successfully!",
				status: "success",
				position: "bottom-right",
				duration: 3000,
			});
			setIsSubmitting(false);
			window.location.reload();
		}, 800);
	};

	return (
		<>
			{(isLoading || isSubmitting) && (
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
			{!isLoading && !isSubmitting && (
				<Stack width={{ base: "100%", sm: "300px" }}>
					<FormControl>
						<FormLabel>
							<Text as="b">Dashboard Visualization:</Text>
						</FormLabel>
						<RadioGroup
							width="100%"
							value={visualization}
							onChange={(v) => {
								setVisualization(v);
								if (v === "admin") {
									setCompany("");
								}
							}}
						>
							<Stack
								direction="row"
								justifyContent="space-between"
								width="100%"
							>
								<Radio _checked={{ bg: "#1A3071" }} value="admin">
									Tractian Admin
								</Radio>
								<Radio _checked={{ bg: "#1A3071" }} value="simulated">
									Simulated
								</Radio>
							</Stack>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<Select
							onChange={(e) => {
								setCompany(e.target.value);
							}}
							value={company}
							mt={2}
							disabled={visualization === "admin"}
							placeholder="Select a company"
						>
							{companies?.map((company) => (
								<option key={company.id} value={company.id}>
									{company.name}
								</option>
							))}
						</Select>
					</FormControl>
					<Button
						onClick={handleSubmit}
						_hover={{ bg: "#0D1528" }}
						alignSelf="flex-end"
						width={{ base: "100%", sm: "30%" }}
						mt={2}
						bg="#1A3071"
						color="#fff"
					>
						Save
					</Button>
				</Stack>
			)}
		</>
	);
};
