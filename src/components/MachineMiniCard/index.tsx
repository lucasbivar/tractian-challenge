import { Flex, IconButton, Text } from "@chakra-ui/react";
import {
  FiEye,
} from 'react-icons/fi';

interface MachineMiniCardProps {
  name?: string,
  model?: string,
  healthScore?: number,
  status?: string
};

export const MachineMiniCard = ({name, model, status}: MachineMiniCardProps) => {

  return (
    <Flex flexDirection="column" justifyContent="space-between" padding="5" width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%"}} border="1px solid #D7D7D7" _hover={{boxShadow: "base"}} bg="#FFF"  borderLeft="15px solid #52C41A" borderRadius={10}>
      <Text as="b" fontSize="md">
        {name}
      </Text>
      <Text fontSize="sm">
        <Text as="b" fontSize="sm">
          Model:&nbsp;
        </Text>
        {model}
      </Text>
      <Flex flexDirection="row" width="100%" justifyContent="space-between">
        <Flex flexDirection="column" width="80%">
          <Text fontSize="sm">
            <Text as="b" fontSize="sm">
              Status:&nbsp;
            </Text>
            {status}
          </Text>
          <Text fontSize="sm">
            <Text as="b" fontSize="sm">
              Health Score:&nbsp;
            </Text>
            {"Correct"}
          </Text>
        </Flex>
        <IconButton bg="#F7F7F7" alignSelf="flex-end" width="15px" variant="ghost" aria-label="open machine" icon={<FiEye size="25" color="#1A3071" />} />
      </Flex>
    </Flex>
  );

};