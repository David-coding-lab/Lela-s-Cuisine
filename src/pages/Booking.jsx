import { Badge, Box, Button, Flex, HStack, Image, Input, InputGroup, Select, Text, useMediaQuery } from '@chakra-ui/react'
import reservationImg from '../assets/reservationImg.png'

function Booking() {
    const [isSmallScreen] = useMediaQuery("(max-width: 777px)")
    return (
        <Flex
            justify='space-evenly'
            align='center'
            pt='50px'
        >

        {
            !isSmallScreen &&
                <Flex
                    flexDir='column'
                    align='center'
                    justify='center'
                    gap='10px'
                >
                    <Text
                        fontFamily='Leckerli One'
                        fontSize='x-large'
                        color='#554A4A'
                    >Book a Reservation</Text>
                        <Image
                        src={reservationImg}
                        width={{base: '150px', sm: '200px', md: '250px', lg: '450px'}}
                    />
                </Flex>
        }
            <Flex
                w='400px'
                height='450px'
                bgColor='rgba(199, 199, 199, 0.26)'
                padding='40px'
                flexDir='column'
                gap='40px'
                color='#554A4A'
                fontFamily='Mogra'
                borderRadius='10px'
                justify='center'

            >
                <InputGroup display='flex' flexDir='column'>
                    <Text>Name</Text>
                    <Input
                        border='none'
                        borderBottom='1px solid #5E4949'
                        bgColor='transparent'
                        borderRadius='0'
                        width='300px'
                    />
                </InputGroup>

                <InputGroup display='flex' flexDir='column'>
                    <Text>Phone</Text>
                    <Input
                        border='none'
                        borderBottom='1px solid #5E4949'
                        bgColor='transparent'
                        borderRadius='0'
                        width='300px'
                    />
                </InputGroup>

                <InputGroup display='flex' flexDir='column'>
                    <Text>Date</Text>
                    <Input
                        type='date'
                        border='none'
                        borderBottom='1px solid #5E4949'
                        bgColor='transparent'
                        borderRadius='0'
                        width='300px'
                    />
                </InputGroup>

                <Button
                    w='150px'
                    h='40px'
                    bgColor='#5E4949'
                    color='white'
                    display='flex'
                    alignSelf='flex-end'
                    _hover={{
                        bgColor: 'transparent',
                        border: '1px solid #5E4949',
                        color: '#5E4949'
                    }}
                >Book</Button>
            </Flex>
        </Flex>
    )
}

export default Booking