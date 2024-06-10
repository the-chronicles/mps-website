import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowCircleDown } from "iconsax-react";

const Hero = () => {
  return (
    <Box pt={150}>
      <Heading
        cursor={"pointer"}
        fontWeight={800}
        color={"#fff"}
        as={motion.h1}
        width={"fit-content"}
        whileHover={{
          textShadow: "0px 0px 10px #fff",
        }}
        fontSize={{ lg: 100, md: 90, sm: 60, base: 40 }}
      >
        UNLEASHING <br /> POTENTIALS
      </Heading>
      <Box
        width={{ lg: 800, md: 800, sm: "100%", base: "100%" }}
        bg={"#fff"}
        p={10}
        borderRadius={20}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          deleniti earum sunt perspiciatis, architecto adipisci dolore illo iure
          odio, neque nam suscipit nobis ducimus voluptate excepturi nisi
          facilis aperiam praesentium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </Text>
        <Button
          mt={5}
          px={10}
          py={7}
          fontWeight={400}
          fontSize={20}
          bg={"#FD6001"}
          _hover={{ bg: "#FD6001" }}
          rightIcon={<ArrowCircleDown variant="Bold" />}
        >
          See more
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
