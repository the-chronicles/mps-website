import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../components/button";

const Onlinegiving = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} my={150}>
        <Box textAlign={"center"} px={{ lg: 450, md: 400, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            ONLINE GIVING
          </Heading>
          <Text
            mt={5}
            fontSize={{ lg: 50, md: 50, sm: 25, base: 25 }}
            fontWeight={600}
          >
            God will build your kigdom on earth if you build his kingdom on
            earth
          </Text>
          <Center mt={5}>
            <Button text="Give" />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Onlinegiving;
