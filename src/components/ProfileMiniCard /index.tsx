import { Avatar, Flex, Text } from "@chakra-ui/react";

interface ProfileMiniCardProps {
  name?: string,
  email?: string,
};

export const ProfileMiniCard = ({name, email}: ProfileMiniCardProps) => {

  return (
    <Flex flexDirection="column"  justifyContent="center" alignItems="center" paddingX="5px" paddingY="25px" width={{base: "100%", sm: "47%", md: "47%", lg: "30%", xl: "18%"}} border="1px solid #D7D7D7" _hover={{boxShadow: "base"}} bg="#FFF" borderRadius={10}>
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