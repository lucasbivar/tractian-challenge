import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';
import { Card } from '../../components/Card';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from "highcharts/modules/map";
import HC_exporting from 'highcharts/modules/exporting'
import variablePie from 'highcharts/modules/variable-pie';
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import proj4 from "proj4";
variablePie(Highcharts);
HighchartsMap(Highcharts);
HC_exporting(Highcharts);

const optionsMachineStatus = {
  chart: {
    type: 'variablepie',
  },
  title:{
    text:''
  },
  series: [{
    minPointSize: 20,
    innerSize: '100%',
    zMin: 0,
    name: 'Machine Status',
    borderRadius: 0,
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Machines: <b>{point.y}</b><br/>'
    },
    data: [
    {
      name: 'In Op.',
      y: 12,
      z: 12,
      color: '#52C41A'
    },  
    {
      name: 'Unplan. Stop',
      y: 10,
      z: 10,
      color: '#FAAD14'
    },
    {
      name: 'In Alert',
      y: 1,
      z: 1,
      color: '#ED3833'
    },
    {
      name: 'Plan. Stop',
      y: 3,
      z: 3,
      color: '#8CA1FF'
    },
  ]
  }]
}

const optionsMachineWorkOrders = {
  chart: {
    type: 'column',
  },
  title:{
    text:''
  },
  legend:{ enabled:false },
  xAxis: {
    categories: [
      'Completed',
      'In Progress',
      'Not Started'
    ],
    crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Quantity'
      }
  },
  series: [{
    minPointSize: 20,
    innerSize: '100%',
    zMin: 0,
    name: 'Work Orders Status',
    borderRadius: 0,
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Quantity: <b>{point.y}</b><br/>'
    },
    data: [
    {
      name: 'Completed',
      y: 8,
      color: '#52C41A'
    },  
    {
      name: 'In Progress',
      y: 13,
      color: '#FAAD14'
    },
    {
      name: 'Not Started',
      y: 4,
      color: '#8CA1FF'
    },
  ]
  }]
}
const optionsMaps = {
  chart: {
    map: mapData,
    proj4
  },
  title:{
    text:''
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
        alignTo: 'right',
        verticalAlign: 'top',
        horizontalAlign: 'right'
    }
  },
  mapView: {
      padding: [0, 0, 85, 0]
  },
  plotOptions: {
    mappoint: {
        keys: ['id', 'lat', 'lon'],
        marker: {
          symbol: 'mapmarker',
          radius: 6,
        },
        dataLabels: {
          enabled: false,
        }
    }
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.id}<br/>'
  },
  
  series: [
    {
      type: "map",
      mapData: mapData,
      borderColor: "#ffffff",
      nullColor: "#1A3071",
      showInLegend: false,
    },
    {
      type: "mappoint",
      name: "Units",
      color: '#8CA1FF',
      data: [
        {
          id: "Casa Longe",
          lat: 51.507222,
          lon: -0.1275
        },
        {
          id: "TDG Company",
          lat: -7.069378,
          lon: -34.637298
        },
        {
          id: "Unit 1",
          lat: -17.675428,
          lon: -55.042005
        },
        {
          id: "Unit 2",
          lat: -12.055437,
          lon: -43.686212
        },  {
          id: "Unit 3",
          lat: -23.329646,
          lon: -48.738786
        },  {
          id: "Unit 4",
          lat: -5.886528,
          lon: -59.116661
        },  {
          id: "Unit 5",
          lat: -26.202270,
          lon: -58.413076
        },
      ]
    }
  ]
};

export const Overview = () => {

  return (
    <Flex width="100%" height="100%" overflowY="scroll" css={{'::-webkit-scrollbar': { display:'none' }}} flexDirection="column">
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" height={{base: 'auto', sm: '280px'}} mb={{base: '0px', sm: '20px'}} width="100%" >
        <Card title="Machine Status" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={optionsMachineStatus} constructorType={'chart'} />
        </Card>
        <Card title="Machine Health" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            <Flex flexDirection="row" alignItems="center" mt="1" mb="1">
              <Box width="10px" height="35px" bg="#1A3071" borderRadius="5px" marginRight="10px" />
              <Text style={{ marginRight: 10 }} as='b'>31</Text>
              <Text>Total of Machines</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <Box width="10px" height="35px" bg="#52C41A" borderRadius="5px" marginRight="10px" />
              <Text style={{ marginRight: 10 }} as='b'>14</Text>
              <Text>Correct</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <Box width="10px" height="35px" bg="#FAAD14" borderRadius="5px" marginRight="10px" />
              <Text style={{ marginRight: 10 }} as='b'>10</Text>
              <Text>Risk</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <Box width="10px" height="35px" bg="#ED3833" borderRadius="5px" marginRight="10px" />
              <Text style={{ marginRight: 10 }} as='b'>06</Text>
              <Text>Urgent</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center">
              <Box width="10px" height="35px" bg="#D7D7D7" borderRadius="5px" marginRight="10px" />
              <Text style={{ marginRight: 10 }} as='b'>01</Text>
              <Text>No Informtaion</Text>
            </Flex>
          </div>
        </Card>
        <Card title="Work Orders Status" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={optionsMachineWorkOrders} constructorType={'chart'} />
        </Card>
      </Flex>
      <Card title="Unit's Geolocalization" height='350px' width='100%'>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsMaps}
            constructorType={"mapChart"}
          />
      </Card>
    </Flex>
  );
};