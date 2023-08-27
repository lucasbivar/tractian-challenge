import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { DeleteModal } from "../DeleteModal";
import { type Company } from "../../interfaces/companies";
import { useDeleteCompany } from "../../hooks/companies/useDeleteCompanies";
import { SetCompanyModal } from "../SetInfoModal/SetCompanyModal";

interface CompanyListItemProps {
	company: Company;
}

export const CompanyListItem = ({
	company,
}: CompanyListItemProps): JSX.Element => {
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

	const { mutateAsync: deleteCompany } = useDeleteCompany();

	const handleDeleteCompany = async (): Promise<void> => {
		await deleteCompany(company);
	};

	return (
		<Flex
			cursor="pointer"
			flexDirection="row"
			onClick={() => {
				navigate(`/companies/${company.id}`);
			}}
			justifyContent="space-between"
			alignItems="center"
			paddingX="0px"
			paddingY="25px"
			width="100%"
			borderBottom="1px solid #D7D7D7"
		>
			<Box>
				<Text as="b" fontSize="md" isTruncated>
					{company.name}
				</Text>
			</Box>
			<Flex gap="3">
				<Box
					onClick={(e) => {
						e.stopPropagation();
						onOpenEdit();
					}}
				>
					<FiEdit color="#1A3071" size="20" />
				</Box>
				<Box
					onClick={(e) => {
						e.stopPropagation();
						onOpenDelete();
					}}
				>
					<FiTrash2 color="#ED3833" size="20" />
				</Box>
			</Flex>
			<SetCompanyModal
				view="edit"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
				company={company}
			/>
			<DeleteModal
				type="company"
				isOpen={isOpenDelete}
				onClose={onCloseDelete}
				handleDelete={handleDeleteCompany}
			/>
		</Flex>
	);
};
