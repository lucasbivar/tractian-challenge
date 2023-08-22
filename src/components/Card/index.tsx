import {
  Flex, Stack, Text,
} from '@chakra-ui/react';

interface CardProps {
  children: React.ReactNode
  width?: string | object
  height?: string | object
  title?: string
}

export const Card = ({children, title, ...rest}: CardProps) => {

  return (
    <Flex {...rest}  borderRadius={10} mb={5} padding="5" border="1px solid #D7D7D7" borderTop="15px solid #1A3071"  >
      <Stack width="100%">
        <Text as="b">{title}</Text>
        {children}
      </Stack>
    </Flex>
  );
}