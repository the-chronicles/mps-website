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
              Bible Study
            </Heading>
            <Text textTransform={"capitalize"}>
              Enjoy an interactive study of the word every wednesday from
              6pm-8pm
            </Text>
          </Box>
        </Box>
        <Box width={500} p={{ lg: 0, md: 0, sm: 10, base: 10 }}>
          <Box>
            <Heading fontSize={30} color={"#FD6001"}>
              Bible Study
            </Heading>
            <Text textTransform={"capitalize"}>
              Enjoy an interactive study of the word every wednesday from
              6pm-8pm
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Weekly;
