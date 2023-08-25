
import { Box, Button, Flex, Modal, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import {
  FiAlertTriangle,
} from 'react-icons/fi';
import { categoryLabels } from "../../lib/enums/setInfoCategory";

interface SetUnitModalProps {
  onClose: () => void,
  isOpen: boolean,
  type: 'unit' | 'company' | 'user' | 'machine' | 'workOrder' 
};

export const DeleteModal = ({onClose, isOpen, type}: SetUnitModalProps) => {
  const labels = categoryLabels[type];
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent width={{base: '80%' , md: '45%', lg: '30%'}} borderRadius={10} padding="8" bg="#FFF" borderTop="15px solid #1A3071">
        <Flex flexDirection="column" width="100%">
          <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" as="b">Delete</Text>
          </Flex>
          <Flex flexDirection="column" my="10" justifyContent="center" alignItems="center">
            <Box>
              <FiAlertTriangle color="#ED3833" size="50" />
            </Box>
            <Text width={{base: '100%' , sm: '70%'}} fontSize="lg" mt="10px" textAlign="center">
              {labels.deleteMessage}
            </Text>
          </Flex>
          <Flex flexDirection="row" gap="2" justifyContent="flex-end">
            <Button bg="#F7f7f7" _hover={{bg: "#eaeaea", color: "#000000"}} color="#000000" onClick={onClose}>Cancel</Button>
            <Button bg="#ED3833" _hover={{bg: "#c51f19", color: "#FFF"}} color="#FFF" onClick={onClose}>Delete</Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};