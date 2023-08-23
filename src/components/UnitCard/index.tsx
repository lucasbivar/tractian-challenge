import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  FiEdit,
} from 'react-icons/fi';
import { SetUnitModal } from "../SetUnitModal";
import { useNavigate } from "react-router-dom";

interface UnitCardProps {
  name: string,
  image: string
};

export const UnitCard = ({name, image}: UnitCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Flex onClick={() => {
       navigate('/units/1')}} width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%"}} height="200px" position="relative" _hover={{boxShadow: "dark-lg"}} bg="#D7D7D7" cursor="pointer" borderRadius={10}>
      <Image fit="cover" width="100%" zIndex="2" src={image}  borderRadius={10}/>
      <Box zIndex="3" width="100%" height="100%"  borderRadius={10} position="absolute" bg="linear-gradient(0deg, rgba(26,48,113,1) 0%, rgba(255,255,255,0) 50%);" />
      <Flex justifyContent="space-between" alignItems="center" width="85%" flexDirection="row" zIndex="4" bottom="5" left="5" position="absolute">
        <Text color="#FFF" as="b" >{name}</Text>
        <Box onClick={(e) => {e.stopPropagation(); onOpen()}}>
          <FiEdit color="#FFF"/>
        </Box>
      </Flex>
      <SetUnitModal view="edit" isOpen={isOpen} onClose={onClose} name={name} />
    </Flex>
  );

};