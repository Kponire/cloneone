"use client";
import { useState, useEffect } from 'react';
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
      icon: <TbUserSearch className="w-5 h-5" style={{ color: activeTab === 'clients' ? '#33ABE0' : '' }} />,
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
      icon: <FaList className="w-5 h-5" />,
      subLinks: [
        { name: 'Stock', href: '/inventory/stock' },
        { name: 'Warehouse', href: '/inventory/warehouse' },
        { name: 'Supplies', href: '/inventory/supplies' }
      ]
    },
    {
      name: 'Sales',
      icon: <MdOutlineHandshake className="w-5 h-5" />,
      subLinks: [
        { name: 'Leads', href: '/sales/leads' },
        { name: 'Opportunities', href: '/sales/opportunities' },
        { name: 'Deals', href: '/sales/deals' }
      ]
    },
    {
      name: 'Staff',
      icon: <MdOutlineEngineering className="w-5 h-5" />,
      subLinks: [
        { name: 'Employees', href: '/staff/employees' },
        { name: 'Teams', href: '/staff/teams' },
        { name: 'Roles', href: '/staff/roles' }
      ]
    },
    {
      name: 'Notifications',
      icon: <FiBell className="w-5 h-5" />,
      subLinks: [],
      notificationCount: 13
    }
  ];

  return (
    <div className={`flex flex-col relative h-screen pl-1 pt-3 bg-white border border-e-[#C8CCCF] ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="space-y-3">
        <div className="flex items-center justify-between pl-3 pt-4 pb-1">
          <div className={`text-xl font-bold ${!isOpen && 'hidden'}`}>
            <Image
              priority
              src={FieldbaseLogo}
              alt="Logo"
              style={{ width: '130px' }}
            />
          </div>
          <div className={`text-xl font-bold ${isOpen && 'hidden'}`}>
            <Image
              priority
              src={Logo}
              alt="Logo"
            />
          </div>
          {
            isOpen ? (
              <MdOutlineNavigateBefore onClick={toggleSidebar} className='border absolute right-0' />
            ) : (
              <MdNavigateNext onClick={toggleSidebar} className='border absolute right-0' />
            )
          }
        </div>
      </div>
      <div className="flex-1">
        <ul className="pt-3 pb-4 space-y-1 text-sm font-bold">
          {navItems.map(item => (
            <li key={item.name} className="rounded-sm relative">
              <button
                onClick={() => setActiveTab(item.name.toLowerCase())}
                className={`flex items-center pl-3 space-x-2 w-full ${activeTab === item.name.toLowerCase() ? 'bg-[#E7F8FF] text-[#33ABE0] py-4 ' : 'text-[#133251] py-3'} before:block before:absolute ${activeTab === item.name.toLowerCase() ? 'before:bg-[#16B7FF]' : ''} before:left-[-12px] before:h-[52px] before:w-[12px]`}
              >
                {item.icon}
                <span className={`${!isOpen && 'hidden'}`}>{item.name}</span>
                {item.notificationCount && isOpen && (
                  <span className="ml-auto text-xs bg-red-500 text-white rounded-full px-2 py-1 absolute right-4">
                    {item.notificationCount}
                  </span>
                )}
              </button>
              {activeTab === item.name.toLowerCase() && isOpen && item.subLinks.length > 0 && (
                <ul className="pl-8 mt-2 space-y-1">
                  {item.subLinks.map(subLink => (
                    <li key={subLink.name}>
                      <Link href={subLink.href} passHref>
                        <span className={`${pathname === subLink.href ? 'text-[#33ABE0]' : 'text-[#133251]'}`}>
                          {subLink.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center pl-3 py-3 mt-auto space-x-2 bg-[#F3FBFE]">
        <Image src={Profile} alt="user" className="w-18 h-18 rounded-full" />
        <div className={`${!isOpen && 'hidden'}`}>
          <div className="text-sm font-medium text-[#13325E] font-[700] h-[13px]">Ibrahim Musa</div>
          <div>
            <Link href="/logout">
              <span className="text-xs text-[#485B6A]">Log out</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
