import { Container, Box } from "@mui/material";
import Data from "./Data";
import Form from "./Form";

function Home() {

  return (
    <Container>
      <Box mt={4}>
        <Form />
        <Box mt={2} />
        <Data />
      </Box>
    </Container>
  );
}

export default Home;
