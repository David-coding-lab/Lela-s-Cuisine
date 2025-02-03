import { Box, VStack, IconButton, Text, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


function UserPage({isOpen, onClose }) {
    return (
        <Flex
            position="fixed"
            top="0"
            right="-570px"
            w="250px"
            h="100vh"
            bg="#4A3F3F"
            color="white"
            p="20px"
            transform={isOpen ? "translateX(-570px)" : "translateX(-200px)"}
            transition="transform 0.3s ease-in-out"
            zIndex="1000"
            paddingTop='50px'
            flexDir='column'
            gap='30px'
            // align='center'
        >
        {/* Close button */}
        <IconButton
            icon={<CloseIcon />}
            aria-label="Close menu"
            variant="ghost"
            color="white"
            onClick={onClose}
            mb="20px"
            position='absolute'
            top='0'
            right='0'
            _hover={{bgColor: 'transparent'}}
        />

        {/* Menu items */}
            <Text cursor="pointer">Account Setting</Text>
            <Text cursor="pointer">Reservation</Text>
            <Text cursor="pointer">Cart</Text>
            <Text cursor="pointer">Favorites</Text>
            <Text cursor="pointer">Log Out</Text>
        </Flex>
    )
}

export default UserPage
