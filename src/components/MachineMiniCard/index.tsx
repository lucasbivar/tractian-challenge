import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import {
  FiEye,
} from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

interface MachineMiniCardProps {
  name?: string,
  model?: string,
  healthScore?: number,
  status?: string
  id?: number,
};

export const MachineMiniCard = ({name, model, status, id}: MachineMiniCardProps) => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="row" justifyContent="space-between" alignItems="center" padding="5" width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "31%"}} border="1px solid #D7D7D7" _hover={{boxShadow: "base"}} bg="#FFF"  borderLeft="15px solid #52C41A" borderRadius={10}>
      <Flex flexDirection="column" width="80%">
        <Text as="b" fontSize="md">
          {name}
        </Text>
        <Text fontSize="sm">
          <Text as="b" fontSize="sm">
            Model:&nbsp;
          </Text>
          {model}
        </Text>
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
      <Box onClick={() => navigate(`/assets/${id}`)} width="15px" aria-label="open machine" cursor="pointer" mr="2" alignSelf="flex-end">
        <FiEye size="23" color="#1A3071" />
      </Box>
    </Flex>
  );

};