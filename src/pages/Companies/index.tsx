import { Button, Flex, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  FiSearch,
  FiPlus
} from 'react-icons/fi';
import { Navigate } from "react-router-dom";
import { CompanyListItem } from "../../components/CompanyListItem";
import { SetInfoModal } from "../../components/SetInfoModal";
import { Card } from "../../components/Card";

export const Companies = () => {
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const [searchBarValue, setSearchBarValue] = useState('');
  const view = localStorage.getItem('view');
  if (view !== 'admin') return <Navigate to="/" />;
  
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
            placeholder="Company"
            variant='outline' 
            _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}
          />
        </InputGroup>
        <Button onClick={onOpenEdit} mt={{base: "4", sm: "0"}} leftIcon={<FiPlus />} width={{base: "100%", sm: "45%", md: "38%", lg: "28%", xl: "18%"}} _hover={{bg: "#12255d", color: "#FFF"}}  color="#FFF" bg="#1A3071">Create Company</Button>
      </Flex>
      <Card noPadding width="100%">
        <Flex flexDirection="column" flexWrap="wrap"  paddingX="5" width="100%" mb="-1px">
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
          <CompanyListItem name="TDG Company" id={1}/>
        </Flex>
      </Card>

      <SetInfoModal view="new" type="company" isOpen={isOpenEdit} onClose={onCloseEdit} />
    </Flex>
  );
};