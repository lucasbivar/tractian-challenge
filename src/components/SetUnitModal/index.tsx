
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import {
 FiX,
} from 'react-icons/fi';

interface SetUnitModalProps {
  onClose: () => void,
  isOpen: boolean,
  name?: string,
  view: 'new' | 'edit'
};

export const SetUnitModal = ({onClose, isOpen, name, view}: SetUnitModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent width={{base: 'none' , sm: '80%'}} borderRadius={10} padding="8" bg="#FFF" borderTop="15px solid #1A3071">
          <Flex flexDirection="column" width="100%">
            <Flex flexDirection="row" justifyContent="space-between" mb="5" alignItems="center">
              <Text fontSize="xl" as="b">{`${view === 'new' ? 'Create' : 'Edit'} Unit`}</Text>
              <Box onClick={onClose}>
                <FiX color="#1A3071"/>
              </Box>
            </Flex>
            <Text as="b">Unit's Name:</Text>
            <Input mt="1" mb="7" width="100%" placeholder="Type the unit name" value={name} borderColor="#bdbdbd" variant='outline' _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}/>
            <Button bg="#1A3071" alignSelf="flex-end" _hover={{bg: "#12255d", color: "#FFF"}} color="#FFF" onClick={onClose}>{`${view === 'new' ? 'Create' : 'Edit'}`}</Button>
          </Flex>
        </ModalContent>
      </Modal>
  );
};