import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoute from './routes/AppRoute';
import { ServerProvider } from './management/ServerProvider';

const BusinessCard = () => {
    return (
        <ServerProvider>
            <ChakraProvider>
                <AppRoute />
            </ChakraProvider>
        </ServerProvider>
    )
}

export default BusinessCard