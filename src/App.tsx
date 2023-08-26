import {
  Box,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  Show,
  Hide,
  Text
} from '@chakra-ui/react'
import {
  FiSettings,
  FiX,
  FiActivity,
  FiCpu,
  FiList,
  FiUser,
} from 'react-icons/fi'
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { TractianLogo } from './assets/icons/TractianLogo'
import { BsBank } from "react-icons/bs";
import { NavItem } from './components/NavItem';
import { MobileNav } from './components/MobileNav';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Settings } from './pages/Settings';
import { Overview } from './pages/Overview';
import { Units } from './pages/Units';
import { UnitProfile } from './pages/UnitProfile';
import { CompanyProfile } from './pages/CompanyProfile';
import { Companies } from './pages/Companies';
import { Users } from './pages/Users';
import { WorkOrders } from './pages/WorkOrders';
import { Assets } from './pages/Assets';
import { AssetProfile } from './pages/AssetProfile';

interface LinkItemProps {
  name: string
  icon: JSX.Element
  path: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: <FiActivity color="#fff" />, path: '/' },
  { name: 'Companies', icon: <BsBank color="#fff" />,  path: '/companies'},
  { name: 'Units', icon: <MdOutlineStoreMallDirectory color="#fff" />, path: '/units'},
  { name: 'Assets', icon: <FiCpu color="#fff" />, path: '/assets' },
  { name: 'Work Orders', icon: <FiList color="#fff" />, path: '/work-orders' },
  { name: 'Users', icon: <FiUser color="#fff" />, path: '/users' },
  { name: 'Settings', icon: <FiSettings color="#fff" />, path: '/settings' },

]

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="#FFF">
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} padding={{base: "40px 15px 0px 15px" , sm: "40px 50px 0px 50px" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Overview
                </Text>
              </Box>
              <Overview />
            </>} 
          />
          <Route path="/companies" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Companies
                </Text>
              </Box>
              <Companies />
            </>} 
          />
          <Route path="/companies/:id" element={
            <>
              <CompanyProfile />
            </>} 
          />  
          <Route path="/units" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Units
                </Text>
              </Box>
              <Units />
            </>} 
          />  
          <Route path="/units/:id" element={
            <>
              <UnitProfile />
            </>} 
          />  
          <Route path="/assets" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Assets
                </Text>
              </Box>
              <Assets />
            </>} 
          />
          <Route path="/assets/:id" element={
            <>
              <AssetProfile />
            </>} 
          />          
          <Route path="/work-orders" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Work Orders
                </Text>
              </Box>
              <WorkOrders />
            </>} 
          />
          <Route path="/users" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Users
                </Text>
              </Box>
              <Users />
            </>} 
          />
          <Route path="/settings" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Settings
                </Text>
              </Box>
              <Settings />
            </>} 
          />
          <Route path="/*" element={
            <>
              <Box mb={4}>
                <Text as='b' fontSize='4xl'>
                  Not Found
                </Text>
              </Box>
              Not Found Content
            </>} 
          />                                                          
        </Routes>
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const isAdmin = localStorage.getItem('view') === 'admin';
  const navigate = useNavigate();

  return (
    <Box
      bg="#1A3071"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      paddingTop={{base: '10', md: '5'}}
      {...rest}>
      <Show above='sm'>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box cursor="pointer" onClick={() => navigate('/')} style={{ width: '80%'}}>
            <TractianLogo />
          </Box>
        </Flex>
      </Show>

      {LinkItems.map((link) => {
        if (link.name === 'Companies' && !isAdmin) return;
        return <NavItem key={link.name} label={link.name} onClick={onClose} path={link.path} icon={link.icon} />;
      })}
      <Hide above='sm'>
        <NavItem key={'Close'} onClick={onClose} path={'#'} label="Close" icon={<FiX color="#fff" />} />
      </Hide>
    </Box>
  )
}
