import { Avatar, Box, Flex, Show, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import { SetInfoModal } from "../SetInfoModal";
import { DeleteModal } from "../DeleteModal";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { BsBank } from "react-icons/bs";

interface UserListItemProps {
  name?: string,
  email?: string,
  unit?: string,
  company?: string,
  id?: number
};

export const UserListItem = ({name, email, company, unit, id}: UserListItemProps) => {
  const navigate = useNavigate();
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  return (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" paddingX="0px" paddingY="25px" width="100%" borderBottom="1px solid #D7D7D7" >
      <Flex flexDirection="row" gap="3" alignItems="center">
        <Avatar name={name} bg="#1A3071" color="#FFF"/>

        <Flex flexDirection="column" justifyContent="center">
          <Text as="b" fontSize="md">
            {name}
          </Text>
          <Text fontSize="sm">
            {email}
          </Text>
        </Flex>
      </Flex>
      <Flex gap={{base: "0", sm: "0", md: "8", lg: "140", xl: "200"}} justifyContent="space-between" width={{base: "100%", sm: "100%", md: "auto", lg: "auto", xl: "auto"}} mt={{base: "2", sm: "2", md: "0", lg: "0", xl: "0"}}>
        <Show above="md" >
          <Flex flexDirection="column" justifyContent="center">
            <Text as="b" fontSize="md">
              Company
            </Text>
            <Text cursor="pointer" onClick={() => navigate(`/companies/${id}`)}  fontSize="sm">
              {company}
            </Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="center">
            <Text as="b" fontSize="md">
              Unit
            </Text>
            <Text fontSize="sm" cursor="pointer" onClick={() => navigate(`/units/${id}`)} >
              {unit}
            </Text>
          </Flex>
        </Show>
        <Show above="base" below="md">
          <Flex flexDirection="column" gap="1" marginLeft="60px" width="100%">
            <Flex flexDirection="row" width="100%" justifyContent="space-between" alignItems="center">
              <Flex flexDirection="row" alignItems="center" gap="2">
                <Box>
                  <BsBank color="#1A3071" />
                </Box>
                <Text cursor="pointer" onClick={() => navigate(`/companies/${id}`)}  fontSize="sm">
                  {company}
                </Text>
              </Flex>
              <Box onClick={(e) => {e.stopPropagation(); onOpenEdit()}}>
                <FiEdit color="#1A3071" size="20"/>
              </Box>
            </Flex>
            <Flex flexDirection="row" width="100%" justifyContent="space-between" alignItems="center">
              <Flex flexDirection="row" alignItems="center" gap="2">
                <Box>
                  <MdOutlineStoreMallDirectory color="#1A3071" />
                </Box>
                <Text cursor="pointer" onClick={() => navigate(`/units/${id}`)}  fontSize="sm">
                  {unit}
                </Text>
              </Flex>
              <Box onClick={(e) => {e.stopPropagation(); onOpenDelete()}}>
                <FiTrash2 color="#ED3833" size="20"/>
              </Box> 
            </Flex>
          </Flex>
        </Show>
      </Flex>
      <Show above="md">
        <Flex gap="3" justifyContent="center" width={{base: "100%", sm: "100%", md: "auto", lg: "auto", xl: "auto"}}>
          <Box onClick={(e) => {e.stopPropagation(); onOpenEdit()}}>
            <FiEdit color="#1A3071" size="20"/>
          </Box>
          <Box onClick={(e) => {e.stopPropagation(); onOpenDelete()}}>
            <FiTrash2 color="#ED3833" size="20"/>
          </Box>        
        </Flex>
      </Show>
      <SetInfoModal view="edit" type="user" isOpen={isOpenEdit} onClose={onCloseEdit} name={name} email={email}/>
      <DeleteModal type="user" isOpen={isOpenDelete} onClose={onCloseDelete} />
    </Flex>
  );

};