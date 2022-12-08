import React, { useContext } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import ItemChoice from './ItemChoice'
import EmailChoice from './DefaultChoice/EmailChoice';
import AddressChoice from './DefaultChoice/AddressChoice';
import { ServerContext } from '../management/ServerProvider';

const GridChoices = ({ choices, location }) => {

    const { selectLenguage: lenguage } = useContext(ServerContext);

    const defaultItems = [
        {
            element: EmailChoice,
            url: null,
            title: {
                "english": 'Write us',
                "spanish": 'Escribenos'
            },
            icon: 'bi bi-envelope-open-heart-fill',
            modal: true,
        },
        {
            element: null,
            url: 'https://ga.com.mx/',
            title: {
                "english": 'ga.com.mx',
                "spanish": 'ga.com.mx'
            },
            icon: 'bi bi-grid-1x2-fill',
            modal: false,
        },
        {
            element: null,
            url: 'tel:+52-2461508311',
            title: {
                "english": 'Phone',
                "spanish": 'Teléfono'
            },
            icon: 'bi bi-telephone-fill',
            modal: false,
        },
        {
            element: AddressChoice,
            url: null,
            title: {
                "english": 'Address',
                "spanish": 'Dirección'
            },
            icon: 'bi bi-map-fill',
            modal: true,
            location: location
        }
    ]

    return (
        <Grid
            height='100%'
            templateColumns={ defaultItems.length <= 2 ? '1' : ['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)',] }
            margin='30px'
            className='footer__card'
            overflowY='scroll'
            gap='10px'
            >
            {
                defaultItems.map(({ element, url, title, icon, modal, location }) => (
                    <ItemChoice
                        fontSize={['15px', '15px', '15px', '16px','17px','18px', '20px']}
                        background='#169fe6'
                        color='#fff'
                        element={element}
                        modal={modal}
                        url={url}
                        location={location}
                    >
                        <i class={icon}></i>
                        <Text>{title[lenguage]}</Text>
                    </ItemChoice>
                ))
            }
            {
                choices?.map(({ url, title, icon }) => (
                    <ItemChoice
                        fontSize={['15px', '15px', '15px', '16px','17px','18px', '20px']}
                        background='#169fe6'
                        color='#fff'
                        url={url}
                    >
                        <i class={icon}></i>
                        <Text>{title[lenguage]}</Text>
                    </ItemChoice>
                ))
            }
        </Grid>
    )
}

export default GridChoices