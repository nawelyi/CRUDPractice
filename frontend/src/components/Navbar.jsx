import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";   
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return <Container maxW={"1140px"} px={4}>
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sd: "row" }}
        >

        <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        >
       <Link to={"/"}>Product Store </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"} >
            <Link to={"/create"}>
                <Button>
                    <CiSquarePlus />

                </Button>
            </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>

        </HStack>

        </Flex>
    </Container>
}

export default Navbar