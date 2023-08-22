import {
  Flex,
} from '@chakra-ui/react';
import { Card } from '../../components/Card';

export const Overview = () => {

  return (
    <Flex width="100%" overflowY="scroll" flexDirection="column">
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" height={{base: 'auto', sm: '250px'}} mb={{base: '0px', sm: '20px'}} width="100%" >
        <Card title="Gráfico 1" height={{base: '250px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            Test
          </div>
        </Card>
        <Card title="Gráfico 2" height={{base: '250px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            Teste
          </div>
        </Card>
        <Card title="Gráfico 3" height={{base: '250px', sm: '100%'}} width={{base: '100%', sm: '32%'}}>
          <div>
            Teste
          </div>
        </Card>
      </Flex>
      <Card title="Gráfico 4" height='250px' width='100%'>
        <div>
          Teste
        </div>
      </Card>
    </Flex>
  );
};