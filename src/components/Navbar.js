"use client";
import { useState, useEffect } from 'react';
import { Box, Flex, List } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiUsers, FiShoppingCart, FiBell, FiLogOut, FiDatabase, FiBox, FiFileText, FiPackage } from 'react-icons/fi';
import { FaList } from "react-icons/fa";
import { TbUserSearch } from "react-icons/tb";
import { MdOutlineNavigateBefore, MdOutlineHandshake, MdOutlineEngineering, MdNavigateNext } from "react-icons/md";
import { Indicator } from '@mantine/core';
import FieldbaseLogo from '../assets/fieldBase1.svg';
import Logo from '../assets/logo.png';
import Profile from '../assets/profileLogo.jpg';
import Image from 'next/image';
import classes from './navbar.module.css';

const Navbar = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('clients');

  /* useEffect(() => {
    const path = pathname.split('/')[1];
    setActiveTab(path);
  }, [pathname]); */

  const navItems = [
    {
      name: 'Clients',
      icon: <TbUserSearch className={classes.iconContainer} style={{ color: activeTab === 'clients' ? '#33ABE0' : '' }} />,
      subLinks: [
        { name: 'Companies', href: '/' },
        { name: 'Contacts', href: '/clients/contacts' },
        { name: 'Sales Orders', href: '/sales-orders' },
        { name: 'Return Orders', href: '/clients/return-orders' },
        { name: 'Subscription', href: '/clients/subscription' },
        { name: 'Products', href: '/clients/products' }
      ]
    },
    {
      name: 'Inventory',
      icon: <FaList className={classes.iconContainer} />,
      subLinks: [
        { name: 'Stock', href: '/inventory/stock' },
        { name: 'Warehouse', href: '/inventory/warehouse' },
        { name: 'Supplies', href: '/inventory/supplies' }
      ]
    },
    {
      name: 'Sales',
      icon: <MdOutlineHandshake className={classes.iconContainer} />,
      subLinks: [
        { name: 'Leads', href: '/sales/leads' },
        { name: 'Opportunities', href: '/sales/opportunities' },
        { name: 'Deals', href: '/sales/deals' }
      ]
    },
    {
      name: 'Staff',
      icon: <MdOutlineEngineering className={classes.iconContainer} />,
      subLinks: [
        { name: 'Employees', href: '/staff/employees' },
        { name: 'Teams', href: '/staff/teams' },
        { name: 'Roles', href: '/staff/roles' }
      ]
    },
    {
      name: 'Notifications',
      icon: <FiBell className={classes.iconContainer} />,
      subLinks: [],
      notificationCount: 13
    }
  ];

  return (
    <Box className={`${classes.container} ${isOpen ? `${classes.containerOpen}` : `${classes.containerClose}` }`}>
      <Flex justify={'space-between'}  mt='0.75rem'>
        <Box className={classes.logoContainer}>
          <Box className={`${classes.image} ${!isOpen && `${classes.hidden}`}`}>
            <Image
              priority
              src={FieldbaseLogo}
              alt="Logo"
              width='130px'
            />
          </Box>
          <Box className={`${classes.image} ${isOpen && `${classes.hidden}`}`}>
            <Image
              priority
              src={Logo}
              alt="Logo"
            />
          </Box>
          {
            isOpen ? (
              <MdOutlineNavigateBefore onClick={toggleSidebar} className={classes.closeIcon} />
            ) : (
              <MdNavigateNext onClick={toggleSidebar} className={classes.closeIcon} />
            )
          }
        </Box>
      </Flex>
      <Box>
        <List className={classes.navList}>
          {navItems.map(item => (
            <li key={item.name} className={classes.navItem}>
              <button
                onClick={() => setActiveTab(item.name.toLowerCase())}
                className={`${classes.navButton} ${activeTab === item.name.toLowerCase() ? `${classes.activeTab}` : `${classes.inactiveTab}`}`}
              >
                {item.icon}
                <span className={`${classes.navName} ${!isOpen && `${classes.hidden}`}`}>{item.name}</span>
                {item.notificationCount && isOpen && (
                  <span className={classes.notification}>
                    {item.notificationCount}
                  </span>
                )}
              </button>
              {activeTab === item.name.toLowerCase() && isOpen && item.subLinks.length > 0 && (
                <ul className={classes.subNavList}>
                  {item.subLinks.map(subLink => (
                    <li key={subLink.name}>
                      <Link href={subLink.href} passHref>
                        <span className={`${pathname === subLink.href ? `${classes.activeSubLink}` : `${classes.subLink}`}`}>
                          {subLink.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </List>
      </Box>
      <Box className={classes.profile}>
        <Image src={Profile} alt="user" className={classes.profileImage} />
        <Box className={`${!isOpen && `${classes.hidden}`}`}>
          <Box className={classes.profileName}>Ibrahim Musa</Box>
          <Link href="/logout">
            <Box className={classes.logout}>Log out</Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
