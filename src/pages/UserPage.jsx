import { Box, VStack, IconButton, Text, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


function UserPage({isOpen,setIsOpen}) {
    return (
        <Flex
            position="fixed"
            top="150px"
            right="-560px"
            w="130px"
            h="150px"
            bg="#4A3F3F"
            color="white"
            transform={isOpen ? "translateX(-570px)" : "translateX(-200px)"}
            transition="transform 0.3s ease-in-out"
            zIndex="1000"
            justify='center'
            flexDir='column'
            gap='30px'
            align='center'
        >
        {/* Menu items */}
            <Link to='/booking' onClick={()=> setIsOpen(false)}>Reservation</Link>
            <Link to='/cart' onClick={()=> setIsOpen(false)}>Cart</Link>
        </Flex>
    )
}

export default UserPage
