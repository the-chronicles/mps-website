import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLink = (props: { text: string; link: string }) => {
  return (
    <Box>
      <Text
        px={5}
        py={2}
        as={motion.p}
        whileHover={{
          background: "#FD6001",
          borderRadius: 20,
        }}
      >
        <Link to={props.link}>{props.text}</Link>
      </Text>
    </Box>
  );
};

export default NavLink;
