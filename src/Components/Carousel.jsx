import { Box, Flex, Skeleton, Text, useMediaQuery } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

const Carousel = () => {
    const [isSmallScreen2] = useMediaQuery("(max-width: 480px)");
    const [fetchedFood,setFetchedFood] = useState()
    const [loading, setLoading] = useState(false)

    // things to be done
    // 3 we need to add the click functionality to the cards
    useEffect(() => {
        setLoading(true)
        fetch('/Jsons/foodCatigories.json') // Use public folder
            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
                return response.json();
            })
            .then(data => {
                setFetchedFood(data); // Save data to state if needed
            })
            .catch(err => console.error('Error fetching data:', err));
        setLoading(false)
    }, []);

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
        {/* add loading skeleton here */}
        {loading ? (
            <Flex gap='20px'>
                <Skeleton height="350px" width="300px" borderRadius="8px"/>
                <Skeleton height="350px" width="300px" borderRadius="8px"/>
                <Skeleton height="350px" width="300px" borderRadius="8px"/>
                <Skeleton height="350px" width="300px" borderRadius="8px"/>
                <Skeleton height="350px" width="300px" borderRadius="8px"/>
            </Flex>
        ):
            fetchedFood && Object.entries(fetchedFood).map(([fetchedFood,value]) =>{
            return(
                <Box
                    key={fetchedFood}
                    minWidth="300px"
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    borderRadius="8px"
                    scrollSnapAlign="start"
                    backgroundSize='cover'
                    backgroundRepeat='no-repeat'
                    backgroundImage={value.FoodImg}
                    cursor='pointer'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        w='100%'
                        h={{base: '150px', sm: '200px', md: '350px'}}
                        bgColor='blackAlpha.400'
                        borderRadius='8px'
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
                            {value.FoodName}
                        </Text>
                    </Box>
                </Box>
            )
        })}
    </Flex>
    );
};

export default Carousel;
