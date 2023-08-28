import {
	Image,
	Box,
	Flex,
	Text,
	useDisclosure,
	Collapse,
	CircularProgress,
	CircularProgressLabel,
	AvatarGroup,
	Avatar,
	Checkbox,
	Input,
	Button,
	Show,
	Progress,
	useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
	FiChevronUp,
	FiChevronDown,
	FiEdit,
	FiEye,
	FiPlus,
	FiTrash2,
} from "react-icons/fi";
import { DeleteModal } from "../DeleteModal";
import { useState } from "react";
import { type TaskItem, type WorkOrder } from "../../interfaces/workOrders";
import { useDeleteWorkOrder } from "../../hooks/workOrders/useDeleteWorkOrders";
import { workOrderPriority } from "../../utils/enums/workOrderPriority";
import { workOrderStatus } from "../../utils/enums/workOrderStatus";
import { SetWorkOrderModal } from "../SetInfoModal/SetWorkOrderModal";
import { useUpdateWorkOrder } from "../../hooks/workOrders/useUpdateWorkOrders";

const getProgressStatus = (tasks?: TaskItem[]): number => {
	if (tasks == null || tasks.length === 0) return 100;
	const completed = tasks.reduce((value, task) => {
		if (task.completed) value += 1;
		return value;
	}, 0);

	return Math.trunc((completed * 100) / tasks.length);
};

interface WorkOrderListItemProps {
	workOrder: WorkOrder;
	index?: number;
}

