"use client"
import { Layout } from "@/components/Layout";
import { Box, Flex, rem, Text, TextInput, Group, Button, Title } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import classes from '../../components/company.module.css'
import { HiDotsHorizontal } from "react-icons/hi";

const initialOrders = [
  { orderNo: 'S231', contact: 'Full Name', company: 'Acme', location: 'Titanic', progress: 'Order Created' },
  { orderNo: 'S231', contact: 'Full Name', company: 'Acme', location: 'Titanic', progress: 'Shipped' },
  { orderNo: 'S231', contact: 'Full Name', company: 'Acme', location: 'Titanic', progress: 'Delivered' },
];

export default function Home() {
  const [orders, setOrders] = useState(initialOrders);
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />
  return (
    <>
      <Layout > 
        <Box style={{ padding: '0 2em'}}>
        <Flex className={classes.headerContainer}>
              <Title order={2} c="#123360">
                Sales Orders
              </Title>
              <Group>
              <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={icon}
                  placeholder="Search"
                  w='7em'
                />
                <Button  
                  leftSection={<IconPlus size={14} />} 
                  className={classes.addButton}
                > 
                  Create Order 
                </Button>
              </Group>
          </Flex>
          <Flex className={classes.tableHeader}>
              <Text w='5em' fw='600'> Order no </Text>
              <Text w='5em' fw='600'> Contacts </Text>
              <Text w='5em' fw='600'> Company </Text>
              <Text w='5em' fw='600'> Location </Text>
              <Text w='8em' fw='600'> Progress </Text>
              <HiDotsHorizontal w='1em'/>
          </Flex>
            {
              orders.map((order, key) => (
                <Flex className={classes.tableRow} key={key}>
                  <Text w='5em' c='#3E5575' fw='500'> {order.orderNo} </Text>
                  <Text w='5em' c='#3E5575' fw='500'> {order.contact} </Text>
                  <Text w='5em' c='#3E5575' fw='500'> {order.company} </Text>
                  <Text w='5em' c='#3E5575' fw='500'> {order.location} </Text>
                  <Text w='8em' c='#3E5575' fw='500'> {order.progress} </Text>
                  <HiDotsHorizontal w='1em'/>
                </Flex>
              ))
            }
        </Box>
      </Layout>
    </>
  );
}
