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
            We believe, according to God’s word, that when we give, we invite God’s good measure: pressed down, shaken together, and overflowing with blessings. <br />
          <Text
            mt={5}
            fontSize={{ lg: 20, md: 20, sm: 10, base: 10 }}
            fontWeight={300}
          >
            <br/>
            “Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap…”
New International Version
            </Text>
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
