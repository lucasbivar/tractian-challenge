import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../DeleteModal";
import { type Unit } from "../../interfaces/units";
import { useDeleteUnit } from "../../hooks/units/useDeleteUnits";
import { SetUnitModal } from "../SetInfoModal/SetUnitModal";

interface UnitCardProps {
	unit: Unit;
	disableEdit?: boolean;
}

export const UnitCard = ({ unit, disableEdit }: UnitCardProps): JSX.Element => {
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
	const navigate = useNavigate();
	const { mutateAsync: deleteUnit } = useDeleteUnit();

	const handleDeleteUnit = async (): Promise<void> => {
		await deleteUnit(unit);
	};

	return (
		<Flex
			onClick={() => {
				navigate(`/units/${unit.id}`);
			}}
			width={{ base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%" }}
			height="200px"
			position="relative"
			_hover={{ boxShadow: "dark-lg" }}
			bg="#D7D7D7"
			cursor="pointer"
			borderRadius={10}
		>
			<Image
				fit="cover"
				width="100%"
				zIndex="2"
				src={unit.image}
				borderRadius={10}
			/>
			<Box
				zIndex="3"
				width="100%"
				height="100%"
				borderRadius={10}
				position="absolute"
				bg="linear-gradient(0deg, rgba(26,48,113,1) 0%, rgba(255,255,255,0) 50%);"
			/>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				width="85%"
				flexDirection="row"
				zIndex="4"
				bottom="5"
				left="5"
				position="absolute"
			>
				<Text color="#FFF" as="b">
					{unit.name}
				</Text>
				{(disableEdit === false || !disableEdit) && (
					<Flex flexDirection="row" gap="2">
						<Box
							onClick={(e) => {
								e.stopPropagation();
								onOpenEdit();
							}}
						>
							<FiEdit color="#FFF" />
						</Box>
						<Box
							onClick={(e) => {
								e.stopPropagation();
								onOpenDelete();
							}}
						>
							<FiTrash2 color="#FFF" />
						</Box>
					</Flex>
				)}
			</Flex>
			<SetUnitModal
				view="edit"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
				unit={unit}
			/>
			<DeleteModal
				type="unit"
				isOpen={isOpenDelete}
				handleDelete={handleDeleteUnit}
				onClose={onCloseDelete}
			/>
		</Flex>
	);
};
