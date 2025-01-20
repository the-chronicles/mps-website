import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import MediaCards from "../components/mediaCards";

const Mediaarchive = () => {
  return (
    <Box my={150}>
      <Flex justifyContent={"center"}>
        <Box textAlign={"center"} px={{ lg: 40, md: 40, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            MEDIA ARCHIVEs
          </Heading>
          <Text
            mt={5}
            fontSize={{ lg: 50, md: 40, sm: 20, base: 20 }}
            fontWeight={600}
          >
            Catch Up with the best programs
          </Text>
        </Box>
      </Flex>

      <Flex gap={10} justifyContent={"center"} flexWrap={"wrap"} my={10} textAlign={'center'}>
        <MediaCards
          src="https://www.youtube.com/embed/JyU0n748MdM?si=AqD4EVKn7Zm3XRAw"
          title="TOTAL RECOVERY"
          minister="PST OMODELE OLUDARE"
          service="THANKSGIVING SERVICE"
        />
        <MediaCards
          src="https://www.youtube.com/embed/ge4kWDQDMPs?si=q3go86U0R7QhJLal"
          title="TOTAL RECOVERY"
          minister="PST OMODELE OLUDARE"
          service="THANKSGIVING SERVICE"
        />
        <MediaCards
          src="https://www.youtube.com/embed/8JUiiYK-dyA?si=X5occ-5mUtTCSdk7"
          title="TOTAL RECOVERY"
          minister="PST OMODELE OLUDARE"
          service="THANKSGIVING SERVICE"
        />
        <MediaCards
          src="https://www.youtube.com/embed/8Ai2NsCHFEQ?si=GYh3OrGtC7qA-uag"
          title="TOTAL RECOVERY"
          minister="PST OMODELE OLUDARE"
          service="THANKSGIVING SERVICE"
        />
      </Flex>
    </Box>
  );
};

export default Mediaarchive;
