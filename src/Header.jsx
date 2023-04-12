import { Flex, Heading, Button, Box, ButtonGroup } from "@chakra-ui/react";
import MyImage from './assets/BackGround.jpg'

const Header = () =>{
    return (
    <Flex height="100vh" alignItems = "stretch" aling="center" justifyContent="center">
        <Box display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column' 
          width='100%'
          py={12}
          bgImage={`url(${MyImage})`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          mb={2}
          >
            <Heading color={"white"}>DOMINA EL TERRENO</Heading>
            <ButtonGroup gap='4'>
                <Button colorScheme='whiteAlpha' variant='outline'>VER DETALLES</Button>
                <Button colorScheme='whiteAlpha' variant='outline'>VER VIDEO</Button>
            </ButtonGroup>
        </Box>
    </Flex>
    )   
}

export default Header