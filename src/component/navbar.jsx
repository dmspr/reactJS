import { Box, Container, Flex } from "@chakra-ui/react"
import SendButton from "./navbar/button"
import Category from "./navbar/category"
import PriceFilter from "./navbar/pricefilter"
import Search from "./navbar/search"


const Navbar = () => {

    return (
        <Box w="full" zIndex="9" position="sticky" top="8">
            <Container maxW="container.xl" mx="auto">
                <Box p="4" bg="orange.200" borderRadius="lg" shadow="md">
                    <Flex>
                        <Flex gridGap="5">
                            <Search />
                            <Category />
                            {/* <PriceFilter /> */}
                        </Flex>
                        <Box>
                            <SendButton />
                        </Box>

                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar