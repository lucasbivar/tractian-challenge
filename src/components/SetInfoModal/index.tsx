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
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { categoryLabels } from "../../lib/enums/setInfoCategory";
import { useState } from "react";

interface SetUnitModalProps {
	onClose: () => void;
	isOpen: boolean;
	name?: string;
	email?: string;
	view: "new" | "edit";
	type: "unit" | "company" | "user" | "asset" | "workOrder";
}

export const SetInfoModal = ({
	onClose,
	isOpen,
	name,
	email,
	view,
	type,
}: SetUnitModalProps): JSX.Element => {
	const labels = categoryLabels[type];
	const [priority, setPriority] = useState("");
	const [status, setStatus] = useState("");

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
							value={name}
							borderColor="#bdbdbd"
							variant="outline"
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					{type === "user" && (
						<Box>
							<Text as="b">{labels.emailLabel}</Text>
							<Input
								mt="1"
								mb="2"
								width="100%"
								placeholder={labels.emailPlaceholder}
								value={email}
								borderColor="#bdbdbd"
								variant="outline"
								_focus={{
									boxShadow: "none",
									outline: "none",
									borderColor: "#7a7a7a",
								}}
							/>
						</Box>
					)}
					{type === "workOrder" && (
						<>
							<Box>
								<Text as="b">{labels.descriptionLabel}</Text>
								<Input
									mt="1"
									mb="2"
									width="100%"
									placeholder={labels.descriptionPlaceholder}
									value={email}
									borderColor="#bdbdbd"
									variant="outline"
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
										setPriority(e.target.value);
									}}
									value={priority}
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
										setStatus(e.target.value);
									}}
									value={status}
									mt={2}
									placeholder={labels.statusPlaceholder}
								>
									<option value="notStarted">Not Started</option>
									<option value="inProgress">In Progress</option>
									<option value="completed">Completed</option>
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
									<Flex
										gap="5"
										align="center"
										borderBottom="1px solid #D7D7D7"
										paddingY="2"
									>
										<Checkbox />
										<Text> Lucas Bivar</Text>
									</Flex>
									<Flex
										gap="5"
										align="center"
										borderBottom="1px solid #D7D7D7"
										paddingY="2"
									>
										<Checkbox />
										<Text> Lucas Bivar</Text>
									</Flex>
									<Flex
										gap="5"
										align="center"
										borderBottom="1px solid #D7D7D7"
										paddingY="2"
									>
										<Checkbox />
										<Text> Lucas Bivar</Text>
									</Flex>
									<Flex
										gap="5"
										align="center"
										borderBottom="1px solid #D7D7D7"
										paddingY="2"
									>
										<Checkbox />
										<Text> Lucas Bivar</Text>
									</Flex>
								</Flex>
							</Box>
						</>
					)}
					{type === "asset" && (
						<>
							<Box>
								<Text as="b">{labels.modelLabel}</Text>
								<Input
									mt="1"
									mb="2"
									width="100%"
									placeholder={labels.modelPlaceholder}
									value={email}
									borderColor="#bdbdbd"
									variant="outline"
									_focus={{
										boxShadow: "none",
										outline: "none",
										borderColor: "#7a7a7a",
									}}
								/>
							</Box>
							<Box>
								<Text as="b">{labels.sensorLabel}</Text>
								<Input
									mt="1"
									mb="2"
									width="100%"
									placeholder={labels.sensorPlaceholder}
									value={email}
									borderColor="#bdbdbd"
									variant="outline"
									_focus={{
										boxShadow: "none",
										outline: "none",
										borderColor: "#7a7a7a",
									}}
								/>
							</Box>
						</>
					)}
					<Button
						bg="#1A3071"
						mt="7"
						alignSelf="flex-end"
						_hover={{ bg: "#12255d", color: "#FFF" }}
						color="#FFF"
						onClick={onClose}
					>{`${view === "new" ? "Create" : "Edit"}`}</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};
