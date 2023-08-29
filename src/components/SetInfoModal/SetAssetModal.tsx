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
import { type Models, type Asset } from "../../interfaces/assets";
import { useCreateAsset } from "../../hooks/assets/useCreateAssets";
import { useUpdateAsset } from "../../hooks/assets/useUpdateAssets";
import { useUnits } from "../../hooks/units/useUnits";
import { getFakeImage } from "../../utils/assets";

interface SetAssetModalProps {
	onClose: () => void;
	isOpen: boolean;
	asset?: Asset;
	view: "new" | "edit";
}

export const SetAssetModal = ({
	onClose,
	isOpen,
	asset,
	view,
}: SetAssetModalProps): JSX.Element => {
	const labels = categoryLabels.asset;
	const [assetEdited, setAssetEdited] = useState({
		...asset,
		id: asset?.id ?? Math.floor(Math.random() * 10000 + 100),
		name: asset?.name ?? "",
		model: asset?.model ?? ("" as Models),
		image: asset?.image ?? "",
		unitId: asset?.unitId ?? undefined,
	});
	const { data: units } = useUnits({});

	const { mutateAsync: createAsset } = useCreateAsset();
	const handleCreateAsset = async (): Promise<void> => {
		await createAsset(assetEdited);
	};

	const { mutateAsync: updateAsset } = useUpdateAsset();
	const handleUpdateAsset = async (): Promise<void> => {
		await updateAsset(assetEdited);
	};
	const toast = useToast();

	const handleSetAsset = (): void => {
		(async () => {
			try {
				if (
					assetEdited.name === "" ||
					assetEdited.model === ("" as Models) ||
					assetEdited.unitId == null
				)
					throw Error("");

				if (view === "new") {
					await handleCreateAsset();
				} else if (view === "edit") {
					await handleUpdateAsset();
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
				if (asset == null)
					setAssetEdited({
						...assetEdited,
						name: "",
						model: "" as Models,
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
				if (asset == null)
					setAssetEdited({
						...assetEdited,
						name: "",
						model: "" as Models,
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
							value={assetEdited.name}
							borderColor="#bdbdbd"
							variant="outline"
							onChange={(v) => {
								setAssetEdited({ ...assetEdited, name: v.target.value });
							}}
							_focus={{
								boxShadow: "none",
								outline: "none",
								borderColor: "#7a7a7a",
							}}
						/>
					</Box>
					<Box>
						<Text as="b">{labels.modelLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setAssetEdited({
									...assetEdited,
									model: (e.target.value as Models) ?? undefined,
									...(asset?.id == null && {
										image: getFakeImage(e.target.value as Models),
									}),
								});
							}}
							value={assetEdited.model}
							mt={2}
							placeholder={labels.modelPlaceholder}
						>
							<option value="motor">Motor</option>
							<option value="fan">Fan</option>
						</Select>
					</Box>
					<Box>
						<Text as="b">{labels.unitLabel}</Text>
						<Select
							mb="2"
							onChange={(e) => {
								setAssetEdited({
									...assetEdited,
									unitId: Number(e.target.value) ?? undefined,
								});
							}}
							value={assetEdited.unitId}
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
						onClick={handleSetAsset}
					>{`${view === "new" ? "Create" : "Edit"}`}</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};
