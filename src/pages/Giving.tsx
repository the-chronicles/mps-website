import { Box } from "@chakra-ui/react";
import Header from "../layouts/common/header";
import GivingHero from "../layouts/givinhero";
import Footer from "../layouts/common/footer";
import Church from "../layouts/church";

function Giving() {
  return (
    <Box>
      <Box
        bgImage={"/giving.png"}
        width={"100%"}
        height={"80vh"}
        bgSize={"cover"}
        bgPos={"top"}
      >
        <Header />
        <GivingHero />
      </Box>
      <Church />
      <Footer />
    </Box>
  );
}

export default Giving;
