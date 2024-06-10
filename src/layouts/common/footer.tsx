import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={"#FFF7F1"} px={{ lg: 200, md: 150, sm: 100 }} py={100}>
      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 40, md: 40, sm: 20, base: 20 }}
        alignItems={"flex-end"}
      >
        <Image src="/logo.png" objectFit={"contain"} width={300} />
        <Box width={"400px"}>
          <Heading fontSize={"30px"}>Location</Heading>
          <Text textTransform={"capitalize"}>
            RCCG MPS REDEMPTON CITY, KM 46, Lagos -ibadan Expressway, mowe, ogun
            state, nigeria
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={500}>
            Follow Us On
          </Text>
          <Flex gap={5} mt={3}>
            <Image width={"40px"} src="/facebook.svg" />
            <Image width={"40px"} src="/youtube.svg" />
            <Image width={"40px"} src="/instagram.svg" />
          </Flex>
        </Box>
        <Center>
          <Link href="#">
            <Image src="arrowup.svg" />
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default Footer;
