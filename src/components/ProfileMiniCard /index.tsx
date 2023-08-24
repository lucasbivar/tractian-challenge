import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ProfileMiniCardProps {
  name?: string,
  email?: string,
  id?: number
};

export const ProfileMiniCard = ({name, email, id}: ProfileMiniCardProps) => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" onClick={() => navigate(`/users/${id}`)} justifyContent="center" alignItems="center" paddingX="5px" paddingY="25px" width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "18%"}} border="1px solid #D7D7D7" _hover={{boxShadow: "base"}} bg="#FFF" borderRadius={10}>
      <Avatar bg="#1A3071" color="#FFF" name={name} />
      <Text as="b" fontSize="md">
        {name}
      </Text>
      <Text fontSize="xs">
        {email}
      </Text>
    </Flex>
  );

};