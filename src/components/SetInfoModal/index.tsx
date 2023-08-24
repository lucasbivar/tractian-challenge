
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import {
 FiX,
} from 'react-icons/fi';
import { categoryLabels } from "../../lib/enums/setInfoCategory";

interface SetUnitModalProps {
  onClose: () => void,
  isOpen: boolean,
  name?: string,
  email?: string,
  view: 'new' | 'edit'
  type: 'unit' | 'company' | 'user' | 'machine' 
};

export const SetInfoModal = ({onClose, isOpen, name, email, view, type}: SetUnitModalProps) => {
  const labels = categoryLabels[type];
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent width={{base: 'none' , sm: '80%'}} borderRadius={10} padding="8" bg="#FFF" borderTop="15px solid #1A3071">
        <Flex flexDirection="column" width="100%">
          <Flex flexDirection="row" justifyContent="space-between" mb="5" alignItems="center">
            <Text fontSize="xl" as="b">{view === 'new' ? labels.newTitle : labels.editTitle}</Text>
            <Box onClick={onClose}>
              <FiX color="#1A3071"/>
            </Box>
          </Flex>
          <Box>
            <Text as="b">{labels.nameLabel}</Text>
            <Input mt="1" mb="7" width="100%" placeholder={labels.namePlaceholder} value={name} borderColor="#bdbdbd" variant='outline' _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}/>
          </Box>
          { type === 'user' && (
            <Box>
              <Text as="b">{labels.emailLabel}</Text>
              <Input mt="1" mb="7" width="100%" placeholder={labels.emailPlaceholder} value={email} borderColor="#bdbdbd" variant='outline' _focus={{ boxShadow: 'none', outline: 'none', borderColor: '#7a7a7a' }}/>
            </Box>
          )}
          <Button bg="#1A3071" alignSelf="flex-end" _hover={{bg: "#12255d", color: "#FFF"}} color="#FFF" onClick={onClose}>{`${view === 'new' ? 'Create' : 'Edit'}`}</Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};