import React from 'react';
import { Tabs, Card, Text, Group, Badge, Title, Flex, rem } from '@mantine/core';
import { RiArrowDropDownLine, RiShipLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './viewSubscriptions.module.css';

const servicesData = [
  { id: 1, title: 'Radar Service', status: 'Upcoming', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#3EB4F1' },
  { id: 2, title: 'Radar Service', status: 'Emailed', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#C09F2E' },
  { id: 3, title: 'Radar Service', status: 'Agreed', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: 'green' },
  { id: 4, title: 'Radar Service', status: 'Denied', date: '23 Oct 2022', shipName: 'Ship Name', statusColor: '#84302E' },
];

const ServiceCard = ({ title, status, date, shipName, statusColor }) => (
  <Card shadow="sm" padding="sm" radius="md" className={styles.card}>
    <Flex justify='space-between'>
      <Text weight={500} className={styles.cardTitle}>{title}</Text>
      <Badge 
        variant="light" 
        rightSection={<MdOutlineKeyboardArrowDown style={{ width: rem(12), height: rem(12) }} />} 
        color={statusColor }
        size="md" 
        radius="xs" 
        className={styles.badge}
      >
        {status}
      </Badge>
    </Flex>
    <Flex justify='space-between' className={styles.cardInfo}>
      <Flex align='center'>
        <RiShipLine size={25} />
        <Text size="sm" className={styles.shipName}>{shipName}</Text>
      </Flex>
      <Text size="sm" color="dimmed" className={styles.date}>{date}</Text>
    </Flex>
  </Card>
);

const ViewSubscriptions = () => {
  return (
    <div className={styles.container}>
      <Tabs defaultValue="services" className={styles.tabs}>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="about" className={styles.tab} activeClassName={styles.tabActive}>
            About
          </Tabs.Tab>
          <Tabs.Tab value="services" className={styles.tab} activeClassName={styles.tabActive}>
            Services
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about" className={styles.panel}>
          About Page
        </Tabs.Panel>

        <Tabs.Panel value="services" className={styles.panelServices}>
          <div className={styles.servicesContainer}>
            <Flex justify='space-between' className={styles.serviceHeader}>
              <Title order={4} className={styles.title}>5 Services</Title>
              <Flex className={styles.allServices}>
                <Text>All Services</Text>
                <RiArrowDropDownLine size={23} />
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
};

export default ViewSubscriptions;
