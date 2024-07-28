import {Box, Flex, Heading, Text } from "@chakra-ui/react";

const Mandate = () => {
  return (
    <Box pb={100}>
      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 40, md: 40, sm: 10, base: 10 }}
        justifyContent={"center"}
      >
        <img src="/pastor.png" />
        <Box width={500} p={{ lg: 0, md: 0, sm: 10, base: 10 }}>
          <Box>
            <Heading fontSize={30} color={"#FD6001"}>
              Our Mandate
            </Heading>
            <Text>
              Raising a new generation of young believers who are excited about Christ, have a vision for world transformation, and are committed to sharing the gospel with those who have yet to believe.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mandate;