export const WorkOrderListItem = ({
	workOrder,
	index,
}: WorkOrderListItemProps): JSX.Element => {
	const navigate = useNavigate();
	const {
		isOpen: isOpenEdit,
		onOpen: onOpenEdit,
		onClose: onCloseEdit,
	} = useDisclosure();
	const {
		isOpen: isOpenDelete,
		onOpen: onOpenDelete,
		onClose: onCloseDelete,
	} = useDisclosure();
	const [collapsed, setCollapsed] = useState(index === 0);
	const [newTask, setNewTasks] = useState("");
	const [workOrderEdited, setWorkOrderEdited] = useState({
		...workOrder,
		id: workOrder.id,
		checklist: workOrder.checklist ?? [],
	});

	const { mutateAsync: updateWorkOrder } = useUpdateWorkOrder();
	const handleUpdateWorkOrder = async (): Promise<void> => {
		await updateWorkOrder(workOrderEdited);
	};

	const { mutateAsync: deleteWorkOrder } = useDeleteWorkOrder();

	const handleDeleteWorkOrder = async (): Promise<void> => {
		await deleteWorkOrder(workOrder);
	};

	const toast = useToast();

	const handleCreateNewTask = (): void => {
		(async () => {
			try {
				if (newTask === "") throw Error("");
				workOrderEdited.checklist?.push({ completed: false, task: newTask });
				await handleUpdateWorkOrder();
				setNewTasks("");
			} catch (err) {
				toast({
					title: "Error",
					description: "Error! Try to create a non empty task.",
					status: "error",
					position: "bottom-right",
					duration: 3000,
				});
			}
		})().catch(() => {});
	};

	return (
		<Flex
			flexDirection="column"
			flexWrap="wrap"
			justifyContent="space-between"
			alignItems="center"
			paddingX="0px"
			width="100%"
			borderBottom="1px solid #D7D7D7"
		>
			<Flex
				flexDirection="row"
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				paddingX={{ base: "4", sm: "10" }}
				paddingY="5"
				bg="#FFF"
				borderBottom="1px solid #D7D7D7"
			>
				<Flex flexDirection="column">
					<Flex flexDirection="row" gap="3" alignItems="center">
						<Image
							cursor="pointer"
							borderRadius="10"
							fit="cover"
							width={{ base: "50px", sm: "80px" }}
							height={{ base: "50px", sm: "80px" }}
							src={workOrder.asset?.image}
						/>

						<Flex flexDirection="column" justifyContent="center">
							<Text as="b" fontSize="md" isTruncated>
								{workOrder.title ?? "-"}
							</Text>
							<Text
								fontSize={{ base: "x-small", sm: "sm" }}
								width={{ base: "90%", lg: "75%" }}
							>
								{workOrder.description ?? "-"}
							</Text>
						</Flex>
					</Flex>
					<Show below="lg">
						<Progress
							mt="3"
							colorScheme="facebook"
							value={getProgressStatus(workOrderEdited.checklist)}
						/>
					</Show>
				</Flex>
				<Flex
					flexDirection="row"
					alignItems="center"
					gap={{ base: "5", lg: "20" }}
				>
					<Show above="lg">
						<CircularProgress
							value={getProgressStatus(workOrderEdited.checklist)}
							color="#1A3071"
						>
							<CircularProgressLabel>
								{getProgressStatus(workOrderEdited.checklist)}%
							</CircularProgressLabel>
						</CircularProgress>
					</Show>
					<Box
						onClick={() => {
							setCollapsed(!collapsed);
						}}
						cursor="pointer"
					>
						{!collapsed && <FiChevronUp size="20" color="#000" />}
						{collapsed && <FiChevronDown size="20" color="#000" />}
					</Box>
				</Flex>
			</Flex>
			<Box
				as={Collapse}
				in={collapsed}
				animateOpacity
				width="100%"
				bg="#F8F8F8"
			>
				<Flex
					flexDirection="row"
					flexWrap="wrap"
					py="5"
					px="3"
					alignItems="flex-start"
					justifyContent="space-between"
				>
					<Flex
						my="0"
						mx="auto"
						flexDirection="column"
						width={{ base: "100%", lg: "30%" }}
						height="166px"
						overflowY="scroll"
						bg="#FFF"
						padding="2"
						borderRadius="5"
						border="1px solid #D7D7D7"
					>
						<Flex mb="3" borderBottom="1px solid #D7D7D7" pb="2">
							<Input
								px="1"
								maxLength={25}
								value={newTask}
								onChange={(e) => {
									setNewTasks(e.target.value);
								}}
								placeholder="Create new task"
								variant="unstyled"
							/>
							<Button
								size="sm"
								variant="outline"
								onClick={handleCreateNewTask}
								_hover={{ bg: "#12255d", color: "#FFF" }}
								color="#FFF"
								bg="#1A3071"
							>
								<FiPlus color="#FFF" size="15" />
							</Button>
						</Flex>
						{workOrderEdited.checklist?.map((task) => (
							<Flex
								key={task.task}
								alignItems="center"
								justifyContent="space-between"
								mb="1"
							>
								<Flex gap="2">
									<Checkbox
										colorScheme="green"
										onChange={(e) => {
											const index = workOrderEdited.checklist?.findIndex(
												(currTask) => currTask.task === task.task,
											);
											const checklist = workOrderEdited.checklist;
											if (checklist != null && index != null && index > -1) {
												if (e.target.checked) {
													checklist[index].completed = true;
												} else {
													checklist[index].completed = false;
												}
												setWorkOrderEdited({
													...workOrderEdited,
													checklist,
												});
											}
										}}
										defaultChecked={task.completed}
									/>
									<Text fontSize="sm" isTruncated>
										{task.task}
									</Text>
								</Flex>
								<Box
									cursor="pointer"
									onClick={() => {
										let checklist = workOrderEdited.checklist;
										if (checklist != null) {
											checklist = checklist.filter(
												(currTask) => task.task !== currTask.task,
											);
											setWorkOrderEdited({
												...workOrderEdited,
												checklist,
											});
										}
									}}
								>
									<FiTrash2 color="#1A3071" />
								</Box>
							</Flex>
						))}
					</Flex>
					<Flex
						flexDirection="column"
						gap={{ base: "3", lg: "5" }}
						mt={{ base: "3", lg: "unset" }}
						width={{ base: "100%", lg: "65%" }}
					>
						<Flex
							flexDirection="row"
							flexWrap="wrap-reverse"
							gap={{ base: "2", lg: "unset" }}
							justifyContent="space-between"
						>
							<Flex
								width={{ base: "100%", md: "49%" }}
								gap={{ base: "8", lg: "5" }}
							>
								<Box>
									<Text as="b" fontSize="lg">
										Priority
									</Text>

									<Box
										bg={
											workOrder.priority != null
												? workOrderPriority[workOrder.priority].color
												: "#1A3071"
										}
										mt="1"
										py="1"
										width="100px"
										textAlign="center"
										borderRadius="5"
										color="#FFF"
									>
										<Text as="b" fontSize="sm">
											{workOrder.priority != null
												? workOrderPriority[workOrder.priority].label
												: "No Information"}
										</Text>
									</Box>
								</Box>
								<Box>
									<Text as="b" fontSize="lg">
										Status
									</Text>

									<Box
										bg={
											workOrder.status != null
												? workOrderStatus[workOrder.status].color
												: "#1A3071"
										}
										mt="1"
										py="1"
										width="100px"
										textAlign="center"
										borderRadius="5"
										color="#FFF"
									>
										<Text as="b" fontSize="sm">
											{workOrder.status != null
												? workOrderStatus[workOrder.status].label
												: "No Information"}
										</Text>
									</Box>
								</Box>
							</Flex>
							<Box width={{ base: "100%", md: "49%" }}>
								<Text as="b" fontSize="lg">
									Description
								</Text>
								<Box mt="1">
									<Text fontSize="sm">{workOrder.description ?? "-"}</Text>
								</Box>
							</Box>
						</Flex>
						<Flex
							flexDirection="row"
							flexWrap="wrap"
							gap={{ base: "2", lg: "unset" }}
							justifyContent="space-between"
						>
							<Box width={{ base: "100%", md: "49%" }}>
								<Text as="b" fontSize="lg">
									Actions
								</Text>
								<Flex gap={{ base: "7", lg: "6" }} mt="1">
									<Flex
										gap="2"
										cursor="pointer"
										onClick={() => {
											workOrder.assetId != null &&
												navigate(`/assets/${workOrder.assetId}`);
										}}
										alignItems="center"
									>
										<FiEye color="#1A3071" />
										<Text fontSize="sm">Asset</Text>
									</Flex>
									<Flex
										gap="2"
										mt="1"
										cursor="pointer"
										onClick={() => {
											onOpenEdit();
										}}
										alignItems="center"
									>
										<FiEdit color="#1A3071" />
										<Text fontSize="sm">Edit</Text>
									</Flex>
									<Flex
										gap="2"
										mt="1"
										cursor="pointer"
										onClick={() => {
											onOpenDelete();
										}}
										alignItems="center"
									>
										<FiTrash2 color="#1A3071" />
										<Text fontSize="sm">Delete</Text>
									</Flex>
								</Flex>
							</Box>
							<Box width={{ base: "100%", md: "49%" }}>
								<Text as="b" fontSize="lg">
									Users
								</Text>
								<Box mt="1">
									<AvatarGroup size="sm" max={4}>
										{workOrder.users?.map((user) => (
											<Avatar
												key={user.id}
												name={user.name}
												color="#FFF"
												bg="#1A3071"
											/>
										))}
									</AvatarGroup>
								</Box>
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Box>
			<DeleteModal
				type="workOrder"
				isOpen={isOpenDelete}
				onClose={onCloseDelete}
				handleDelete={handleDeleteWorkOrder}
			/>
			<SetWorkOrderModal
				view="edit"
				workOrder={workOrder}
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
			/>
		</Flex>
	);
};
