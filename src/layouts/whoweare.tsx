import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Whoweare = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} my={150}>
        <Box textAlign={"center"} px={{ lg: 450, md: 400, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            Who are we
          </Heading>
          <Text
            mt={5}
            fontSize={{ lg: 50, md: 50, sm: 25, base: 25 }}
            fontWeight={600}
          >
            Energetic & Vibrant youths Beautiful souls Unleashing our potentials
            in Christ Jesus
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Whoweare;
