import {
	Box,
	Button,
	Flex,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Select,
	Text,
	useToast,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { categoryLabels } from "../../utils/enums/setInfoCategory";
import { useState } from "react";
import { type Unit } from "../../interfaces/units";
import { useCreateUnit } from "../../hooks/units/useCreateUnits";
import { useUpdateUnit } from "../../hooks/units/useUpdateUnits";
import { fakeGeolocalizations, urlFakeUnitImage } from "../../services/units";
import { useCompanies } from "../../hooks/companies/useCompanies";

interface SetUnitModalProps {
	onClose: () => void;
	isOpen: boolean;
	unit?: Unit;
	view: "new" | "edit";
}

export const SetUnitModal = ({
	onClose,
	isOpen,
	unit,
	view,
}: SetUnitModalProps): JSX.Element => {
	const labels = categoryLabels.unit;
	const [unitEdited, setUnitEdited] = useState({
		...unit,
		id: unit?.id ?? Math.floor(Math.random() * 10000 + 100),
		name: unit?.name ?? "",
		companyId: unit?.companyId ?? undefined,
		image: unit?.image ?? urlFakeUnitImage,
		geolocalization:
			unit?.geolocalization ??
			fakeGeolocalizations[(fakeGeolocalizations.length * Math.random()) | 0],
	});

	const { data: companies } = useCompanies({});

	const { mutateAsync: createUnit } = useCreateUnit();
	const handleCreateUnit = async (): Promise<void> => {
		await createUnit(unitEdited);
	};

	const { mutateAsync: updateUnit } = useUpdateUnit();
	const handleUpdateUnit = async (): Promise<void> => {
		await updateUnit(unitEdited);
	};
	const toast = useToast();

	const handleSetCompany = (): void => {
		(async () => {
			try {
				if (unitEdited.name === "") throw Error("");

				if (view === "new") {
					await handleCreateUnit();
				} else if (view === "edit") {
					await handleUpdateUnit();
				}
				toast({
					title: "Success",
					description:
						view === "new"
							? labels.successCreateMessage
							: labels.successEditMessage,
					status: "success",
					position: "bottom-right",
					duration: 3000,
				});
				onClose();
			} catch (err) {
				toast({
					title: "Error",
					description:
						view === "new"
							? labels.errorCreateMessage
							: labels.errorEditMessage,
					status: "error",
					position: "bottom-right",
					duration: 3000,
				});
			}
		})().catch(() => {});
	};

	return (
		<Modal onClose={onClose} isOpen={isOpen} isCentered>
			<ModalOverlay />
			<ModalContent
				width={{ base: "90%", sm: "80%" }}
				borderRadius={10}
				padding="8"
				bg="#FFF"
				borderTop="15px solid #1A3071"
			>
				<Flex flexDirection="column" width="100%">
					<Flex
						flexDirection="row"
						justifyContent="space-between"
						mb="5"
						alignItems="center"
					>
						<Text fontSize="xl" as="b">
							{view === "new" ? labels.newTitle : labels.editTitle}
						</Text>
						<Box onClick={onClose}>
							<FiX color="#1A3071" />
						</Box>
					</Flex>
					<Box>
						<Text as="b">{labels.nameLabel}</Text>
						<Input
							mt="1"
							mb="2"
							width="100%"
							placeholder={labels.namePlaceholder}
							value={unitEdited.name}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setUnitEdited({ ...unitEdited, name: v.target.value });
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.companyLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setUnitEdited({
									...unitEdited,
									companyId: Number(e.target.value) ?? undefined,
								});
							}}
							value={unitEdited.companyId}
							mt={2}
							placeholder={labels.companyPlaceholder}
						>
							{companies?.map((company) => (
								<option key={company.id} value={company.id}>
									{company.name}
								</option>
							))}
						</Select>
					</Box>
					<Button
						bg="#1A3071"
						mt="7"
						alignSelf="flex-end"
						_hover={{ bg: "#12255d", color: "#FFF" }}
						color="#FFF"
						onClick={handleSetCompany}
					>{`${view === "new" ? "Create" : "Edit"}`}</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};
