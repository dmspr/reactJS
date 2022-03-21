import React from "react";
import { Box, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
// import Selection from "./Product/select";

const Product = ({ meta }) => {

    const thousandSeparator = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    return (
        <Flex
            h="full"
            flexDir="column"
            border="1px"
            borderColor="gray.300"
            borderRadius="xl"
        >
            {/* <Selection /> */}
            <Image src={meta.picture} borderColor="white" cursor="pointer" h="250" borderRadius='10' />

            <Flex flexDir="column" align="start" m="4">
                <Box>
                    <Heading fontSize="lg" fontWeight="bold">
                        {meta.name}
                    </Heading>
                    <Heading fontSize="md" fontWeight="semibold" color="gray.600">
                        Price :
                    </Heading>
                </Box>

                <VStack alignItems="start" fontSize="sm" spacing="0" mt="4">
                    <Text fontWeight='bold'>Rp. {thousandSeparator(`${meta.price}`)}</Text>
                    <Text fontWeight='bold'>Stock : {meta.stock}</Text>
                    <Text>Category: {meta.category}</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis quia voluptatibus obcaecati nesciunt dolor velit omnis deserunt </Text>

                </VStack>
            </Flex>
        </Flex>
    );
};
export default Product