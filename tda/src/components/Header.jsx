
import React from 'react';
import { Box, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
       <Box display='flex' p={6}>
           <IconButton 
           icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
           isRound={true}
           mr={5}
           onClick={toggleColorMode}
           />
          <Heading 
                /* bgGradient="linear(to-l, #7928CA, #FF0080)" */
                /* bgClip='text' */
            >Todo App</Heading>
       </Box>
    )
}

export default Header;
