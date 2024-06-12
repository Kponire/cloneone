"use client"
import { useState } from 'react';
import { AppShell } from '@mantine/core';
import Navbar from './Navbar';

export function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppShell
      padding="md"
      navbar={{
        width: isOpen ? 250 : 70,
        breakpoint: 'sm',
        backgroundColor: 'blue',
      }}
    >
      <AppShell.Navbar width={{ base: isOpen ? 250 : 70 }}>
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </AppShell.Navbar>
      <AppShell.Main padding={{ base: isOpen ? 'md' : 'sm' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
