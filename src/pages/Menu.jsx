import { AddIcon, SmallAddIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, HStack, IconButton, Image, Skeleton, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { AppContext } from "../AppContex";
import LoadingSkeleton from "../Components/LoadingSkeleton";

function Menu() {
  const [liked, setLiked] = useState(false); // State to track whether the button is liked
  const [loading, setLoading] = useState(true)
  const {foods,setFoods,storedFood,setStoredFood,foodType} = useContext(AppContext)
  const [filteredFoods, setFilteredFoods] = useState([]); // State for filtered foods
  // fetching food structure
  // if there is any foodType state then it should run a function that shuffles the items to match the foodType
  // store the food Fetched in the session storage

  // Function that fetches the food

  function FetchFood(){

    // Fetching Foods...

    useEffect(() => {
      async function fetchFoods() {
        try {
          // Check if `storedFood` exists in sessionStorage
          if (!storedFood) {
            setLoading(true); // Start loading
            const response = await fetch('/Jsons/foods.json'); // Fetch the food data
            if (!response.ok) {
              throw new Error('Failed to fetch food list');
            }
            const data = await response.json();
            setFoods(data); // Save the fetched data
            setStoredFood(data); // Save it to context
            sessionStorage.setItem('foods', JSON.stringify(data)); // Save to sessionStorage
          } else {
            // If `storedFood` exists, use it
            setFoods(storedFood);
            setLoading(true);
          }

          // If `foodType` is defined, filter foods based on the type
          if (foodType) {
            const filtered = Object.values(storedFood || foods).filter(
              (item) => item.typeOfFood === foodType
            );
            setFilteredFoods(filtered); // Save filtered foods
          } else {
            // If no foodType, set filteredFoods to all foods
            setFilteredFoods(storedFood || foods);
          }
        } catch (error) {
          console.error('Error fetching food data:', error);
        } finally {
            setTimeout(() => {
              setLoading(false)
            }, 200);; // End loading
        }
      }

      fetchFoods(); // Execute the fetch function
    }, [foodType, storedFood]); // Re-run when `foodType` or `storedFood` changes

    // Debug: log the state
    useEffect(() => {
      console.log('Foods:', foods);
      console.log('Filtered Foods:', filteredFoods);
    }, [foods, filteredFoods]);

  }

  FetchFood()


  return (
    <Flex gap="20px" flexWrap="wrap">
      {loading ? (
        <Flex gap="20px" flexWrap="wrap">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </Flex>
      ) : filteredFoods && (
        filteredFoods.map((food, index) => (
            <Flex
              w={{ base: "350px", sm: "250px", md: "300px", lg: "350px" }}
              h={{ base: "250px", sm: "250px", md: "275px", lg: "300px" }}
              bg="white"
              justifyContent="space-between"
              flexDir="column"
              key={index}
            >
              {/* Image Section */}
              <Box position="relative" height="100%" bgPosition='center' bgSize='cover' bgImage={food.image}>
                {/* Like Icon */}
                <IconButton
                  aria-label="Like"
                  icon={liked ? <FaHeart /> : <FaRegHeart />} // Toggle icon based on state
                  color={liked ? "#FD0000" : "red.500"} // Change color based on state
                  fontSize="24px" // Adjust the icon size
                  variant="ghost" // Remove background for a cleaner look
                  onClick={() => setLiked(!liked)} // Toggle state when clicked
                  _hover={{
                    color: "#FD0000", // Hover effect
                    bg: "transparent", // Ensure no background on hover
                  }}
                  _focus={{ boxShadow: "none" }} // Remove focus outline for a cleaner design
                />
              </Box>

              {/* Content Section */}
              <Flex justify="space-between" p="3" fontFamily="Mada">
                <Box>
                  {/* Food Name */}
                  <Text fontSize={{ base: "sm", md: "md" }}>{food.name}</Text>

                  {/* Price Section */}
                  <Flex alignItems="center" mt="1">
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="bold"
                      color="blackAlpha.800"
                    >
                      {food.price}
                    </Text>
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      textDecoration="line-through"
                      color="gray.500"
                      ml="2"
                    >
                      {food.price / 0.2}
                    </Text>
                  </Flex>
                </Box>

                {/* Add Button */}
                <Flex
                  cursor="pointer"
                  w="50px"
                  justify="center"
                  align="center"
                  h="50px"
                  bgColor="#5E4949"
                  borderRadius="10px"
                >
                  <AddIcon color="white" />
                </Flex>
              </Flex>
            </Flex>
          ))
        )}
    </Flex>

  )
}

export default Menu


