import { Select } from "@chakra-ui/select";

const Sort = () => {
    return (
        <Select placeholder="Recommended Product" bg="white" w="30%">
            <option value="higher">Order With Higher Prices</option>
            <option value="lower">Order With Lower Prices</option>
        </Select>
    );
};

export default Sort;