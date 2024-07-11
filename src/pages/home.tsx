import { Box } from "@chakra-ui/react";
import Header from "../layouts/common/header";
import Hero from "../layouts/hero";
import Whoweare from "../layouts/whoweare";
import Onlinegiving from "../layouts/onlinegiving";
import Mediaarchive from "../layouts/mediaarchive";
import Contact from "../layouts/contact";
import Footer from "../layouts/common/footer";

const Home = () => {
  return (
    <Box>
      <Box
        bgImage={"/hero.png"}
        width={"100%"}
        height={"100vh"}
        bgSize={"cover"}
        bgPos={"center center"}
      >
        <Header />
        <Box p={{ lg: 100, md: 100, sm: 50, base: 50 }}>
          <Hero />
        </Box>
      </Box>
      <Whoweare />
      <Onlinegiving />
      <Mediaarchive />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
