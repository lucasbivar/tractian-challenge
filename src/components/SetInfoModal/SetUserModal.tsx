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
import { type User } from "../../interfaces/users";
import { useCreateUser } from "../../hooks/users/useCreateUsers";
import { useUpdateUser } from "../../hooks/users/useUpdateUsers";
import { useUnits } from "../../hooks/units/useUnits";
import { getObjIdAndEntity } from "../../utils/manipulateDataStructures";
import { type Unit } from "../../interfaces/units";
import { validateUser } from "../../validations/users";

interface SetUserModalProps {
	onClose: () => void;
	isOpen: boolean;
	user?: User;
	view: "new" | "edit";
}

export const SetUserModal = ({
	onClose,
	isOpen,
	user,
	view,
}: SetUserModalProps): JSX.Element => {
	const labels = categoryLabels.user;
	const [userEdited, setUserEdited] = useState({
		...user,
		id: user?.id ?? Math.floor(Math.random() * 10000 + 100),
		name: user?.name ?? "",
		email: user?.email ?? "",
		companyId: user?.companyId ?? undefined,
		companyName: user?.companyName ?? undefined,
		unitId: user?.unitId ?? undefined,
		unitName: user?.unitName ?? undefined,
	});

	const { data: units } = useUnits({});

	const { mutateAsync: createUser } = useCreateUser();
	const handleCreateUser = async (): Promise<void> => {
		await createUser(userEdited);
	};

	const { mutateAsync: updateUser } = useUpdateUser();
	const handleUpdateUser = async (): Promise<void> => {
		await updateUser(userEdited);
	};
	const toast = useToast();

	const handleSetUser = (): void => {
		(async () => {
			try {
				validateUser(userEdited);

				if (units != null && userEdited.unitId != null) {
					const unitsObj = getObjIdAndEntity<Unit>(units);
					userEdited.unitName = unitsObj[userEdited.unitId].name;
					userEdited.companyId = unitsObj[userEdited.unitId].company?.id;
					userEdited.companyName = unitsObj[userEdited.unitId].company?.name;
				}

				if (view === "new") {
					await handleCreateUser();
				} else if (view === "edit") {
					await handleUpdateUser();
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
				if (user == null)
					setUserEdited({
						...userEdited,
						name: "",
						email: "",
						unitId: undefined,
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
		<Modal
			onClose={() => {
				if (user == null)
					setUserEdited({
						...userEdited,
						name: "",
						email: "",
						unitId: undefined,
					});
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
							value={userEdited.name}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setUserEdited({ ...userEdited, name: v.target.value });
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.emailLabel}</Text>
						<Input
							mt="1"
							mb="2"
							width="100%"
							placeholder={labels.emailPlaceholder}
							value={userEdited.email}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setUserEdited({ ...userEdited, email: v.target.value });
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.unitLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setUserEdited({
									...userEdited,
									unitId: Number(e.target.value) ?? undefined,
								});
							}}
							value={userEdited.unitId}
							mt={2}
							placeholder={labels.unitPlaceholder}
						>
							{units?.map((unit) => (
								<option key={unit.id} value={unit.id}>
									{unit.name}
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
						onClick={handleSetUser}
					>{`${view === "new" ? "Create" : "Edit"}`}</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};
