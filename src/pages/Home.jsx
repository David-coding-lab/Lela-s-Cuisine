import { Box, Flex} from "@chakra-ui/react";
import Carousel from "../Components/Carousel";
import Menu from "./Menu";

function Home() {
    return(
        <Flex flexDir='column' gap='20px'>
            <Carousel />
            <Menu />
        </Flex>
    )
}

export default Home