import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import HeaderCard from './HeaderCard';
import BodyCard from './BodyCard';
import GridChoices from './GridChoices';
import { ServerContext } from '../management/ServerProvider';

const Card = ({ name, title, phrase, image, choices, location }) => {

    const { selectLenguage: lenguage } = useContext(ServerContext);
    const urlVideo = `${process.env.REACT_APP_URL}/media/internal/video.mp4`

    return (
        <Box
            w={['100vw', '400px', '500px', '600px','600px','800px']}
            borderRadius={['0px', '0px', '0px', '15px' ,'15px']}
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
            background='#fff'
            display='flex'
            flexDirection='column'
            margin={['0', '30px 0', '30px 0']}
            position='relative'
        >
            <HeaderCard {...{video: urlVideo, img: image}} />
            
            <BodyCard  
                name={name}
                title={title[lenguage]}
                phrase={phrase[lenguage]}
            />

            <GridChoices choices={choices} location={location} />
        </Box>
    )
}

export default Card