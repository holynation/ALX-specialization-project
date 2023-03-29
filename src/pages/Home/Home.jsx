import { Box } from "@chakra-ui/react";
import "./Home.css";
import { Dropzone, Footer, Navbar } from "../../components";

const Home = ({ setUploadPayload }) => {
  return (
    <Box>
      <Navbar />
      <div className="boxes">
        <Dropzone className="box" setUploadPayload={setUploadPayload} />
        <div className="box text__box">
          <h1>Simple, private file sharing</h1>
          <p>
            PrivShare, enables you to exchange files using end-to-end encryption
            and a link that expires automatically. So that you can ensure that
            what you post is private and that it isn't permanently online.
          </p>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default Home;
