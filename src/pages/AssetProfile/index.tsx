import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

export const AssetProfile = () => {
  const image = "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg";

  return (
    <Card noPadding>
      <Flex flexDirection="column" p="5" bg="#F8F8F8" height="100%" width="100%">
        <Flex justifyContent="space-between" mb="4">
          <Box width="65%">
            <Text as="b" fontSize="2xl">Informations</Text>
            <Flex mt="1" bg="#FFF" boxShadow="md" padding="5" borderRadius="10" border="1px solid #D7D7D7">
              <Image cursor="pointer" borderRadius="10" fit="cover" width={{base: "50px", sm: '250px'}} height={{base: "50px", sm: '250px'}} src={image} />
              
            </Flex>
          </Box>
          <Box width="30%">
            <Text as="b" fontSize="2xl">Metrics</Text>
            <Flex mt="1" bg="#FFF" padding="5" boxShadow="md" height="290px" borderRadius="10" border="1px solid #D7D7D7">
              
            </Flex>
          </Box>
        </Flex>
        <Box width="100%">
          <Text as="b" fontSize="2xl">Health History</Text>
          <Flex mt="1" bg="#FFF" padding="5" boxShadow="md" height="200px" borderRadius="10" border="1px solid #D7D7D7">
            
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};