import { Avatar, Button, Flex, Heading, HStack, IconButton, Text, useMediaQuery } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContex';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

function Cart() {
    const { cartItems, storedFood, setIsInCartPage} = useContext(AppContext);
    const [cart, setCart] = useState([]);
    const [isSmallScreen] = useMediaQuery("(max-width: 562px)");

    // Update cart when cartItems change
    useEffect(() => {
        if (!cartItems || !storedFood) return; // Prevents errors when data is missing

        // Count occurrences of each item in cartItems
        const cartMap = {};
        cartItems.forEach((item) => {
            cartMap[item] = (cartMap[item] || 0) + 1;
        });

        // Create a new cart array with quantity info
        const updatedCart = storedFood
            .filter((food) => cartMap[food.name]) // Find matching foods
            .map((food) => ({
                ...food,
                quantity: cartMap[food.name], // Attach quantity
            }));

        setCart(updatedCart);
    }, [cartItems, storedFood]);

    // Increase quantity
    const increaseQuantity = (foodName) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === foodName ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (foodName) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.name === foodName && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove items with zero quantity
        );
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Flex
            w="100%"
            maxW="100em"
            alignSelf="center"
            justify="center"
            align="center"
            paddingTop="20px"
            paddingInline="50px"
            flexDir="column"
            gap="10px"
        >
            {cart.length === 0 ? (
                <Heading fontFamily="Mogra" mt="20%" color="rgba(110, 110, 110, 1)">
                    Your Cart is Empty
                </Heading>
            ) : (
                cart.map((foodItem, index) => (
                    <Flex
                        key={index}
                        p="10px"
                        borderBottom="1px solid gray"
                        w="100%"
                        bgColor="rgba(155, 155, 155, 0.18)"
                        borderRadius="4px"
                        border="none"
                        flexDir={isSmallScreen && 'column'}
                    >
                        <HStack marginRight="auto" width={isSmallScreen ? '100%' : '80%'}>
                            <HStack marginRight="auto">
                                <Avatar size="lg" src={foodItem.image} />
                                <Text
                                    fontSize="lg"
                                    fontFamily="Mogra"
                                    color="#777777"
                                    w={{ base: '60px', sm: '150px', md: '200px' }} // Responsive width
                                    isTruncated
                                    noOfLines={1}
                                >
                                    {foodItem.name}
                                </Text>
                            </HStack>

                            <HStack marginRight="auto" gap={{ base: '10px', sm: '25px', md: '50px' }}>
                                <IconButton
                                    icon={<AddIcon />}
                                    colorScheme="green"
                                    size="sm"
                                    onClick={() => increaseQuantity(foodItem.name)}
                                />
                                <Text fontSize="lg" color="gray.600" fontFamily="Poppins" fontWeight="semibold">
                                    {foodItem.quantity}
                                </Text>
                                <IconButton
                                    icon={<MinusIcon />}
                                    colorScheme="red"
                                    size="sm"
                                    onClick={() => decreaseQuantity(foodItem.name)}
                                    isDisabled={foodItem.quantity <= 1} // Prevent negative quantities
                                />
                            </HStack>
                        </HStack>

                        <Text
                            fontSize="lg"
                            color="#DB0909"
                            fontFamily="Poppins"
                            alignSelf={!isSmallScreen && 'center'}
                            marginRight="50px"
                            marginLeft={isSmallScreen && '60%'}
                            fontWeight='semibold'
                        >
                            {foodItem.price * foodItem.quantity}
                        </Text>
                    </Flex>
                ))
            )}

            {/* Footer */}
            <Flex
                w="full"
                bgColor="#554A4A"
                height="100px"
                position="fixed"
                bottom="0"
                left="0"
                zIndex="100"
                align="center"
                justify="space-between"
                px="20px"
            >
                <Text color="white" fontSize="larger" fontWeight="bold">
                    Total: ₦{totalPrice.toLocaleString()}
                </Text>
                <Button colorScheme="green">Place Order</Button>
            </Flex>
        </Flex>
    );
}

export default Cart;
