import { Image, Box, Flex, Text, useDisclosure, Collapse, CircularProgress, CircularProgressLabel, AvatarGroup, Avatar, Checkbox, Input, Button, Show, Progress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronUp,
  FiChevronDown,
  FiEdit,
  FiEye,
  FiPlus,
  FiTrash2,
} from 'react-icons/fi';
import { SetInfoModal } from "../SetInfoModal";
import { DeleteModal } from "../DeleteModal";
import { useState } from "react";

interface WorkOrderListItemProps {
  title?: string,
  description?: string,
  priority?: string,
  status?: string,
  checklist?: {completed: boolean, task: string}[],
  assetId?: number
  index?: number
};

export const WorkOrderListItem = ({title, description, priority, status, assetId, checklist, index}: WorkOrderListItemProps) => {
  const navigate = useNavigate();
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
  const [collapsed, setCollapsed] = useState(index === 0 ? true : false );
  const image = "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg";
  return (
    <Flex flexDirection="column" flexWrap="wrap" justifyContent="space-between" alignItems="center" paddingX="0px" width="100%" borderBottom="1px solid #D7D7D7" >
      <Flex flexDirection="row" width="100%" justifyContent="space-between" alignItems="center" paddingX={{base: "4", sm: '10'}} paddingY="5" bg="#FFF" borderBottom="1px solid #D7D7D7">
        <Flex flexDirection="column">
          <Flex flexDirection="row" gap="3" alignItems="center">
            <Image cursor="pointer" borderRadius="10" fit="cover" width={{base: "50px", sm: '80px'}} height={{base: "50px", sm: '80px'}} src={image} />

            <Flex flexDirection="column" justifyContent="center">
              <Text as="b" fontSize="md">
                {title}
              </Text>
              <Text fontSize={{base: "x-small", sm: 'sm'}} width={{base: "90%", lg: '75%'}}>
                {description}
              </Text>
            </Flex>
          </Flex>
          <Show below="lg">
            <Progress mt="3" colorScheme='facebook' value={40} />
          </Show>
        </Flex>
        <Flex flexDirection="row" alignItems="center" gap={{base: "5", lg: '20'}}>
          <Show above="lg">
            <CircularProgress value={40} color='#1A3071'>
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
          </Show>
          <Box onClick={() => setCollapsed(!collapsed)} cursor="pointer">
            {!collapsed && <FiChevronUp size="20" color="#000" />}
            {collapsed && <FiChevronDown size="20" color="#000" />}
          </Box>
        </Flex>
      </Flex>
      <Box as={Collapse} in={collapsed} animateOpacity width="100%" bg="#F8F8F8">
        <Flex flexDirection="row" flexWrap="wrap" py="5" px="3" alignItems="flex-start" justifyContent="space-between">
          <Flex my="0" mx="auto" flexDirection="column" width={{base: "100%", lg: '30%'}} height="166px" overflowY="scroll" bg="#FFF" padding="2" borderRadius="5" border="1px solid #D7D7D7">
            <Flex mb="3" borderBottom="1px solid #D7D7D7" pb="2">
              <Input px="1" maxLength={25} placeholder="Create new task" variant="unstyled" />
              <Button size='sm'variant='outline' _hover={{bg: "#12255d", color: "#FFF"}}  color="#FFF" bg="#1A3071">
                <FiPlus color="#FFF" size="15"/>
              </Button>
            </Flex>
            {checklist?.map((task) => (
              <Flex key={task.task} gap="2" mb="1">
                <Checkbox colorScheme='green' checked={task.completed} />
                <Text fontSize="sm">{task.task}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex flexDirection="column" gap={{base: "3", lg: '5'}} mt={{base: "3", lg: 'unset'}} width={{base: "100%", lg: '65%'}} >
            <Flex flexDirection="row" flexWrap="wrap-reverse" gap={{base: "2", lg: 'unset'}} justifyContent="space-between">
              <Flex width={{base: "100%", md: '49%'}} gap={{base: "8", lg: '5'}}>
                <Box>
                  <Text as="b" fontSize="lg">Priority</Text>

                  <Box bg="#ED3833" mt="1" py="1" width="100px" textAlign="center" borderRadius="5" color="#FFF">
                    <Text as="b" fontSize="sm">High</Text>
                  </Box>
                </Box>
                <Box>
                  <Text as="b" fontSize="lg">Status</Text>

                  <Box bg="#52C41A" mt="1" py="1" width="100px" textAlign="center" borderRadius="5" color="#FFF">
                    <Text as="b" fontSize="sm">Completed</Text>
                  </Box>
                </Box>
              </Flex>
              <Box width={{base: "100%", md: '49%'}}>
                <Text as="b" fontSize="lg">Description</Text>
                <Box mt="1">
                  <Text fontSize="sm">{description}</Text>
                </Box>
              </Box>   
            </Flex>
            <Flex flexDirection="row" flexWrap="wrap" gap={{base: "2", lg: 'unset'}} justifyContent="space-between">
              <Box width={{base: "100%", md: '49%'}}>
                <Text as="b" fontSize="lg">Actions</Text>
                <Flex gap={{base: "7", lg: '6'}}mt="1">
                  <Flex gap="2" cursor="pointer" onClick={() => navigate(`/assets/${assetId}`)} alignItems="center">
                      <FiEye color="#1A3071" />
                      <Text fontSize="sm">Asset</Text>
                  </Flex>
                  <Flex gap="2" mt="1" cursor="pointer" onClick={() => onOpenEdit()} alignItems="center">
                    <FiEdit color="#1A3071" />
                    <Text fontSize="sm">Edit</Text>
                  </Flex>
                  <Flex gap="2" mt="1" cursor="pointer" onClick={() => onOpenDelete()} alignItems="center">
                    <FiTrash2 color="#1A3071" />
                    <Text fontSize="sm">Delete</Text>
                  </Flex>
                </Flex>
              </Box>   
              <Box width={{base: "100%", md: '49%'}}>
                <Text as="b" fontSize="lg">Users</Text>
                <Box mt="1">
                  <AvatarGroup size='sm' max={4}>
                    <Avatar name='Ryan Florence' color="#FFF" bg="#1A3071" />
                    <Avatar name='Segun Adebayo' color="#FFF" bg="#1A3071"  />
                    <Avatar name='Kent Dodds' color="#FFF" bg="#1A3071"  />
                    <Avatar name='Prosper Otemuyiwa' color="#FFF" bg="#1A3071" />
                    <Avatar name='Christian Nwamba' color="#FFF" bg="#1A3071" />
                  </AvatarGroup>
                </Box>
              </Box>
            </Flex>            
          </Flex>
        </Flex>
      </Box>
      <DeleteModal type="workOrder" isOpen={isOpenDelete} onClose={onCloseDelete} />
      <SetInfoModal view="edit" type="workOrder" isOpen={isOpenEdit} onClose={onCloseEdit} />
    </Flex>
  );

};