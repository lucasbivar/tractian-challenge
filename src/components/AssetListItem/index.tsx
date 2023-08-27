import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { DeleteModal } from "../DeleteModal";
import { useNavigate } from "react-router-dom";
import { type Asset } from "../../interfaces/assets";
import { useDeleteAsset } from "../../hooks/assets/useDeleteAssets";
import { getHealthScoreInfo } from "../../utils/healthScore";
import { assetStatus } from "../../utils/enums/assetStatus";
import { assetModels } from "../../utils/enums/models";
import { SetAssetModal } from "../SetInfoModal/SetAssetModal";

interface AssetListItemProps {
	asset: Asset;
}

export const AssetListItem = ({ asset }: AssetListItemProps): JSX.Element => {
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
	const { mutateAsync: deleteAsset } = useDeleteAsset();

	const handleDeleteAsset = async (): Promise<void> => {
		await deleteAsset(asset);
	};

	return (
		<Flex
			flexDirection="row"
			flexWrap="wrap"
			cursor="pointer"
			onClick={() => {
				navigate(`/assets/${asset.id}`);
			}}
			justifyContent="space-between"
			alignItems="center"
			paddingX="20px"
			paddingY="25px"
			width="100%"
			borderBottom="1px solid #D7D7D7"
		>
			<Flex flexDirection="row" gap="3" alignItems="center">
				<Image
					borderRadius="10"
					fit="cover"
					width={{ base: "50px", sm: "70px" }}
					height={{ base: "50px", sm: "70px" }}
					src={asset.image}
				/>
				<Flex flexDirection="column" justifyContent="center">
					<Text as="b" fontSize="md" isTruncated>
						{asset.name}
					</Text>
					<Text fontSize="sm" isTruncated>
						{assetModels[asset.model].label}
					</Text>
				</Flex>
			</Flex>

			<Flex
				alignItems="center"
				gap={{ base: "2", lg: "10" }}
				justifyContent="space-between"
				mt={{ base: "3", md: "unset" }}
				width={{ base: "100%", sm: "100%", md: "auto", lg: "auto", xl: "auto" }}
			>
				<Box
					bg={getHealthScoreInfo(asset.healthscore).color}
					py="1"
					width="80px"
					textAlign="center"
					borderRadius="5"
					color="#FFF"
				>
					<Text as="b" fontSize="sm">
						{asset.healthscore != null ? `${asset.healthscore}%` : "No Info"}
					</Text>
				</Box>
				<Box
					bg={
						asset.status != null ? assetStatus[asset.status].color : "#1A3071"
					}
					py="1"
					width="100px"
					textAlign="center"
					borderRadius="5"
					color="#FFF"
				>
					<Text as="b" fontSize="sm">
						{asset.status != null ? assetStatus[asset.status].label : "No Info"}
					</Text>
				</Box>
				<Flex gap="3" justifyContent="center">
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
			</Flex>
			<SetAssetModal
				view="edit"
				isOpen={isOpenEdit}
				onClose={onCloseEdit}
				asset={asset}
			/>
			<DeleteModal
				type="asset"
				isOpen={isOpenDelete}
				handleDelete={handleDeleteAsset}
				onClose={onCloseDelete}
			/>
		</Flex>
	);
};
