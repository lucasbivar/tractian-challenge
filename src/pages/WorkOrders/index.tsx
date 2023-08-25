import { Button, Flex, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  FiSearch,
  FiPlus
} from 'react-icons/fi';
import { SetInfoModal } from "../../components/SetInfoModal";
import { WorkOrderListItem } from "../../components/WorkOrderListItem";
import { Card } from "../../components/Card";

export const WorkOrders = () => {
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
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
            placeholder="Work Orders"
            variant='outline' 
            _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}
          />
        </InputGroup>
        <Button onClick={onOpenEdit} mt={{base: "4", sm: "0"}} leftIcon={<FiPlus />} width={{base: "100%", sm: "45%", md: "38%", lg: "28%", xl: "18%"}} _hover={{bg: "#12255d", color: "#FFF"}}  color="#FFF" bg="#1A3071">Create Work Order</Button>
      </Flex>
      <Card noPadding width="100%">
        <Flex flexDirection="column" flexWrap="wrap" width="100%" mb="-1px">
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} index={0} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
              "completed": true,
              "task": "Test Fan for proper operation"
            },
            {
              "completed": true,
              "task": "Test Fan for proper operation"
            },
            {
              "completed": true,
              "task": "Test Fan for proper operation"
            },
            {
              "completed": true,
              "task": "Test Fan for proper operation"
            },                                    
            {
              "completed": true,
              "task": "Test Fan for proper operation"
              },
              {
                "completed": true,
                "task": "Test Fan for proper operation"
                },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>
          <WorkOrderListItem title="Repair Fan D21" description="The Fan is not working properly and needs to be repaired." priority="high" status="completed" assetId={1} checklist={[{
            "completed": true,
            "task": "Inspect Fan for visible damage"
            },
            {
            "completed": true,
            "task": "Test Fan for proper operation"
            },
            {
            "completed": true,
            "task": "Replace damaged parts"
            }]}/>                                                                        
        </Flex>
      </Card>
      <SetInfoModal view="new" type="workOrder" isOpen={isOpenEdit} onClose={onCloseEdit} />
    </Flex>
  );
};