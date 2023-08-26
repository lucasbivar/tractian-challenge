import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import {
  FiThermometer,
} from 'react-icons/fi';
import {
  BsSpeedometer2,
  BsLightningCharge
} from 'react-icons/bs';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import TimelineSetup from "highcharts/modules/timeline";
import HC_exporting from 'highcharts/modules/exporting'
TimelineSetup(Highcharts);
HC_exporting(Highcharts);

const options = {
  chart: {
      type: 'timeline',
  },
  accessibility: {
      screenReaderSection: {
          beforeChartFormat: '<h5>{chartTitle}</h5>' +
              '<div>{typeDescription}</div>' +
              '<div>{chartSubtitle}</div>' +
              '<div>{chartLongdesc}</div>' +
              '<div>{viewTableButton}</div>'
      },
      point: {
          valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
      }
  },
  xAxis: {
      visible: false
  },
  yAxis: {
      visible: false
  },
  title: {
      text: ''
  },
  colors: [
      '#52C41A',
      '#ED3833',
      '#52C41A',
      '#FAAD14',
      '#52C41A',
  ],
  series: [{
      data: [{
          name: 'In Operation',
          description: '01/01/2023 13:17:50',
      },
      {
          name: 'In Alert',
          description: '02/02/2023 13:17:50',
      },
      {
        name: 'In Operation',
        description: '03/04/2023 13:17:50',
      },
      {
        name: 'Unplanned Sto',
        description: '04/05/2023 13:17:50',
      },      
      {
        name: 'In Operation',
        description: '04/06/2023 13:17:50',
      },
    ]
  }]
};

export const AssetProfile = () => {
  const image = "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg";

  return (
    <Card noPadding>
      <Flex flexDirection="column" p="5" bg="#F8F8F8" height="100%" width="100%">
        <Flex justifyContent="space-between" mb="4">
          <Box width="65%">
            <Text as="b" fontSize="2xl">Informations</Text>
            <Flex mt="1" bg="#FFF" boxShadow="md" padding="5" gap="8" borderRadius="10" border="1px solid #D7D7D7">
              <Image cursor="pointer" borderRadius="10" fit="cover" width={{base: "50px", sm: '250px'}} src={image} />
              <Box width="40%">
                <Box>
                  <Text as="b" fontSize="sm">Name:</Text>
                  <Text fontSize="sm">Motor H13D-1</Text>
                </Box>
                <Box>
                  <Text as="b" fontSize="sm">Model:</Text>
                  <Text fontSize="sm">Motor</Text>
                </Box>
                <Box>
                  <Text as="b" fontSize="sm">Sensores:</Text>
                  <Text fontSize="sm">GSJ1535 - GSJ1535 - GSJ1535</Text>
                </Box>
                <Box>
                  <Text as="b" fontSize="sm">Specification:</Text>
                  <Flex justifyContent="space-between">
                    <Flex gap="1" alignItems="center">
                      <FiThermometer color="#000" />
                      <Text fontSize="sm">57 °C</Text>
                    </Flex>
                    <Flex gap="1" alignItems="center">
                      <BsLightningCharge color="#000" />
                      <Text fontSize="sm">10 W</Text>
                    </Flex>
                    <Flex gap="1" alignItems="center">
                      <BsSpeedometer2 color="#000" />
                      <Text fontSize="sm">1750 rpm</Text>
                    </Flex>
                  </Flex>
                </Box>               
                <Flex justifyContent="space-between">
                  <Box>
                    <Text as="b" fontSize="sm">Status:</Text>
                    <Box bg="#52C41A" py="1" width="100px" textAlign="center" borderRadius="5" color="#FFF">
                      <Text fontSize="sm">In Operation</Text>
                    </Box>
                  </Box>  
                  <Box>
                    <Text as="b" fontSize="sm">Health Score:</Text>
                    <Box bg="#ED3833" py="1" width="100px" textAlign="center" borderRadius="5" color="#FFF">
                      <Text fontSize="sm">47%</Text>
                    </Box>
                  </Box> 
                </Flex>                 
              </Box>
            </Flex>
          </Box>
          <Flex width="30%" flexDirection="column">
            <Text as="b" fontSize="2xl">Metrics</Text>
            <Flex bg="#FFF" flexDirection="column" justifyContent="space-between"  padding="5" boxShadow="md" height="100%" borderRadius="10" border="1px solid #D7D7D7">
              <Box>
                <Text as="b" fontSize="sm">Total Uptime:</Text>
                <Text fontSize="sm">1500 hours 30 minutes</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="sm">Total Collects:</Text>
                <Text fontSize="sm">889</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="sm">Last Collect Time:</Text>
                <Text fontSize="sm">01/01/2023 13:17:50</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="sm">Current 4G Connection Quality:</Text>
                <Text fontSize="sm">Good</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Box width="100%">
          <Text as="b" fontSize="2xl">Health History</Text>
          <Flex mt="1" bg="#FFF" padding="5" boxShadow="md" width="100%" justifyContent="center"  height="200px" borderRadius="10" border="1px solid #D7D7D7">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};