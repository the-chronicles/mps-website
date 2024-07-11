import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ipsam amet! Illum dolorem quam optio dolore hic reprehenderit
              magnam voluptates, dicta soluta quasi aspernatur nam, ut vel eum
              laborum esse.
            </Text>
          </Box>
          <Box mt={10} mb={10}>
            <Heading fontSize={30} color={"#FD6001"}>
              Our Mandate
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ipsam amet! Illum dolorem quam optio dolore hic reprehenderit
              magnam voluptates, dicta soluta quasi aspernatur nam, ut vel eum
              laborum esse.
            </Text>
          </Box>
          <Box>
            <Heading fontSize={30} color={"#FD6001"}>
              Our Mandate
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ipsam amet! Illum dolorem quam optio dolore hic reprehenderit
              magnam voluptates, dicta soluta quasi aspernatur nam, ut vel eum
              laborum esse.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mandate;
