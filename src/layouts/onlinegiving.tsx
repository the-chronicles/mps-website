import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../components/button";
import { Link } from "react-router-dom";

const Onlinegiving = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} my={150}>
        <Box textAlign={"center"} px={{ lg: 40, md: 40, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            ONLINE GIVING
          </Heading>
          <Text
            mt={5}
            fontSize={{ lg: 50, md: 40, sm: 20, base: 20 }}
            fontWeight={600}
          >
            God will build your kingdom on earth if you build His kingdom on
            earth
          </Text>
          <Center mt={5}>
            <Link to='/giving'>
            <Button text="Give" />
            </Link>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Onlinegiving;
