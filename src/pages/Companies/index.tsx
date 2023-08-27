import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Spinner,
	useDisclosure,
} from "@chakra-ui/react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Navigate } from "react-router-dom";
import { CompanyListItem } from "../../components/CompanyListItem";
import { SetInfoModal } from "../../components/SetInfoModal";
import { Card } from "../../components/Card";
import { useCompanies } from "../../hooks/companies/useCompanies";
import { useSearch } from "../../hooks/useSearch";

export const Companies = (): JSX.Element => {
	const {
		isOpen: isOpenEdit,
		onOpen: onOpenEdit,
		onClose: onCloseEdit,
	} = useDisclosure();
	const view = localStorage.getItem("view");
	if (view !== "admin") return <Navigate to="/" />;

	const { searchValue, debouncedValue, handleChangedSearchValue } = useSearch();
	const { data: companies, isLoading } = useCompanies({
		searchValue: debouncedValue,
	});

	return (
		<Flex
			width="100%"
			alignItems="center"
			height="100%"
			overflowY="scroll"
			css={{ "::-webkit-scrollbar": { display: "none" } }}
			flexDirection="column"
		>
			<Flex
				width="100%"
				flexWrap="wrap"
				justifyContent="space-between"
				flexDirection="row"
				mb="20px"
			>
				<InputGroup
					width={{ base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%" }}
				>
					<InputLeftElement pointerEvents="none">
						<FiSearch style={{ color: "#1A3071" }} />
					</InputLeftElement>
					<Input
						value={searchValue}
						onChange={(e) => {
							handleChangedSearchValue(e.target.value);
						}}
						borderColor="#bdbdbd"
						placeholder="Company"
						variant="outline"
						_focus={{
							boxShadow: "none",
							outline: "none",
							borderColor: "#7a7a7a",
						}}
					/>
				</InputGroup>
				<Button
					onClick={onOpenEdit}
					mt={{ base: "4", sm: "0" }}
					leftIcon={<FiPlus />}
					width={{ base: "100%", sm: "45%", md: "38%", lg: "28%", xl: "18%" }}
					_hover={{ bg: "#12255d", color: "#FFF" }}
					color="#FFF"
					bg="#1A3071"
				>
					Create Company
				</Button>
			</Flex>
			<Card noPadding width="100%">
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
						flexWrap="wrap"
						paddingX="5"
						width="100%"
						mb="-1px"
					>
						{companies?.map((company) => (
							<CompanyListItem company={company} key={company.id} />
						))}
					</Flex>
				)}
			</Card>

			<SetInfoModal
				view="new"
				type="company"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
			/>
		</Flex>
	);
};
