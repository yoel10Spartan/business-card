import React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';

const ItemChoice = ({ children, background, color, fontSize, modal, element: Element, url, location }) => {
    const modalSettings = useDisclosure();

    return (
        <Flex
            onClick={() => Boolean(Element) && modal ? modalSettings.onOpen() : ''}
            flexDirection='column'
            height='100%'
            w='100%'
            minH='150px'
            justifyContent='center'
            alignItems='center'
            borderRadius='5px'
            fontSize={fontSize}
            background={background}
            color={color}
            userSelect='none'
            cursor='pointer'
            transition='0.5s ease transform'
            _hover={{
                transform: 'scale(0.92)'
            }}
            as={Boolean(url) ? 'a' : ''}
            href={Boolean(url) ? url : ''}
            target={Boolean(url) ? '_blank' : ''}
        >
            { Boolean(Element) && <Element { ...{...modalSettings, location} } /> }
            { children }
        </Flex>
    )
}

export default ItemChoice
