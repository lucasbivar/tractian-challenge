import {
  Flex,
  Text
} from '@chakra-ui/react';
import { Card } from '../../components/Card';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import variablePie from 'highcharts/modules/variable-pie';
variablePie(Highcharts);

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

export const Overview = () => {

  return (
    <Flex width="100%" overflowY="scroll" flexDirection="column">
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" height={{base: 'auto', sm: '280px'}} mb={{base: '0px', sm: '20px'}} width="100%" >
        <Card title="Machine Status" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={optionsMachineStatus} constructorType={'chart'} />
        </Card>
        <Card title="Machine Health" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            <Flex flexDirection="row" alignItems="center" mt="1" mb="1">
              <div style={{ width: 10, height: 35, backgroundColor: '#1A3071', borderRadius: 5, marginRight: 10 }} />
              <Text style={{ marginRight: 10 }} as='b'>30</Text>
              <Text>Total of Machines</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <div style={{ width: 10, height: 35, backgroundColor: '#52C41A', borderRadius: 5, marginRight: 10 }} />
              <Text style={{ marginRight: 10 }} as='b'>14</Text>
              <Text>Correct</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <div style={{ width: 10, height: 35, backgroundColor: '#FAAD14', borderRadius: 5, marginRight: 10 }} />
              <Text style={{ marginRight: 10 }} as='b'>10</Text>
              <Text>Risk</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center" mb="1">
              <div style={{ width: 10, height: 35, backgroundColor: '#ED3833', borderRadius: 5, marginRight: 10 }} />
              <Text style={{ marginRight: 10 }} as='b'>06</Text>
              <Text>Urgent</Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center">
              <div style={{ width: 10, height: 35, backgroundColor: '#D7D7D7', borderRadius: 5, marginRight: 10 }} />
              <Text style={{ marginRight: 10 }} as='b'>01</Text>
              <Text>No Informtaion</Text>
            </Flex>
          </div>
        </Card>
        <Card title="Work Orders Status" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={optionsMachineWorkOrders} constructorType={'chart'} />
        </Card>
      </Flex>
      <Card title="Gráfico 4" height='280px' width='100%'>
        <div>
          Teste
        </div>
      </Card>
    </Flex>
  );
};