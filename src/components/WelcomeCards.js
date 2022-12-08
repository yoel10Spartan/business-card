import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const WelcomeCards = () => {
    return (
        <Box>
            <Box
                position='absolute'
                width='100vw'
                height='100vh'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Img 
                    src='https://ga.com.mx/wp-content/uploads/2017/04/logo-login.png' 
                    alt='GA'
                    width='100px'
                    height='100px'
                />
                <Text
                    fontSize='20px'
                    fontWeight='500'
                    padding='10px'
                >
                    Bienvenido a GA Cards
                </Text>
            </Box>
            <div class="area">
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div>
        </Box>
    )
}

export default WelcomeCards