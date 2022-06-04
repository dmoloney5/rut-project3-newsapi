// import './App.css';
// import News from "./components/News";

import { Flex, Heading, VStack } from "@chakra-ui/react";

// const App = () => <News />;


function App(){
    return(
    <VStack>
        <Flex w="100%">
         <Heading
         ml="8" size="md" fontWeight='semibold' color="cyan.400">test</Heading>   
        </Flex>
    </VStack>

    );
}

export default App;
