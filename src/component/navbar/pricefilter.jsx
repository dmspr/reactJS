import { Heading, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"


const PriceFilter = () => {
    return (

        <HStack>
            <NumberInput>
                <NumberInputField>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInputField>
            </NumberInput>
            <Heading fontSize="lg"></Heading>
            <NumberInput>
                <NumberInputField>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInputField>
            </NumberInput>
        </HStack>
    )
}

export default PriceFilter