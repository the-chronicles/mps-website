import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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
              Church Mission
            </Heading>
            <Text>
              Lies a deep commitment to empowering the next generation of
              believers. Our mandate extends beyond religious instruction; we
              aim to spark a global spiritual revolution.{" "}
            </Text>
            <Text className="mb-4 mt-4">
              We envision a future where young disciples, rooted in faith and
              empowered by the Holy Spirit, drive a worldwide movement of love,
              healing, and hope. They will tackle modern challenges with
              innovative, Christ-centered solutions, transforming lives and
              societies, and advancing God's Kingdom.
            </Text>
            <Text>
              Through unwavering commitment to Jesus' teachings, they will
              demonstrate the relevance and power of faith in action, drawing
              others to Christ's life-changing love.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mandate;
