import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import { SetInfoModal } from "../SetInfoModal";
import { DeleteModal } from "../DeleteModal";

interface AssetListItemProps {
  name?: string,
  model?: string,
  image?: string,
  status?: string,
  healthScore?: string,
  id?: number
};

export const AssetListItem = ({name, model, image}: AssetListItemProps) => {
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  return (
    <Flex flexDirection="row" flexWrap="wrap" cursor="pointer" justifyContent="space-between" alignItems="center" paddingX="20px" paddingY="25px" width="100%" borderBottom="1px solid #D7D7D7" >
      <Flex flexDirection="row" gap="3" alignItems="center">
        <Image borderRadius="10" fit="cover" width={{base: "50px", sm: '70px'}} height={{base: "50px", sm: '70px'}} src={image} />

        <Flex flexDirection="column" justifyContent="center">
          <Text as="b" fontSize="md">
            {name}
          </Text>
          <Text fontSize="sm">
            {model}
          </Text>
        </Flex>
      </Flex>


      <Flex gap="3" justifyContent="center" width={{base: "100%", sm: "100%", md: "auto", lg: "auto", xl: "auto"}}>
        <Box onClick={(e) => {e.stopPropagation(); onOpenEdit()}}>
          <FiEdit color="#1A3071" size="20"/>
        </Box>
        <Box onClick={(e) => {e.stopPropagation(); onOpenDelete()}}>
          <FiTrash2 color="#ED3833" size="20"/>
        </Box>        
      </Flex>
      <SetInfoModal view="edit" type="asset" isOpen={isOpenEdit} onClose={onCloseEdit} name={name}/>
      <DeleteModal type="asset" isOpen={isOpenDelete} onClose={onCloseDelete} />
    </Flex>
  );

};