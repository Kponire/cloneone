"use client"
import { Box, Flex, rem, Text, TextInput, Group, Button, Modal, Divider, NativeSelect, Stack, ScrollArea, Avatar } from "@mantine/core";
import { IconPlus, IconSearch, IconChevronDown, IconDeselect } from "@tabler/icons-react";
import { MdClose } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { theme } from "../../theme";
import EditContacts from "./EditContacts";
import EditInfo from "./EditInfo";
import EditShippingAddress from "./EditShippingAddress";
import EditSubscriptions from "./EditSubscriptions";
import ViewSubscriptions from "./ViewSubscriptions";
import Profile from '../assets/profileLogo.jpg';
import { IoMdClose } from "react-icons/io";

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
    <div style={{ overflow: 'hidden'}}>
      <Modal opened={opened} onClose={close} title="Add Company"  styles={{
          title: {
            color: "#10335B",
            fontWeight: 'bold',
            fontSize: '23px'
          }
        }}
        closeButtonProps={{
          icon: <IoMdClose size={30} stroke={1.5} color="#123360" />,
        }}
      >
        <Divider pb='sm' />
        <form>
            <TextInput
                label="Name"
                styles={{
                  label: {
                    color: '#5B6A81',
                    fontWeight: '700'
                  }
                }}
            />
             <NativeSelect
                rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
                label="Main Contact"
                data={['Karim Adeyemi', 'Olu Kayode']}
                mt="sm"
                styles={{
                  label: {
                    color: '#5B6A81',
                    fontWeight: '700'
                  },
                  input: {
                    color: '#1F304A',
                    fontWeight: '600'
                  },
                  section: {
                    color: '#1F304A',
                    fontWeight: '900'
                  }
                }}
            />
            <Group justify="flex-end" p='13px 0px'>
            <Button style={{ padding: '0px 20px', backgroundColor: 'transparent', color: '#123360', fontWeight: 'bolder'}}>Cancel</Button>
            <Button style={{ padding: '0px 40px', borderRadius: '0px', backgroundColor: '#14B8FF', height: '45px' }}> Add </Button>
            </Group>
        </form>
      </Modal>
      <div className={`px-7 ${isDetailOpen ? 'w-[70%]' : 'w-full'}`}>
      <Box>
          <Flex justify="space-between" align='center' className="mt-[4px] mx-[6px] mb-[40px]">
              <Text style={{ color: "#123360", fontWeight: "600", fontSize: '1.7em'}}>
                Companies
              </Text>
              <Group>
              <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={icon}
                  placeholder="Search"
                  style={{ width: '7em'}}
                />
                <Button  onClick={open} leftSection={<IconPlus size={14} />} style={{ backgroundColor: '#14B8FF', width: '11em', padding: '0 7px', fontSize: '11px', borderRadius: '1px'}}> Add Company </Button>
              </Group>
          </Flex>
          <Flex justify='space-between' align='center' style={{ padding: '0 1em', margin: '0 6px', backgroundColor: '#FBFFFF', fontWeight: "bolder", color: '#3E5575'}}>
              <Text w='5em' style={{ fontWeight: '600'}}> Name </Text>
              <Text w='10em' style={{ fontWeight: '600'}}> Main Contact </Text>
              <Text w='15em' style={{ fontWeight: '600'}}> Email </Text>
              <Group>
                <Text w='8em' style={{ fontWeight: '600'}}> Subscriptions </Text>
                <Text w='1em'> </Text>
              </Group>
          </Flex>
            {
              orders.map((order, key) => (
                <Flex justify='space-between' p='1em' align='center' m='6px' style={{ border: "1px solid #B8B8B8", backgroundColor: "#FFFFFF", borderRadius: '4px'}}>
                  <Text w='5em' style={{ color: '#3E5575', fontWeight: '500'}}> {order.name} </Text>
                  <Text w='10em' style={{color: '#3E5575', fontWeight: '500' }}> {order.contact} </Text>
                  <Text w='15em' style={{ color: '#3E5575', fontWeight: '500' }}> {order.email} </Text>
                  <Group>
                    <Text w='8em' style={{ color: '#3E5575', fontWeight: '500', textAlign: 'end' }}> {order.subscriptions} </Text>
                    <HiDotsHorizontal w='1em' onClick={() => handleCompanyClick(order)} />
                  </Group>
                </Flex>
              ))
            }
        </Box>
        </div>
        {isDetailOpen && selectedCompany && (
        <ScrollArea h='100vh' style={{ position: 'absolute', right: '0', top: '0', width: '400px', backgroundColor: '#0E3465', padding: '20px 0px 0px 0px', boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: '5s ease-in-out', minHeight: '100vh' }}>
          <Stack gap='lg'>
          <Box style={{ padding: '0px 30px' }}>
            <Flex justify="space-between" align='center'>
              <Flex align='center'>
              <Avatar src={null} alt="logo" color="#0E3465" bg='white' fz='lg' size='md'>C</Avatar>
              <Text ml='7px' style={{ color: "white", fontWeight: "600", fontSize: '1.5em' }}>
                Company
              </Text>
              </Flex>
              <MdClose onClick={handleCloseDetail} color="white" size='30px' ></MdClose>
            </Flex>
          </Box>
          {editSection === null ? (
          <Box style={{ padding: '0px 30px' }}>
          <Box> 
            <Flex justify="space-between" align='center'>
              <Text style={{ color: "#25B2FA", fontWeight: "500", fontSize: '1.2em' }}>
                Info
              </Text>
              <Button
                variant="light"
                leftSection={<FiEdit size={14} />}
                onClick={() => handleEditClick('info')}
              >
                Edit
              </Button>
            </Flex>
            <Box>
              <Flex style={{ color: 'white', paddingTop: '6px' }}>
                <Text style={{ width: '40%', fontWeight: '500'}}>Customer no:</Text>
                <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}> 7008921</Text>
              </Flex>
              <Flex  style={{ color: 'white', paddingTop: '6px'}}>
                <Text style={{ width: '40%', fontWeight: '500'}}>Main Contact:</Text>
                <Flex style={{ width: '60%'}} >
                    <Image src={Profile} alt="user" className="w-5 h-5 rounded-full" />
                    <Text style={{ fontWeight: '400', fontSize: '13px', paddingLeft: '2px' }}> {selectedCompany.contact} </Text>
                  </Flex>
              </Flex>
              <Flex  style={{ color: 'white', paddingTop: '6px'}}>
                <Text style={{ width: '40%', fontWeight: '500'}}>Company:</Text>
                <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}> {selectedCompany.name} </Text>
              </Flex>
              <Flex  style={{ color: 'white', paddingTop: '6px'}}>
                <Text style={{ width: '40%', fontWeight: '500'}}>Email:</Text>
                <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}> {selectedCompany.email} </Text>
              </Flex>
            </Box>
          </Box>
          <Box style={{ paddingTop: '24px' }}>
            <Flex justify="space-between" align='center'>
              <Flex>
                <Text style={{ color: "#25B2FA", fontWeight: "500", fontSize: '1.2em' }}> Contacts </Text>
                <RiArrowDropDownLine  size={37} style={{ alignItems: 'flex-end', paddingBottom: '2px', color: "#25B2FA"}}/>
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
          <Box style={{ paddingTop: '24px' }}>
            <Flex justify="space-between" align='center'>
              <Text style={{ color: "#25B2FA", fontWeight: "500", fontSize: '1.2em' }}>
                Shipping Address
              </Text>
              <Button
                variant="light"
                leftSection={<FiEdit size={14} />}
                onClick={() => handleEditClick('shippingAddress')}
              >
                Edit
              </Button>
            </Flex>
            <Flex justify='space-between' style={{ color: 'white', paddingTop: '6px' }}>
              <Text style={{ width: '40%', fontWeight: '500'}}>Country</Text>
              <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}>Nigeria</Text>
            </Flex>
            <Flex justify='space-between' style={{ color: 'white', paddingTop: '6px' }}>
              <Text style={{ width: '40%', fontWeight: '500'}}>City:</Text>
              <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}>Lagos</Text>
            </Flex>
            <Flex justify='space-between' style={{ color: 'white', paddingTop: '6px' }}>
              <Text style={{ width: '40%', fontWeight: '500'}}>Street</Text>
              <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}>Kingston lane 8</Text>
            </Flex>
            <Flex justify='space-between' style={{  color: 'white', paddingTop: '6px' }}>
              <Text style={{ width: '40%', fontWeight: '500'}}>Postcode</Text>
              <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}>100001</Text>
            </Flex>
            <Flex justify='space-between' style={{ color: 'white',  paddingTop: '6px' }}>
              <Text style={{ width: '40%', fontWeight: '500'}}>Phone</Text>
              <Text style={{ width: '60%', fontWeight: '200', fontSize: '15px' }}>234-09-461-4000</Text>
            </Flex>
          </Box>
          <Box style={{ paddingTop: '24px' }}>
            <Flex justify="space-between" align='center'>
              <Text style={{ color: "#25B2FA", fontWeight: "500", fontSize: '1.2em' }}>
                Subscriptions
              </Text>
              <Button
                variant="light"
                leftSection={<IconPlus size={14} />}
                onClick={() => handleEditClick('subscriptions')}
              >
                Add
              </Button>
            </Flex>
            <Box style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '4px', marginBottom: '5px', marginTop: '10px' }}>
              <Flex justify='space-between'>
                <Text style={{ color: '#18324B', fontWeight: 'bold' }}>Subscription Name</Text>
                <HiDotsHorizontal style={{ display: 'flex', alignItems: 'flex-end'}} onClick={() => handleEditClick('viewSubscriptions')}/>
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex align='center'>
                  <Image src={Profile} alt="user" className="w-8 h-8 rounded-full" />
                  <Text style={{ color: '#3C4E66', fontSize: '12px', fontWeight: 'bold'}}>Contact Name</Text>
                </Flex>
                <Text style={{ color: '#6AB687', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#EEF9F3', padding: '6px' }}>Active</Text>
              </Flex>
            </Box>
            <Box style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '4px', marginBottom: '10px', marginTop: '10px' }}>
              <Flex justify='space-between'>
                <Text style={{ color: '#18324B', fontWeight: 'bold' }}>Subscription Name</Text>
                <HiDotsHorizontal style={{ display: 'flex', alignItems: 'flex-end'}} onClick={() => handleEditClick('viewSubscriptions')}/>
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex align='center'>
                    <Image src={Profile} alt="user" className="w-8 h-8 rounded-full" />
                    <Text style={{ color: '#3C4E66', fontSize: '12px', fontWeight: 'bold'}}>Contact Name</Text>
                  </Flex>
                <Text style={{ color: '#6AB687', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#EEF9F3', padding: '6px' }}>Active</Text>
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
    </div>
  )
}

export default Company
