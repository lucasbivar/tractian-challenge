import { Avatar, Box, Flex, Show, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { DeleteModal } from "../DeleteModal";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { type User } from "../../interfaces/users";
import { useDeleteUser } from "../../hooks/users/useDeleteUser";
import { SetUserModal } from "../SetInfoModal/SetUserModal";

interface UserListItemProps {
	user: User;
}

export const UserListItem = ({ user }: UserListItemProps): JSX.Element => {
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
	const { mutateAsync: deleteUser } = useDeleteUser();

	const handleDeleteUser = async (): Promise<void> => {
		await deleteUser(user);
	};

	return (
		<Flex
			flexDirection="row"
			flexWrap="wrap"
			justifyContent="space-between"
			alignItems="center"
			paddingX="0px"
			paddingY="25px"
			width="100%"
			borderBottom="1px solid #D7D7D7"
		>
			<Flex
				flexDirection="row"
				width={{
					base: "100%",
					sm: "100%",
					md: "180px",
					lg: "200px",
					xl: "300px",
				}}
				gap="3"
				alignItems="center"
			>
				<Avatar name={user.name} bg="#1A3071" color="#FFF" />

				<Flex flexDirection="column" justifyContent="center">
					<Text as="b" fontSize="md" isTruncated>
						{user.name}
					</Text>
					<Text fontSize="sm" isTruncated>
						{user.email}
					</Text>
				</Flex>
			</Flex>
			<Flex
				justifyContent="space-between"
				width={{
					base: "100%",
					sm: "100%",
					md: "170px",
					lg: "350px",
					xl: "540px",
				}}
				mt={{ base: "2", sm: "2", md: "0", lg: "0", xl: "0" }}
			>
				<Show above="md">
					<Flex flexDirection="column" width="50%" justifyContent="center">
						<Text as="b" fontSize="md">
							Company
						</Text>
						<Text
							cursor="pointer"
							onClick={() => {
								user.companyId != null &&
									navigate(`/companies/${user.companyId}`);
							}}
							fontSize="sm"
							isTruncated
						>
							{user.companyName ?? "-"}
						</Text>
					</Flex>
					<Flex flexDirection="column" width="50%" justifyContent="center">
						<Text as="b" fontSize="md">
							Unit
						</Text>
						<Text
							fontSize="sm"
							cursor="pointer"
							onClick={() => {
								user.unitId != null && navigate(`/units/${user.unitId}`);
							}}
							isTruncated
						>
							{user.unitName ?? "-"}
						</Text>
					</Flex>
				</Show>
				<Show above="base" below="md">
					<Flex flexDirection="column" gap="1" marginLeft="60px" width="100%">
						<Flex
							flexDirection="row"
							width="100%"
							justifyContent="space-between"
							alignItems="center"
						>
							<Flex flexDirection="row" alignItems="center" gap="2">
								<Box>
									<BsBank color="#1A3071" />
								</Box>
								<Text
									cursor="pointer"
									onClick={() => {
										user.companyId != null &&
											navigate(`/companies/${user.companyId}`);
									}}
									fontSize="sm"
								>
									{user.companyName ?? "-"}
								</Text>
							</Flex>
							<Box
								onClick={(e) => {
									e.stopPropagation();
									onOpenEdit();
								}}
							>
								<FiEdit color="#1A3071" size="20" />
							</Box>
						</Flex>
						<Flex
							flexDirection="row"
							width="100%"
							justifyContent="space-between"
							alignItems="center"
						>
							<Flex flexDirection="row" alignItems="center" gap="2">
								<Box>
									<MdOutlineStoreMallDirectory color="#1A3071" />
								</Box>
								<Text
									cursor="pointer"
									onClick={() => {
										user.unitId != null && navigate(`/units/${user.unitId}`);
									}}
									fontSize="sm"
								>
									{user.unitName ?? "-"}
								</Text>
							</Flex>
							<Box
								onClick={(e) => {
									e.stopPropagation();
									onOpenDelete();
								}}
							>
								<FiTrash2 color="#ED3833" size="20" />
							</Box>
						</Flex>
					</Flex>
				</Show>
			</Flex>
			<Show above="md">
				<Flex
					gap="3"
					justifyContent="center"
					width={{
						base: "100%",
						sm: "100%",
						md: "auto",
						lg: "auto",
						xl: "auto",
					}}
				>
					<Box
						cursor="pointer"
						onClick={(e) => {
							e.stopPropagation();
							onOpenEdit();
						}}
					>
						<FiEdit color="#1A3071" size="20" />
					</Box>
					<Box
						cursor="pointer"
						onClick={(e) => {
							e.stopPropagation();
							onOpenDelete();
						}}
					>
						<FiTrash2 color="#ED3833" size="20" />
					</Box>
				</Flex>
			</Show>
			<SetUserModal
				view="edit"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
				user={user}
			/>
			<DeleteModal
				type="user"
				handleDelete={handleDeleteUser}
				isOpen={isOpenDelete}
				onClose={onCloseDelete}
			/>
		</Flex>
	);
};
