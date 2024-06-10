import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Button = (props: { text: string }) => {
  return (
    <Box>
      <Text
        fontSize={20}
        border={"2px solid #FD6001"}
        width={"100%"}
        textAlign={"center"}
        px={"50px"}
        borderRadius={10}
        py={3}
        color={"#FD6001"}
        cursor={"pointer"}
        as={motion.p}
        whileHover={{
          background: "#FD6001",
          color: "#fff",
        }}
      >
        {props.text}
      </Text>
    </Box>
  );
};

export default Button;
