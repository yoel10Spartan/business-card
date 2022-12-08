import React from 'react';
import { Center, Text } from '@chakra-ui/react';

const BodyCard = ({ name, title, phrase }) => {
    return (
        <Center
            flexDirection='column'
            height='27%'
            // marginTop='-60px'
        >
            <Text
                as='h1'
                fontWeight={700}
                fontSize={['2xl','3xl','3xl', '3xl', '3xl','5xl',]}
                textAlign='center'
            >
                { name.toUpperCase() }
            </Text>
            <Text
                fontWeight={300}
                fontSize={['1xl','1xl','1xl','1xl','1xl','2xl']}
                textAlign='center'
                color='#979A9A'
            >
                { title }
            </Text>
            <Text
                fontSize={['1xl','1xl','1xl','1xl','1xl', '2xl']}
                textAlign='center'
                marginTop='20px'
                w={['75%','70%','65%','60%']}
                height='180px'
                overflowY='scroll'
                className='phrase'
            >
                { phrase }
            </Text>
        </Center>
    )
}

export default BodyCard