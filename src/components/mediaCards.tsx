import { AspectRatio, Box, Text } from "@chakra-ui/react";

const MediaCards = (props: {
  title: string;
  src: string;
  service: string;
  minister: string;
}) => {
  return (
    <Box>
      <AspectRatio borderRadius={20} width={400} ratio={1}>
        <iframe
          style={{
            borderRadius: 30,
            objectFit: "contain",
          }}
          title={props.title}
          src={props.src}
          allowFullScreen
        />
      </AspectRatio>
      <Text fontWeight={700} fontSize={20}>
        {props.service}
      </Text>
      <Text>{props.minister}</Text>
    </Box>
  );
};

export default MediaCards;
