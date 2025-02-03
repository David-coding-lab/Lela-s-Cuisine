import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, SimpleGrid, Text, useToast,} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AppContext } from "../AppContex";
import LoadingSkeleton from "../Components/LoadingSkeleton";
import Ads from "../Components/Ads";

function Menu() {
  const [loading, setLoading] = useState(true);
  const { foods, setFoods, storedFood, setStoredFood, foodType } = useContext(AppContext);
  const [filteredFoods, setFilteredFoods] = useState([]); // State for filtered foods
  const {setCartItemsNum,setCartItems} = useContext(AppContext)
  const [likedStates, setLikedStates] = useState({}); // State to track liked status for each food
  const toast = useToast()

  // Fetch food data and handle filtering
  useEffect(() => {
    async function fetchFoods() {
      try {
        setLoading(true);

        if (!storedFood) {
          const response = await fetch("/Jsons/foods.json");
          if (!response.ok) throw new Error("Failed to fetch food list");
          const data = await response.json();
          setFoods(data);
          setStoredFood(data);
          sessionStorage.setItem("foods", JSON.stringify(data));
        }

        const allFoods = storedFood || foods;
        const filtered = foodType
          ? Object.values(allFoods).filter((item) => item.typeOfFood === foodType)
          : allFoods;

        setFilteredFoods(filtered);

        // Initialize likedStates dynamically
        const initialLikedStates = {};
        filtered.forEach((food) => {
          initialLikedStates[food.id || food.name] = false; // Use `id` or `name` as unique key
        });
        setLikedStates(initialLikedStates);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setTimeout(() => setLoading(false), 200);
      }
    }

    fetchFoods();
  }, [foodType, storedFood]);

  // Toggle like state for a specific food item
  const toggleLike = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

   // Things Left to be done
  // add the cart state and functionality when you click on a food



  return (
    <Flex
      flexDir='column'
      gap='20px'
      pt='20px'
    >
      <Ads />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        gridGap='50px'
        paddingInline='10px'
      >
      {loading ? (
        <Flex w='99vw' gap="10px" flexWrap="wrap" justify="space-evenly" align="center">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </Flex>
      ) : (
        filteredFoods.map((food) => (
          <Flex
            w='inherit'
            h={{ base: "250px", sm: "250px", md: "275px", lg: "300px" }}
            bg="white"
            justifyContent="space-between"
            flexDir="column"
            key={food.id || food.name} // Use a unique key
          >
            <Box position="relative" height="100%" bgPosition="center" bgSize="cover" bgImage={food.image}>
              <IconButton
                aria-label="Like"
                icon={likedStates[food.id || food.name] ? <FaHeart /> : <FaRegHeart />}
                color={likedStates[food.id || food.name] ? "#FD0000" : "red.500"}
                fontSize="24px"
                variant="ghost"
                onClick={() => toggleLike(food.id || food.name)}
                _hover={{
                  color: "#FD0000",
                  bg: "transparent",
                }}
                _focus={{ boxShadow: "none" }}
              />
            </Box>
            <Flex justify="space-between" p="3" fontFamily="Mada">
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }}>{food.name}</Text>
                <Flex alignItems="center" mt="1">
                  <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" color="blackAlpha.800">
                    {food.price}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} textDecoration="line-through" color="gray.500" ml="2">
                    {food.price / 0.2}
                  </Text>
                </Flex>
              </Box>
              <Flex
                cursor="pointer"
                w="50px"
                justify="center"
                align="center"
                h="50px"
                bgColor="#5E4949"
                borderRadius="10px"
                onClick={()=> {
                  setCartItemsNum(prevNum =>{
                  return prevNum + 1
                })
                toast({
                  title: 'Items Added.',
                  description: `${food.name} has been added to cart`,
                  status: 'success',
                  duration: 1000,
                })
                setCartItems(prevItems =>{
                  return [...prevItems, food.name]
                })
              }
              }
              >
                <AddIcon color="white" />
              </Flex>
            </Flex>
          </Flex>
        ))
      )}
    </SimpleGrid>

    </Flex>
  );
}

export default Menu;
