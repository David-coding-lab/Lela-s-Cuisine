import { Box, Flex, Image, Img, Text, useMediaQuery } from '@chakra-ui/react';

import pastry from'../assets/dishes/pastry-cakes.png'
import chicken from '../assets/dishes/chicken.png'
import ChineeseFood from '../assets/dishes/chinesee-food 1.png'

const Carousel = () => {
        const [isSmallScreen2] = useMediaQuery("(max-width: 480px)");
    const foodItems = [
    { image: pastry, label: 'Pastries' },
    { image: chicken, label: 'Fried Food' },
    { image: ChineeseFood, label: 'Grilled Food' },
    { image: ChineeseFood, label: 'Grilled Food' },
    { image: ChineeseFood, label: 'Grilled Food' },
    { image: ChineeseFood, label: 'Grilled Food' },
    { image: '../assets/dishes/egusi.png', label: 'Grilled Food' },
    { image: 'https://via.placeholder.com/200x150?text=Grilled+Food', label: 'Grilled Food' },
    ];



    // things to be done
    // 1 create a skelleton for loading
    // 2 we need to fetch from the json file
    // 3 we need to add the click functionality to the cards


    return (
    <Flex
        overflowX="auto"
        padding="10px"
        paddingTop='30px'
        gap="20px"
        scrollSnapType="x mandatory"
        scrollBehavior='smooth'
        css={isSmallScreen2 && {
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        }}
    >
        {foodItems.map((item, index) => (
        <Box
            key={index}
            minWidth="300px"
            height = {{base: '150px', sm: '200px', md: '350px'}}
            borderRadius="8px"
            boxShadow="sm"
            scrollSnapAlign="start"
            pb='20px'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            backgroundImage={item.image}
            position='relative'
            cursor='pointer'
        >
            <Box
                w='100%'
                h={{base: '150px', sm: '200px', md: '350px'}}
                bottom='1px'
                position='absolute'
                bgColor='blackAlpha.400'
                borderRadius='15px'
                transition='background-color .3s ease-in-out, color .3s ease-in-out'
                display='flex'
                alignItems='end'
                justifyContent='center'
                color="#FF1010"
                _hover={{
                    bgColor: 'blackAlpha.100',
                    color: 'white'
                }}
            >
                <Text
                    fontSize="23px"
                    zIndex='1'
                    fontWeight="medium"
                    color="inherit"
                    p="2"
                    fontFamily='Mogra'
                >
                    {item.label}
                </Text>
            </Box>
        </Box>
        ))}
    </Flex>
    );
};

export default Carousel;
