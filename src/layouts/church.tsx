import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Church = () => {
  const [activeTab, setActiveTab] = useState("church-offering");

  return (
    <Box pb={100}>
      <Flex justifyContent={"center"} m={10}>
        <Heading fontSize={50} color={"#FD6001"}>
          Join Us Church
        </Heading>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={{ lg: 8, md: 8, sm: 4 }}
      >
        <button
          className={`w-96 rounded-md bg-[#fcf3f3] px-4 py-2 text-black ${
            activeTab === "church-offering"
              ? "border-b-2 border-[#fd6001]"
              : "border-[#fd6001] hover:border-b-2"
          }`}
          onClick={() => setActiveTab("church-offering")}
        >
          Church Offering
        </button>
        <button
          className={`w-96 rounded-md bg-[#fcf3f3] px-4 py-2 text-black ${
            activeTab === "church-project"
              ? "border-b-2 border-[#fd6001]"
              : "border-[#fd6001] hover:border-b-2"
          }`}
          onClick={() => setActiveTab("church-tithe")}
        >
          Church Project
        </button>
      </Flex>
      <Flex justifyContent={"center"} m={5}>
        {activeTab === "church-offering" && (
          <Box>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              Bank: UBA
            </Text>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              account Name: RCCG Messiah Praise Sanctuary
            </Text>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              account Number: 1020738092
            </Text>
          </Box>
        )}
      </Flex>
      <Flex justifyContent={"center"} m={5}>
        {activeTab === "church-project" && (
          <Box>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              Bank: Ecobank
            </Text>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              account Name: RCCG Messiah Praise Sanctuary
            </Text>
            <Text
              textTransform={"capitalize"}
              fontSize={{ lg: 48, md: 48, sm: 25, base: 20 }}
            >
              account Number: 3852018624
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Church;
