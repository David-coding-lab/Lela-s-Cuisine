import { Box, Button, Flex, IconButton, Image, Input, Text, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Search2Icon } from "@chakra-ui/icons"
import fullLogo from '../assets/FullLogo.png'
import basket from '../assets/basket.png'
import userIcon from '../assets/user.png'
import { AppContext } from "../AppContex";
import { useContext } from "react"


function Header() {
    const {CartItemsNum,setIsOpen} = useContext(AppContext)
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const [isSmallScreen2] = useMediaQuery("(max-width: 650px)");
    return (
        <Box
            w='full'
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            pt='10px'
            gap='15px'
            fontFamily='Mogra'
            color='rgba(54, 54, 54, 0.72)'
            maxW='150em'
            alignSelf='center'
        >
            <Image src={fullLogo} />
            <Flex
                w='full'
                paddingInline='20px'
                justifyContent={{base: 'center', sm: 'space-between'}}
                alignItems='center'
            >
                {/* search Bar */}
                <Flex
                    w='200px'
                    h='40px'
                    bgColor='#F5F5F5'
                    align='center'
                    borderRadius='20px'
                    paddingLeft='15px'
                    gap='5px'
                    display={isSmallScreen2 ? 'none' : 'flex'}
                >
                    <Search2Icon />
                    <Input
                        placeholder="Search"
                        w='inherit'
                        h='inherit'
                        border='none'
                        borderRightRadius='20px'
                    />
                </Flex>

                {/* Nav Links */}
                <Flex
                    w='350px'
                    justify='center'
                    gap='24px'
                    width={isSmallScreen2 && '700px'}
                >
                    <Link to={''}>Home</Link>
                    <Link to={'/menu'}>Menu</Link>
                    <Link to={'/order'}>Order</Link>
                    <Link to={'/about'}>About</Link>
                </Flex>

                <Flex
                    align='center'
                    gap='15px'
                >
                    <Box display={isSmallScreen ? 'none' : 'block'}><Link to={'/booking'}>Book a Table</Link></Box>
                    <Box
                        display={{ base: 'none', lg: 'block'}}
                    >
                        <Link to={'/cart'}>
                            <Flex position='relative'>
                                <Image w='30px' src={basket}/>
                                {/* Dynamically show the number of items in cart */}
                                <Text
                                    position='absolute'
                                    top='15px'
                                    left='18px'
                                    width='20px'
                                    height='20px'
                                    borderRadius='50%'
                                    bgColor='#E31B1B'
                                    placeContent='center'
                                    display='grid'
                                    color='white'
                                    fontFamily='Jost'

                                >{CartItemsNum}</Text>

                            </Flex>
                        </Link>
                    </Box>
                    <IconButton
                        onClick={() => setIsOpen(true)}
                        bgColor='transparent'
                        _hover={{bgColor: 'transparent'}}
                    ><Image w={{base: '50px', md: '30px'}} src={userIcon}/></IconButton>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header