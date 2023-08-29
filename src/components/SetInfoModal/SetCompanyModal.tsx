import {
	Box,
	Button,
	Flex,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	useToast,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { categoryLabels } from "../../utils/enums/setInfoCategory";
import { type Company } from "../../interfaces/companies";
import { useState } from "react";
import { useCreateCompany } from "../../hooks/companies/useCreateCompanies";
import { useUpdateCompany } from "../../hooks/companies/useUpdateCompanies";
import { validateCompany } from "../../validations/companies";

interface SetCompanyModalProps {
	onClose: () => void;
	isOpen: boolean;
	company?: Company;
	view: "new" | "edit";
}

export const SetCompanyModal = ({
	onClose,
	isOpen,
	company,
	view,
}: SetCompanyModalProps): JSX.Element => {
	const labels = categoryLabels.company;
	const [companyEdited, setCompanyEdited] = useState({
		id: company?.id ?? Math.floor(Math.random() * 10000 + 100),
		name: company?.name ?? "",
	});

	const { mutateAsync: createCompany } = useCreateCompany();
	const handleCreateCompany = async (): Promise<void> => {
		await createCompany(companyEdited);
	};

	const { mutateAsync: updateCompany } = useUpdateCompany();
	const handleUpdateCompany = async (): Promise<void> => {
		await updateCompany(companyEdited);
	};
	const toast = useToast();

	const handleSetCompany = (): void => {
		(async () => {
			try {
				validateCompany(companyEdited);

				if (view === "new") {
					await handleCreateCompany();
				} else if (view === "edit") {
					await handleUpdateCompany();
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
				if (company == null) {
					setCompanyEdited({ ...companyEdited, name: "" });
				}
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
		<Modal
			onClose={() => {
				if (company == null) {
					setCompanyEdited({ ...companyEdited, name: "" });
				}
				onClose();
			}}
			isOpen={isOpen}
			isCentered
		>
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
							value={companyEdited.name}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setCompanyEdited({ ...companyEdited, name: v.target.value });
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
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
