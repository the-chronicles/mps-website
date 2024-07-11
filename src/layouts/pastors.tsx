import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MediaCards from "../components/mediaCards";

const Pastors = () => {
  return (
    <Box my={150}>
      <Flex justifyContent={"center"}>
        <Box textAlign={"center"} px={{ lg: 40, md: 40, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            Our Pastors
          </Heading>
        </Box>
      </Flex>

      <Flex
        gap={10}
        justifyContent={"center"}
        flexWrap={"wrap"}
        my={10}
        textAlign={"center"}
      >
        <Stack direction="row">
          <Box display={"contents"} flexDirection={"row"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
        <Stack direction="row">
          <Box display={"contents"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
        <Stack direction="row">
          <Box display={"contents"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
        <Stack direction="row">
          <Box display={"contents"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
        <Stack direction="row">
          <Box display={"contents"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
        <Stack direction="row">
          <Box display={"contents"}>
            <img src="/pastor1.png" />
            <img src="/pastor2.png" />
            <img src="/pastor3.png" />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Pastors;
