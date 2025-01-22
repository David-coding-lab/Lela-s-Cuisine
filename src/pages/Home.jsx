import { Box} from "@chakra-ui/react";
import Carousel from "../Components/Carousel";
import { useEffect } from "react";

function Home() {
    useEffect(()=>{
    },[])
    return(
        <Box>
            <Carousel />
        </Box>
    )
}

export default Home