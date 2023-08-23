import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { MachineMiniCard } from "../../components/MachineMiniCard";
import { ProfileMiniCard } from "../../components/ProfileMiniCard ";

export const UnitProfile = () => {
  return (
    <Card noPadding>
      <Flex flexDirection="column" height="100%" width="100%" mb="-8">
        <Box position="relative" flexDirection="column" height="240px" width="100%">
          <Box zIndex="2" height="240px" position="absolute" width="100%">
            <Image objectFit="cover" height="240px" width="100%" src="https://media-cdn.tripadvisor.com/media/photo-s/11/c8/a6/99/manaira-shopping.jpg" />
          </Box>
          <Box zIndex="3" width="100%" height="240px" position="absolute" bg="linear-gradient(0deg, rgba(26,48,113,1) 0%, rgba(255,255,255,0) 50%);" />

          <Text color="#FFF" zIndex="4"top="170" left="10" position="absolute" as="b" fontSize="2xl">
              Shopping Manaira
          </Text>
          <Text color="#FFF" zIndex="4"top="200" left="10" position="absolute" fontSize="sm">
              Gugas Burguer
          </Text>
        </Box>
        <Flex flexDirection="column" mt="60px" height="100%" width="100%" paddingX="10" paddingTop="10">
          <Text as="b" fontSize="2xl">Machines</Text>
          <Flex mt="5" flexDirection="row" gap={5} flexWrap="wrap" width="100%" mb="30px">
            <MachineMiniCard name="Joao Victor" model="Fan" healthScore={80} status="inAlert" />
            <MachineMiniCard name="Joao Victor" model="Fan" healthScore={80} status="inAlert" />
            <MachineMiniCard name="Joao Victor" model="Fan" healthScore={80} status="inAlert" />
            <MachineMiniCard name="Joao Victor" model="Fan" healthScore={80} status="inAlert" />
            <MachineMiniCard name="Joao Victor" model="Fan" healthScore={80} status="inAlert" />


          </Flex>
          <Text as="b" fontSize="2xl">Users</Text>
          <Flex mt="5" flexDirection="row" gap={5} flexWrap="wrap" width="100%">
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />
            <ProfileMiniCard name="Lucas Bivar" email="lucasbivar@tractian.com" />

          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};