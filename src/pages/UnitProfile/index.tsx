import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

export const UnitProfile = () => {
  return (
    <Card noPadding>
      <Flex flexDirection="column" height="100%" width="100%">
        <Box position="relative" flexDirection="column" height="200px" width="100%">
          <Box zIndex="2" height="200px" position="absolute" width="100%">
            <Image objectFit="cover" height="200px" width="100%" src="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
          </Box>
          <Box zIndex="3" width="100%" height="200px" borderRadius={10} position="absolute" bg="linear-gradient(0deg, rgba(26,48,113,1) 0%, rgba(255,255,255,0) 50%);" />

          <Text color="#FFF" zIndex="4"top="150" left="5" position="absolute" as="b" fontSize="2xl">
              Shopping Manaira
          </Text>
        </Box>
        <Flex flexDirection="column" mt="100px" height="100%" width="100%" padding="10">
          oi
        </Flex>
      </Flex>
    </Card>
  );
};