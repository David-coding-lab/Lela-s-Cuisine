import { Box, Button, Flex, Image, VStack } from "@chakra-ui/react"
import deliveryGuy from '../assets/delivery_guy 1.png'
import deliveryText from '../assets/Grouped Text.png'
import { Link } from "react-router-dom"

function Order() {
    return (
        <Box>

            <Flex justify='center' align='center' pt='50px'>
                <VStack justify='center' gap='20px' align='center' mb='20px'>

                    <Image
                        src={deliveryGuy}
                        width={{base: '150px', sm: '200px', md: '250px', lg: '450px'}}
                    />
                    <Link to='/menu'>
                        <Button
                            bgColor='#5E4949'
                            fontFamily='Leckerli One'
                            color='white'
                            width='150px'
                            height='50px'
                            _hover={{
                                bgColor: 'transparent',
                                border: '1px solid #5E4949',
                                color: '#5E4949'
                            }}

                        >Shop Now</Button>
                    </Link>
                </VStack>

                <Image
                    src={deliveryText}
                    h={{base: '150px', sm: '150px', md: '250px', lg: '450px'}}
                />
            </Flex>

        </Box>
    )
}

export default Order