import { Center, Spinner } from "@chakra-ui/react";

const Loader = ({ ...props }) => {
  return (
    <Center {...props}>
      <Spinner size="lg" />
    </Center>
  );
};

export default Loader;
