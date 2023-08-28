import {
	Box,
	Button,
	Checkbox,
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
import {
	type Priority,
	type Status,
	type WorkOrder,
} from "../../interfaces/workOrders";
import { useAssets } from "../../hooks/assets/useAssets";
import { useUsers } from "../../hooks/users/useUsers";
import { useCreateWorkOrder } from "../../hooks/workOrders/useCreateWorkOrders";
import { useUpdateWorkOrder } from "../../hooks/workOrders/useUpdateWorkOrders";
import { type Asset } from "../../interfaces/assets";
import { getObjIdAndEntity } from "../../utils/manipulateDataStructures";
import { type User } from "../../interfaces/users";

interface SetWorkOrderModalProps {
	onClose: () => void;
	isOpen: boolean;
	workOrder?: WorkOrder;
	view: "new" | "edit";
}

export const SetWorkOrderModal = ({
	onClose,
	isOpen,
	workOrder,
	view,
}: SetWorkOrderModalProps): JSX.Element => {
	const labels = categoryLabels.workOrder;
	const [workOrderEdited, setWorkOrderEdited] = useState({
		...workOrder,
		id: workOrder?.id ?? Math.floor(Math.random() * 10000 + 100),
		title: workOrder?.title ?? "",
		description: workOrder?.description ?? "",
		priority: workOrder?.priority ?? ("" as Priority),
		status: workOrder?.status ?? ("" as Status),
		assetId: workOrder?.assetId ?? undefined,
		assignedUserIds: workOrder?.assignedUserIds ?? [],
	});

	const { data: assets } = useAssets({});
	const { data: users } = useUsers({});

	const { mutateAsync: createWorkOrder } = useCreateWorkOrder();
	const handleCreateWorkOrder = async (): Promise<void> => {
		await createWorkOrder(workOrderEdited);
	};

	const { mutateAsync: updateWorkOrder } = useUpdateWorkOrder();
	const handleUpdateWorkOrder = async (): Promise<void> => {
		await updateWorkOrder(workOrderEdited);
	};
	const toast = useToast();

	const handleSetWorkOrder = (): void => {
		(async () => {
			try {
				if (
					workOrderEdited.title === "" ||
					workOrderEdited.description === "" ||
					workOrderEdited.status === ("" as Status) ||
					workOrderEdited.priority === ("" as Priority) ||
					workOrderEdited.assetId == null
				)
					throw Error("");

				if (assets != null && workOrderEdited.assetId != null) {
					const assetsObj = getObjIdAndEntity<Asset>(assets);
					workOrderEdited.asset = assetsObj[workOrderEdited.assetId];
				}
				if (users != null && workOrderEdited.assignedUserIds.length !== 0) {
					const usersObj = getObjIdAndEntity<User>(users);
					workOrderEdited.users = workOrderEdited.assignedUserIds.map(
						(id) => usersObj[id],
					);
				}

				if (view === "new") {
					await handleCreateWorkOrder();
				} else if (view === "edit") {
					await handleUpdateWorkOrder();
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
						<Text as="b">{labels.titleLabel}</Text>
						<Input
							mt="1"
							mb="2"
							width="100%"
							placeholder={labels.titlePlaceholder}
							value={workOrderEdited.title}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setWorkOrderEdited({
									...workOrderEdited,
									title: v.target.value,
								});
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.descriptionLabel}</Text>
						<Input
							mt="1"
							mb="2"
							width="100%"
							placeholder={labels.descriptionPlaceholder}
							value={workOrderEdited.description}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(e) => {
								setWorkOrderEdited({
									...workOrderEdited,
									description: e.target.value,
								});
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.priorityLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setWorkOrderEdited({
									...workOrderEdited,
									priority: e.target.value as Priority,
								});
							}}
							value={workOrderEdited.priority}
							mt={2}
							placeholder={labels.priorityPlaceholder}
						>
							<option value="high">High</option>
							<option value="medium">Medium</option>
							<option value="low">Low</option>
						</Select>
					</Box>
					<Box>
						<Text as="b">{labels.statusLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setWorkOrderEdited({
									...workOrderEdited,
									status: e.target.value as Status,
								});
							}}
							value={workOrderEdited.status}
							mt={2}
							placeholder={labels.statusPlaceholder}
						>
							<option value="not started">Not Started</option>
							<option value="in progress">In Progress</option>
							<option value="completed">Completed</option>
						</Select>
					</Box>
					<Box>
						<Text as="b">{labels.assetLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setWorkOrderEdited({
									...workOrderEdited,
									assetId: Number(e.target.value),
								});
							}}
							value={workOrderEdited.assetId}
							mt={2}
							placeholder={labels.assetPlaceholder}
						>
							{assets?.map((asset) => (
								<option key={asset.id} value={asset.id}>
									{asset.name}
								</option>
							))}
						</Select>
					</Box>
					<Box>
						<Text as="b">{labels.usersLabel}</Text>
						<Flex
							flexDirection="column"
							mt={2}
							height="150px"
							border="1px solid #bdbdbd"
							borderRadius="5"
							paddingX="5"
							paddingY="2"
							overflowY="scroll"
						>
							{users?.map((user) => (
								<Flex
									gap="5"
									align="center"
									borderBottom="1px solid #D7D7D7"
									paddingY="2"
									key={user.id}
								>
									<Checkbox
										onChange={(e) => {
											if (
												e.target.checked &&
												!workOrderEdited.assignedUserIds.includes(user.id)
											) {
												workOrderEdited.assignedUserIds.push(user.id);
											} else if (!e.target.checked) {
												const index = workOrderEdited.assignedUserIds.indexOf(
													user.id,
												);
												if (index > -1) {
													workOrderEdited.assignedUserIds.splice(index, 1);
												}
											}
										}}
										defaultChecked={workOrderEdited.assignedUserIds.includes(
											user.id,
										)}
									/>
									<Text>{user.name}</Text>
								</Flex>
							))}
						</Flex>
					</Box>
					<Button
						bg="#1A3071"
						mt="7"
						alignSelf="flex-end"
						_hover={{ bg: "#12255d", color: "#FFF" }}
						color="#FFF"
						onClick={handleSetWorkOrder}
					>{`${view === "new" ? "Create" : "Edit"}`}</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};
