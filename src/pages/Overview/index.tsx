import {
  Flex,
} from '@chakra-ui/react';
import { Card } from '../../components/Card';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import variablePie from 'highcharts/modules/variable-pie';
variablePie(Highcharts);

const options = {
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
      y: 2,
      z: 10,
      color: '#52C41A'
    },  
    {
      name: 'Unplan. Stop',
      y: 2,
      z: 10,
      color: '#FAAD14'
    },
    {
      name: 'In Alert',
      y: 1,
      z: 10,
      color: '#ED3833'
    },
    {
      name: 'Plan. Stop',
      y: 2,
      z: 10,
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
          <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={options} constructorType={'chart'} />
        </Card>
        <Card title="Gráfico 2" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            Teste
          </div>
        </Card>
        <Card title="Gráfico 3" height={{base: '280px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            Teste
          </div>
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