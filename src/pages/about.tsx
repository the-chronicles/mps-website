import Header from "../layouts/common/header";
import Mandate from "../layouts/mandate";
import Pastors from "../layouts/pastors";
import Weekly from "../layouts/weekly";
import Whoweare from "../layouts/whoweare";
import { Box } from "@chakra-ui/react";

function About() {
  return (
    <Box>
      <Header />
      <Box p={{ lg: 100, md: 100, sm: 50, base: 50 }}>
        <Whoweare />
      </Box>
        <Mandate />
        <Weekly />
        <Pastors />
    </Box>
  );
}

export default About;
