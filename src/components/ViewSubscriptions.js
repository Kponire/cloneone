import React from 'react';
import { Tabs } from '@mantine/core';
import { Card, Text, Group, Badge, Title, Flex, rem } from '@mantine/core';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiShipLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const servicesData = [
  { id: 1, title: 'Radar Service', status: 'Upcoming', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#3EB4F1' },
  { id: 2, title: 'Radar Service', status: 'Emailed', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#C09F2E' },
  { id: 3, title: 'Radar Service', status: 'Agreed', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: 'green' },
  { id: 4, title: 'Radar Service', status: 'Denied', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#84302E' },
];

const ServiceCard = ({ title, status, date, shipName, statusColor }) => (
  <Card shadow="sm" padding="sm" radius="md" style={{ marginBottom: '0.5em', borderRadius: '4px' }}>
    <Flex justify='space-between'>
      <Text weight={500} style={{ color: '#162D56', fontWeight: '700' }}>{title}</Text>
      <Badge 
        variant="light" 
        rightSection={<MdOutlineKeyboardArrowDown style={{ width: rem(12), height: rem(12) }} />} 
        color={statusColor} 
        size="md" 
        radius="xs" 
        style={{ fontWeight: '700', textTransform: 'none' }}
      >
        {status}
      </Badge>
    </Flex>
    <Flex justify='space-between' pt='7px' pb='3px'>
      <Flex align='center'>
        <RiShipLine size={25} />
        <Text size="sm" style={{ color: '#4F5C6D', fontWeight: '700', fontSize: '10px', paddingLeft: '4px' }}>{shipName}</Text>
      </Flex>
      <Text size="sm" color="dimmed" style={{ color: '#4D5673', fontSize: '10px', fontWeight: '600' }}>{date}</Text>
    </Flex>
  </Card>
);

const ViewSubscriptions = () => {
  return (
    <div style={{ width: '100%', color: '#FFFFFF' }}>
        <Tabs defaultValue="services" styles={{
          tab: {
            color: '#FFFFFF', // Default color for inactive tabs
            '&[data-active]': {
              color: '#2BADF8', // Color for active tab
            },
          },
        }}
        style={{
          fontWeight: '600',
          fontSize: '30px',
        }}
        >
        <Tabs.List grow justify="center">
            <Tabs.Tab value="about">
                About
            </Tabs.Tab>
            <Tabs.Tab value="services">
                Services
            </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about" style={{ padding: '0px 20px' }}>
            About Page
        </Tabs.Panel>

        <Tabs.Panel value="services" style={{ padding: '0px 30px'}}>
            <div style={{ marginTop: '1em' }}>
            <Flex justify='space-between' py='sm'>
            <Title order={4} style={{ fontWeight: '500'}}>5 Services</Title>
            <Flex>
              <Text style={{ fontSize: '14px' }}> All Services </Text>
              <RiArrowDropDownLine  size={23} />
            </Flex>
            </Flex>

            {servicesData.map(service => (
            <ServiceCard 
                key={service.id} 
                title={service.title} 
                status={service.status} 
                date={service.date} 
                shipName={service.shipName} 
                statusColor={service.statusColor} 
            />
            ))}
        </div>
        </Tabs.Panel>
        </Tabs>
    </div>
  );
}

export default ViewSubscriptions;
