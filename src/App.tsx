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
import { Routes, Route } from 'react-router-dom';
import { Settings } from './pages/Settings';
import { Overview } from './pages/Overview';

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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <Box ml={{ base: 0, md: 60 }} padding="40px 50px 0px 50px">
        <Box mb={4}>
          <Text as='b' fontSize='4xl'>
            <Routes>
              <Route path="/" element={"Overview"} />
              <Route path="/companies" element={"Companies"} />
              <Route path="/units" element={"Units"} />
              <Route path="/assets" element={"Assets"} />
              <Route path="/work-orders" element={"Work Orders"} />
              <Route path="/users" element={"Users"} />
              <Route path="/settings" element={"Settings"} />
              <Route path="/*" element={"Not Found"} />
            </Routes>
          </Text>
        </Box>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/companies" element={<div>Companies Content</div>} />
          <Route path="/units" element={<div>Units Content</div>} />
          <Route path="/assets" element={<div>Assets Content</div>} />
          <Route path="/work-orders" element={<div>Work Orders Content</div>} />
          <Route path="/users" element={<div>Users Content</div>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<div>Not Found Content</div>} />
        </Routes>
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
          <Box style={{ width: '80%'}}>
            <TractianLogo />
          </Box>
        </Flex>
      </Show>

      {LinkItems.map((link) => (
        <NavItem key={link.name} label={link.name} onClick={onClose} path={link.path} icon={link.icon} />
      ))}
      <Hide above='sm'>
        <NavItem key={'Close'} onClick={onClose} path={'#'} label="Close" icon={<FiX color="#fff" />} />
      </Hide>
    </Box>
  )
}
