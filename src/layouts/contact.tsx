import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import InputBox from "../components/inputBox";
import Button from "../components/button";

const Contact = () => {
  return (
    <Box pb={100}>
      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 40, md: 40, sm: 10, base: 10 }}
        justifyContent={"center"}
      >
        <Box width={500} p={{ lg: 0, md: 0, sm: 10, base: 10 }}>
          <Heading fontSize={50} color={"#FD6001"}>
            CONTACT US
          </Heading>
          <Box mx={5}>
            <Text>WE'D LOVE TO HEAR FROM YOU.</Text>
            <Box marginTop={14}>
              <InputBox
                box={false}
                label="Enter your full name"
                placeholder="Your Full Name"
                type="text"
              />
              <InputBox
                box={false}
                label="Enter your Email"
                placeholder="you@gmail.com"
                type="email"
              />
              <InputBox
                box={true}
                label="Message"
                placeholder="Type your message here"
                type="text"
              />
              <Button text="Send Message" />
            </Box>
          </Box>
        </Box>
        <AspectRatio
          p={{ lg: 0, md: 0, sm: 10, base: 10 }}
          borderRadius={20}
          width={600}
          ratio={1}

        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.636661294503!2d3.4664256793456913!3d6.8139715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bc12fc61c5377%3A0xa277e069cb7e9ffc!2sThe%20Redeemed%20Christian%20Church%20Of%20God%2C%20Messiah%20Praise%20Sanctuary%2C%20Youth%20Church%2C%20Youth%20Province%203!5e0!3m2!1sen!2sng!4v1717527797191!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{
              borderRadius: 40,
              padding: 10,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      </Flex>
    </Box>
  );
};

export default Contact;
