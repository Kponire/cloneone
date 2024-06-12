"use client"
import { Layout } from "@/components/Layout";
import { Box, Flex, rem, Text, TextInput, Group, Button } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

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
          <Flex justify="space-between" align='center' className="mt-[4px] mx-[6px] mb-[40px]">
              <Text style={{ color: "#123360", fontWeight: "600", fontSize: '1.7em'}}>
                Sales Orders
              </Text>
              <Group>
              <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={icon}
                  placeholder="Search"
                  style={{ width: '7em'}}
                />
                <Button  onClick={open} leftSection={<IconPlus size={14} />} style={{ backgroundColor: '#14B8FF', width: '11em', padding: '0 7px', fontSize: '11px', borderRadius: '1px'}}> Create Order </Button>              
            </Group>
          </Flex>
          <Flex justify='space-between' align='center' style={{ padding: '0 1em', margin: '0 6px', backgroundColor: '#FBFFFF', fontWeight: "bolder", color: '#3E5575'}}>
              <Text w='5em' style={{ fontWeight: '600'}}> Order no </Text>
              <Text w='5em' style={{ fontWeight: '600'}}> Contacts </Text>
              <Text w='5em' style={{ fontWeight: '600'}}> Company </Text>
              <Text w='5em' style={{ fontWeight: '600'}}> Location </Text>
              <Text w='8em' style={{ fontWeight: '600'}}> Progress </Text>
              <Text> ... </Text>
          </Flex>
            {
              orders.map((order, key) => (
                <Flex justify='space-between' p='1em' align='center' m='6px' style={{ border: "1px solid #B8B8B8", backgroundColor: "#FFFFFF", borderRadius: '4px'}}>
                  <Text w='5em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.orderNo} </Text>
                  <Text w='5em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.contact} </Text>
                  <Text w='5em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.company} </Text>
                  <Text w='5em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.location} </Text>
                  <Text w='8em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.progress} </Text>
                  <Text> ... </Text>
                </Flex>
              ))
            }
        </Box>
      </Layout>
    </>
  );
}
