import {
  Box, Button, Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";
import useCopy from "use-copy";

const Files = ({
  linkPath = "https://priv-share.app/Z74dm#tAoMdjMLSyQ_Umzfa4bjbg",
}) => {
  const [copied, copy, setCopied] = useCopy(linkPath);

  const copyText = () => {
    copy();

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <BackgroundLayout>
      <Center>
        <Card minH="20rem" backgroundColor="rgba(9, 4, 22, 0.75)">
          <CardHeader>
            <Heading color="white" textAlign="center">
              Your file is ready to share!
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">Copy the link to share your file</Text>
            <HStack mt="10">
              <Box
                borderStyle="dotted"
                borderWidth="1px"
                borderColor="white"
                borderRadius="5"
                p="2"
              >
                <Text color="white">{linkPath}</Text>
              </Box>
              { copied ? <Text color='white'>Copied to clipboard</Text> : <Button onClick={copyText}>Copy link</Button> }
            </HStack>
          </CardBody>
          <CardFooter p="5" justify="center" align="center">
            <Text color="white" fontWeight="bold">
              Your file will be deleted in 24 hours
            </Text>
          </CardFooter>
        </Card>
      </Center>
    </BackgroundLayout>
  );
};

export default Files;
