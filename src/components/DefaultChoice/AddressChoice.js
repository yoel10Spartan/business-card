import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Markers from './Markers';
import getLocation from '../../utils/getLocation';

const AddressChoice = ({ isOpen, onClose, location }) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            size='xl'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Dirección</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <MapContainer center={getLocation(location)} zoom={50}>
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Markers location={getLocation(location)} />
                    </MapContainer>
                </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Aceptar</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddressChoice