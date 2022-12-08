import React, { useContext, useEffect, useState } from 'react'
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import NotFound from './NotFound'
import { BsFillShareFill } from 'react-icons/bs'
import { QRCodeSVG } from 'qrcode.react'
import { ServerContext } from '../management/ServerProvider'
import getMessage from '../utils/getMessage'

const CardPage = ({ main }) => {

    const { email } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [person, setPerson] = useState({
        id: 0, 
        name: "", 
        image: "", 
        title: { 
            english: "", 
            spanish: "" 
        }, 
        phrase: { 
            english: "", 
            spanish: "" 
        }, 
        email: "", 
        location: 1, 
        phone: "" 
    });

    const { serverConnection, selectLenguage: lenguage } = useContext(ServerContext);

    const manageData = async () => {
        await serverConnection.getData()
        await serverConnection.getLocations()
        const dataFilter = main ? { main } : { email }
        const item = serverConnection.filterData(dataFilter)
        setPerson(item[0])
    }

    useEffect(() => {
        manageData()
    }, [])

    const showItems = (
        <>
            <Card { ...person } />
            <Button 
                leftIcon={<BsFillShareFill />} 
                colorScheme='teal' 
                variant='solid'
                position='fixed'
                bottom={[4, 6 ,8 , 10]}
                left={[11, 14,  17, 20]}
                onClick={onOpen}
            >
                {getMessage(lenguage, 'share').toUpperCase()}
            </Button>
        </>
    )

    return (
        <Flex
            maxW='100vw'
            justifyContent='center'
            alignItems='center'
            background='#E5E8E8'
        >
            {
                person 
                    ? showItems
                    : <NotFound user={email} />
            }
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalHeader>{getMessage(lenguage, 'share').toUpperCase()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display='flex'
                        justifyContent='center'
                    >
                        <QRCodeSVG value={`${process.env.REACT_APP_URL}/${email}`} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>{getMessage(lenguage, 'close')}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default CardPage