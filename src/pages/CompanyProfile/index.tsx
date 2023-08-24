import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { UnitCard } from "../../components/UnitCard";

export const CompanyProfile = () => {
  return (
    <Card noPadding>
      <Flex flexDirection="column" height="100%" width="100%">
        <Flex bg="#1A3071" paddingLeft="10" justifyContent="center" alignItems="flex-start" flexDirection="column" height="100px" width="100%">
          <Box mb="15">
            <Text color="#FFF" as="b" fontSize="4xl">
              Gugas Burguer
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" height="100%" width="100%" paddingX="10" paddingY="8">
          <Text as="b" fontSize="2xl">Units</Text>
          <Flex mt="5" flexDirection="row" gap={5} flexWrap="wrap" width="100%">
            <UnitCard disableEdit name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
            <UnitCard disableEdit name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
            <UnitCard disableEdit name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
            <UnitCard disableEdit name="Shopping Manaira" image="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />

          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};