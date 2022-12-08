import React, { useContext } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { ServerContext } from '../management/ServerProvider';

const HeaderCard = ({ video, img }) => {
    const { handleLenguage, selectLenguage } = useContext(ServerContext); 

    return (
        <Box
            height={['250px', '250px', '250px', '250px', '300px', '450px']}
            position='relative'
        >
            <Box
                height='60%'
                position='relative'
                borderRadius={['0px', '15px' ,'15px']}
            >
                <video
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 'inherit'
                    }}
                    src={video} 
                    autoPlay
                    loop
                    muted
                >
                    Tu navegador no admite el elemento <code>video</code>.
                </video>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                    style={{
                        width: '100%',
                        bottom: '-5px',
                        height: '25px',
                        position: 'absolute',
                        fill: '#fff',
                    }}
                >         
                    <g 
                        transform="" 
                        xmlns="http://www.w3.org/2000/svg"
                    > 
                        <path 
                            style={{ opacity: '0.2' }} 
                            d="M101.9,1.4C88.7,24.2,82.2,23.6,74,13.7c-8.2-9.9-12.7,3.2-21.5,31.3c-8.8,28.1-22,2.5-31.5,10   C11.6,62.5,6.3,88.2-0.4,93.5L0.4,138l102.5-80.5L101.9,1.4z"
                        >
                        </path> 
                        <path 
                            style={{ opacity: '0.2' }}
                            d="M102.2,24.2c-13.4,18.1-19.9,15.2-28,2.5c-8.1-12.7-12.7-1.3-21.7,23.8c-9,25-22-5.2-31.5-1.1   c-9.5,4.1-15,28-21.7,30.9l0.5,44.8l103-44.5L102.2,24.2z"
                        >
                        </path> 
                        <path 
                            d="M102.2,45.4c-13.6,12.3-20,6.6-27.9-9.6c-7.9-16.2-12.7-6.8-21.9,14.3c-9.2,21.1-21.9-14.7-31.4-14.7S5.7,57-1.1,57v44.9   h103.2L102.2,45.4z"
                        >
                        </path> 
                    </g> 
                </svg>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                w='100%'
                height={['70px', '50px', '60px','70px','80px', '100px']}
                position='relative'
            >
                <Image
                    w={['140px', '160px', '180px',  '190px', '160px', '200px']}
                    position='absolute'
                    h={['140px', '160px', '180px',  '190px', '160px', '200px']}
                    objectFit='cover' 
                    src={`${process.env.REACT_APP_URL}/media/${img}`}
                    bottom='10px'
                    borderRadius='50%'
                    border='5px solid #fff'
                />
            </Box>
            <Box
                position='absolute'
                top='15px'
                left='15px'
                background='#fff'
                padding='10px'
                borderRadius='5px'
                fontWeight='600'
                cursor='pointer'
                userSelect='none'
                onClick={() => handleLenguage(selectLenguage === 'spanish' ? 'EN' : 'ES')}
            >
                <Text>{selectLenguage === 'spanish' ? 'EN' : 'ES'}</Text>
            </Box>
        </Box>
    )
}

export default HeaderCard