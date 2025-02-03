import { Skeleton } from "@chakra-ui/react"

function LoadingSkeleton() {
    return (
        <Skeleton
            h={{ base: '250px', sm: '250px', md: '275px', lg: '275px' }}
            w={{ base: '350px', sm: '250px', md: '350px', lg: '350px' }}
            borderRadius="8px"
        />
    )
}

export default LoadingSkeleton