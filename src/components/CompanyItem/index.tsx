import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import { SetInfoModal } from "../SetInfoModal";
import { DeleteModal } from "../DeleteModal";

interface CompanyItemProps {
  name?: string,
  id?: number
};

export const CompanyItem = ({name, id}: CompanyItemProps) => {
  const navigate = useNavigate();
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  return (
    <Flex cursor="pointer" flexDirection="row" onClick={() => navigate(`/companies/${id}`)} justifyContent="space-between" alignItems="center" paddingX="0px" paddingY="25px" width="100%" borderBottom="1px solid #D7D7D7" >
      <Box>
        <Text as="b" fontSize="md">
          {name}
        </Text>
      </Box>
      <Flex gap="3">
        <Box onClick={(e) => {e.stopPropagation(); onOpenEdit()}}>
          <FiEdit color="#1A3071" size="20"/>
        </Box>
        <Box onClick={(e) => {e.stopPropagation(); onOpenDelete()}}>
          <FiTrash2 color="#ED3833" size="20"/>
        </Box>        
      </Flex>
      <SetInfoModal view="edit" type="company" isOpen={isOpenEdit} onClose={onCloseEdit} name={name} />
      <DeleteModal type="company" isOpen={isOpenDelete} onClose={onCloseDelete} />
    </Flex>
  );

};