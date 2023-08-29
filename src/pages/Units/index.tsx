import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Spinner,
	useDisclosure,
} from "@chakra-ui/react";
import { UnitCard } from "../../components/UnitCard";
import { FiSearch, FiPlus } from "react-icons/fi";
import { useUnits } from "../../hooks/units/useUnits";
import { useSearch } from "../../hooks/useSearch";
import { SetUnitModal } from "../../components/SetInfoModal/SetUnitModal";
import { NoDataFound } from "../../components/NoDataFound";

export const Units = (): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { searchValue, debouncedValue, handleChangedSearchValue } = useSearch();
	const { data: units, isLoading } = useUnits({ searchValue: debouncedValue });

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
						placeholder="Unit"
						variant="outline"
						_focus={{
							boxShadow: "none",
							outline: "none",
							borderColor: "#7a7a7a",
						}}
					/>
				</InputGroup>
				<Button
					onClick={onOpen}
					mt={{ base: "4", sm: "0" }}
					leftIcon={<FiPlus />}
					width={{ base: "100%", sm: "45%", md: "38%", lg: "28%", xl: "18%" }}
					_hover={{ bg: "#12255d", color: "#FFF" }}
					color="#FFF"
					bg="#1A3071"
				>
					Create Unit
				</Button>
			</Flex>
			<Flex
				flexDirection="row"
				gap={{ base: "2", sm: "5", md: "6", lg: "8", xl: "2%" }}
				flexWrap="wrap"
				width="100%"
				mb="50px"
			>
				{!isLoading && !units?.length && <NoDataFound />}
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
					<>{units?.map((unit) => <UnitCard key={unit.id} unit={unit} />)}</>
				)}
			</Flex>
			<SetUnitModal view="new" isOpen={isOpen} onClose={onClose} />
		</Flex>
	);
};
