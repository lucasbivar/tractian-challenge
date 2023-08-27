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
import { SetInfoModal } from "../../components/SetInfoModal";
import { Card } from "../../components/Card";
import { AssetListItem } from "../../components/AssetListItem";
import { useAssets } from "../../hooks/assets/useAssets";
import { useSearch } from "../../hooks/useSearch";

export const Assets = (): JSX.Element => {
	const {
		isOpen: isOpenEdit,
		onOpen: onOpenEdit,
		onClose: onCloseEdit,
	} = useDisclosure();
	const { searchValue, debouncedValue, handleChangedSearchValue } = useSearch();

	const { data: assets, isLoading } = useAssets({
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
						placeholder="Assets"
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
					Create Asset
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
					<Flex flexDirection="column" flexWrap="wrap" width="100%" mb="-1px">
						{assets?.map((asset) => (
							<AssetListItem key={asset.id} asset={asset} />
						))}
					</Flex>
				)}
			</Card>

			<SetInfoModal
				view="new"
				type="asset"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
			/>
		</Flex>
	);
};
