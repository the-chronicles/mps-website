import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Weekly = () => {
  return (
    <Box pb={100}>
      <Flex justifyContent={"center"} m={10}>
        <Heading fontSize={50} color={"#FD6001"}>
          Join Us Weekly
        </Heading>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 40, md: 40, sm: 10, base: 10 }}
        justifyContent={"center"}
      >
        <Box width={500} p={{ lg: 0, md: 0, sm: 10, base: 10 }}>
          <Box>
            <Heading fontSize={30} color={"#FD6001"}>
              Sunday Service
            </Heading>
            <Text textTransform={"capitalize"}>
              Worship with us every Sunday from 8 AM to 11:30 AM as we experience the supernatural together.
            </Text>
          </Box>
        </Box>
        <Box width={500} p={{ lg: 0, md: 0, sm: 10, base: 10 }}>
          <Box>
            <Heading fontSize={30} color={"#FD6001"}>
              Bible Study
            </Heading>
            <Text textTransform={"capitalize"}>
              Join us every Wednesday from 6 PM to 8 PM for an interactive study of the Word. 
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Weekly;
