"use client";
import {
  Box,
  Flex,
  rem,
  Text,
  TextInput,
  Group,
  Button,
  Modal,
  Divider,
  NativeSelect,
  Stack,
  ScrollArea,
  Avatar,
  Title,
  Grid
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconChevronDown,
} from "@tabler/icons-react";
import { MdClose } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import EditContacts from "./EditContacts";
import EditInfo from "./EditInfo";
import EditShippingAddress from "./EditShippingAddress";
import EditSubscriptions from "./EditSubscriptions";
import ViewSubscriptions from "./ViewSubscriptions";
import { IoMdClose } from "react-icons/io";
import Profile from '../assets/profileLogo.jpg';
import Image from "next/image";
import classes from "./company.module.css";

const companiesData = [
    { id: 1, name: 'Acme', contact: 'Karim Adeyemi', email: 'karim@acme.com', subscriptions: 4 },
    { id: 2, name: 'Acme', contact: 'Karim Adeyemi', email: 'karim@acme.com', subscriptions: 5 },
    { id: 3, name: 'Acme', contact: 'Karim Adeyemi', email: 'karim@acme.com', subscriptions: 4 },
  ];

const Company = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [orders, setOrders] = useState(companiesData);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedCompany(null);
    setEditSection(null);
  };


  const handleEditClick = (section) => {
    setEditSection(section);
  };

  const handleSave = (section, updatedData) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedCompany.id ? { ...order, [section]: updatedData } : order
      )
    );
    setEditSection(null);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Company" 
        classNames={{
          title: classes.modalTitle
        }} 
        closeButtonProps={{
          icon: <IoMdClose size={30} stroke={1.5} color="#123360" />,
        }}
      >
        <Divider pb='sm' />
        <form>
            <TextInput
                label="Name"
                classNames={{
                  label: classes.modalLabel
                }}
            />
             <NativeSelect
                rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
                label="Main Contact"
                data={['Karim Adeyemi', 'Olu Kayode']}
                mt="sm"
                classNames={{
                  label: classes.modalLabel,
                  input: classes.modalInput,
                  section: classes.modalSection
                }}
            />
            <Group justify="flex-end" p='13px 0px'>
            <Button className={classes.modalButtonCancel}>Cancel</Button>
            <Button className={classes.modalButtonAdd}> Add </Button>
            </Group>
        </form>
      </Modal>
      <Box px='1.75rem' className={`${isDetailOpen ? `${classes.openWidth}` : `${classes.closeWidth}`}`}>
      <Box>
          <Flex className={classes.headerContainer}>
              <Title order={2} c="#123360">
                Companies
              </Title>
              <Group>
              <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={icon}
                  placeholder="Search"
                  w='7em'
                />
                <Button 
                  onClick={open} 
                  leftSection={<IconPlus size={14} />} 
                  className={classes.addButton}
                > 
                  Add Company 
                </Button>
              </Group>
          </Flex>
          <Grid justify="space-between" className={classes.tableHeader}>
            <Grid.Col span={2.80} fw='600' > Name </Grid.Col>
            <Grid.Col span={3} fw='600'> Main Contact </Grid.Col>
            <Grid.Col span={4.00} fw='600'> Email </Grid.Col>
            <Grid.Col span={1.70} ta='end' fw='600'> Subscription </Grid.Col>
            <Grid.Col span={0.5} fw='600'>  </Grid.Col>
          </Grid>
            {
              orders.map((order, key) => (
                <Box>
                <Grid justify="space-between" className={classes.tableRow} key={key}>
                  <Grid.Col span={2.80} c='#3E5575' fw='500'> {order.name} </Grid.Col>
                  <Grid.Col span={3} c='#3E5575' fw='500'> {order.contact} </Grid.Col>
                  <Grid.Col span={4.00}  c='#3E5575' fw='500'> {order.email}  </Grid.Col>
                  <Grid.Col span={1.70} c='#3E5575' fw='500' ta='end'> {order.subscriptions} </Grid.Col>
                  <Grid.Col className={classes.tableRowIcon} span={0.5}> <HiDotsHorizontal cursor='pointer' onClick={() => handleCompanyClick(order)} />  </Grid.Col>
                </Grid>  
                </Box>
              ))
            }
        </Box>
        </Box>
        {isDetailOpen && selectedCompany && (
        <ScrollArea className={classes.detailContainer}>
          <Stack gap='lg'>
          <Box className={classes.detailHeader}>
            <Flex justify="space-between" align='center'>
              <Flex align='center'>
              <Avatar src={null} alt="logo" color="#0E3465" bg='white' fz='lg' size='md'>C</Avatar>
              <Text className={classes.detailHeaderText}>
                Company
              </Text>
              </Flex>
              <MdClose onClick={handleCloseDetail} color="white" size='30px' cursor='pointer'></MdClose>
            </Flex>
          </Box>
          {editSection === null ? (
          <Box p='0px 30px'>
          <Box> 
            <Flex justify="space-between" align='center'>
              <Title order={4} c='#25B2FA'>
                Info
              </Title>
              <Button
                variant="light"
                leftSection={<FiEdit size={14} />}
                onClick={() => handleEditClick('info')}
              >
                Edit
              </Button>
            </Flex>
            <Box>
              <Flex className={classes.detailSectionRow}>
                <Text className={classes.detailSectionLabel}>Customer no:</Text>
                <Text className={classes.detailSectionValue}> 7008921</Text>
              </Flex>
              <Flex  className={classes.detailSectionRow}>
                <Text className={classes.detailSectionLabel}>Main Contact:</Text>
                <Flex w='60%'>
                    <Image src={Profile} alt="user" className={classes.detailSectionPicture} />
                    <Text fw='400' fz='13px' pl='6px'> {selectedCompany.contact} </Text>
                </Flex>
              </Flex>
              <Flex  className={classes.detailSectionRow}>
                <Text className={classes.detailSectionLabel}>Company:</Text>
                <Text className={classes.detailSectionValue}> {selectedCompany.name} </Text>
              </Flex>
              <Flex  className={classes.detailSectionRow}>
                <Text className={classes.detailSectionLabel}>Email:</Text>
                <Text className={classes.detailSectionValue}> {selectedCompany.email} </Text>
              </Flex>
            </Box>
          </Box>
          <Box pt='24px'>
            <Flex justify="space-between" align='center'>
              <Flex>
                <Title order={4} c='#25B2FA' > Contacts </Title >
                <RiArrowDropDownLine  size={37} className={classes.riArrowDropDownLine}/>
              </Flex>
              <Button
                variant="light"
                leftSection={<FiEdit size={14} />}
                onClick={() => handleEditClick('contacts')}
              >
                Edit
              </Button>
            </Flex>
            <Avatar.Group spacing="sm" bg='#0E3465'>
              <Avatar src='profileLogo.jpg' radius="xl" />
              <Avatar src='profileLogo.jpg' radius="xl" />
              <Avatar src='profileLogo.jpg' radius="xl" />
              <Avatar radius="xl" bg="#0F4174">+3</Avatar>
            </Avatar.Group>
          </Box>
          <Box pt='24px'>
            <Flex justify="space-between" align='center'>
              <Title order={4} c='#25B2FA'>
                Shipping Address
              </Title>
              <Button
                variant="light"
                leftSection={<FiEdit size={14} />}
                onClick={() => handleEditClick('shippingAddress')}
              >
                Edit
              </Button>
            </Flex>
            <Flex className={classes.detailSectionRow}>
              <Text className={classes.detailSectionLabel}>Country</Text>
              <Text className={classes.detailSectionValue}>Nigeria</Text>
            </Flex>
            <Flex className={classes.detailSectionRow}>
              <Text className={classes.detailSectionLabel}>City:</Text>
              <Text className={classes.detailSectionValue}>Lagos</Text>
            </Flex>
            <Flex className={classes.detailSectionRow}>
              <Text className={classes.detailSectionLabel}>Street</Text>
              <Text className={classes.detailSectionValue}>Kingston lane 8</Text>
            </Flex>
            <Flex className={classes.detailSectionRow}>
              <Text className={classes.detailSectionLabel}>Postcode</Text>
              <Text className={classes.detailSectionValue}>100001</Text>
            </Flex>
            <Flex className={classes.detailSectionRow}>
              <Text className={classes.detailSectionLabel}>Phone</Text>
              <Text className={classes.detailSectionValue}>234-09-461-4000</Text>
            </Flex>
          </Box>
          <Box pt='24px'>
            <Flex justify="space-between" align='center'>
              <Title order={4} c='#25B2FA'>
                Subscriptions
              </Title>
              <Button
                variant="light"
                leftSection={<IconPlus size={14} />}
                onClick={() => handleEditClick('subscriptions')}
              >
                Add
              </Button>
            </Flex>
            <Box className={classes.subscriptionBox}>
              <Flex justify='space-between'>
                <Text className={classes.subscriptionBoxText}>Subscription Name</Text>
                <HiDotsHorizontal className={classes.hiDotsHorizontal} onClick={() => handleEditClick('viewSubscriptions')}/>
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex align='center'>
                  <Image src={Profile} alt="user" className={classes.subscriptionImage} />
                  <Text className={classes.subscriptionBoxContactText}>Contact Name</Text>
                </Flex>
                <Text className={classes.subscriptionBoxStatus}>Active</Text>
              </Flex>
            </Box>
            <Box className={classes.subscriptionBox}>
              <Flex justify='space-between'>
                <Text className={classes.subscriptionBoxText}>Subscription Name</Text>
                <HiDotsHorizontal className={classes.hiDotsHorizontal} onClick={() => handleEditClick('viewSubscriptions')}/>
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex align='center'>
                    <Image src={Profile} alt="user" className={classes.subscriptionImage} />
                    <Text className={classes.subscriptionBoxContactText}>Contact Name</Text>
                  </Flex>
                <Text className={classes.subscriptionBoxStatus}>Active</Text>
              </Flex>
            </Box>
          </Box> 
          </Box> ) : (
            <>
              {editSection === 'info' && (
                <EditInfo
                  info={{
                    companyNumber: selectedCompany.companyNumber,
                    name: selectedCompany.name,
                    contact: selectedCompany.contact,
                    email: selectedCompany.email,
                  }}
                  onSave={(data) => handleSave('info', data)}
                  onCancel={() => setEditSection(null)}
                />
              )}
              {editSection === 'contacts' && (
                <EditContacts
                  contacts={selectedCompany.contacts}
                  onSave={(data) => handleSave('contacts', data)}
                  onCancel={() => setEditSection(null)}
                />
              )}
              {editSection === 'shippingAddress' && (
                <EditShippingAddress
                  address={{
                    country: selectedCompany.country,
                    city: selectedCompany.city,
                    street: selectedCompany.street,
                    postcode: selectedCompany.postcode,
                    phone: selectedCompany.phone,
                  }}
                  onSave={(data) => handleSave('shippingAddress', data)}
                  onCancel={() => setEditSection(null)}
                />
              )}
              {editSection === 'subscriptions' && (
                <EditSubscriptions
                  subscriptions={selectedCompany.subscriptions}
                  onSave={(data) => handleSave('subscriptions', data)}
                  onCancel={() => setEditSection(null)}
                />
              )}
              {editSection === 'viewSubscriptions' && (
                <ViewSubscriptions />
              )}
            </>
          )}
          </Stack>
        </ScrollArea>
      )}
    </>
  )
}

export default Company
