import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const NotFound = ({user }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            height='100vh'
            justifyContent='center'
        >
            <img 
                src={`${process.env.REACT_APP_URL}/media/internal/loading.svg`} 
                alt='loading' 
            />
            <Text
                textAlign='center'
                fontSize='20px'
            >
                We could not find the user  
                <Text
                    fontWeight='600'
                >{user}</Text>
            </Text>
        </Box>
    )
}

export default NotFound