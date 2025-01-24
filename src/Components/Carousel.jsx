import { Box, Flex, Skeleton, Text, useMediaQuery } from '@chakra-ui/react';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContex';

const Carousel = () => {
    const [isSmallScreen2] = useMediaQuery("(max-width: 480px)");
    const [fetchedFood,setFetchedFood] = useState()
    const [loading, setLoading] = useState(true)
    const {setFoodType} = useContext(AppContext)

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
                setTimeout(() => {
                    setLoading(false)
                }, 200);
            })
            .catch(err => console.error('Error fetching data:', err));
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
        {loading ? (
            <Flex gap='20px'>
                <Skeleton
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    width="300px"
                    borderRadius="8px"
                />
                <Skeleton
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    width="300px"
                    borderRadius="8px"
                />
                <Skeleton
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    width="300px"
                    borderRadius="8px"
                />
                <Skeleton
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    width="300px"
                    borderRadius="8px"
                />
                <Skeleton
                    height = {{base: '150px', sm: '200px', md: '350px'}}
                    width="300px"
                    borderRadius="8px"
                />
            </Flex>
        ):
            fetchedFood && Object.entries(fetchedFood).map(([fetchedFood,value]) =>{
            return(
                <Box
                    onClick={()=> setFoodType(value.FoodName)}
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
