import { Button } from "@chakra-ui/button";
import React from "react";

const Selection = () => {
    return (
        <Button
            pos="absolute"
            rounded="full"
            p="0"
            ml="2"
            mt="2"
            colorScheme="blue"
            bg="blue.500"
            size="sm"
            fontSize="md"
            opacity="40%"
            _hover={{ opacity: "100%" }}
        ></Button>
    );
};

export default Selection;