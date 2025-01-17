import { Box, Text } from "@chakra-ui/react";

const GivingHero = () => {
  return (
    <Box pt={230} className="justify-center text-center">
      <Text
        fontSize={{ lg: 60, md: 60, sm: 30, base: 30 }}
        fontWeight={"700"}
        color={"#FD6001"}
        justifyContent={"center"}
      >
        ONLINE GIVING!
      </Text>
      <Text
        fontSize={{ lg: 40, md: 30, sm: 20, base: 20 }}
        fontWeight={"700"}
        color={"#fff"}
        textTransform={"capitalize"}
      >
        Sow a seed into God’s kingdom.
      </Text>
    </Box>
  );
};

export default GivingHero;
