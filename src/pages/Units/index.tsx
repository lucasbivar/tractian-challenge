import { Button, Flex, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { UnitCard } from "../../components/UnitCard";
import { useState } from "react";
import {
  FiSearch,
  FiPlus
} from 'react-icons/fi';
import { SetUnitModal } from "../../components/SetUnitModal";

export const Units = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchBarValue, setSearchBarValue] = useState('');
  return (
    <Flex width="100%" alignItems="center" height="100%" overflowY="scroll" css={{'::-webkit-scrollbar': { display:'none' }}} flexDirection="column">
      <Flex width="100%" flexWrap="wrap" justifyContent="space-between" flexDirection="row" mb="20px">
        <InputGroup width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%"}}>
          <InputLeftElement pointerEvents="none">
            <FiSearch style={{ color: '#1A3071' }} />
          </InputLeftElement>
          <Input
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            borderColor="#bdbdbd"
            placeholder="Unit"
            variant='outline' 
            _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}
          />
        </InputGroup>
        <Button onClick={onOpen} mt={{base: "4", sm: "0"}} leftIcon={<FiPlus />} width={{base: "100%", sm: "30%", md: "24%", lg: "20%", xl: "14%"}} _hover={{bg: "#12255d", color: "#FFF"}}  color="#FFF" bg="#1A3071">Create Unit</Button>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" gap={5} flexWrap="wrap" width="100%" mb="50px">
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
        <UnitCard name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
      </Flex>
      <SetUnitModal view="new" isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};