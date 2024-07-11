import { Box } from "@chakra-ui/react";
import Header from "../layouts/common/header";
import Mediaarchive from "../layouts/mediaarchive";

function MediaArchive() {
  return (
    <Box>
      <Header />
      <Box p={{ lg: 10, md: 10, sm: 5, base: 5 }}>
        <Mediaarchive />
      </Box>
    </Box>
  );
}

export default MediaArchive;
