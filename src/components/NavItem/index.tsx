import {
  Flex,
  FlexProps,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: JSX.Element
  label: string
  path: string
}
export const NavItem = ({ icon, children, label, path, ...rest }: NavItemProps) => {
  const location = useLocation();
  const isSelected = location.pathname === path;

  return (
    <Link to={path}>
      <Flex
      align="center"
      p="4"
      role="group"
      cursor="pointer"
      paddingLeft="8"
      color="#fff"
      bg={isSelected ? '#051746':"#1A3071" }
      borderRight={isSelected ? '10px solid #6BFBCE' : 'none'}
      _hover={{
        bg: '#051746',
        color: 'white',
      }}
        {...rest}>
        {icon}
        <span style={{ marginLeft: 10, fontWeight: 'bold' }}>{label}</span>
        {children}
      </Flex>
    </Link>
  )
}