import React, { useContext, useRef, useState } from 'react';
import { 
    Button, 
    FormControl, 
    Input, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Text, 
    Textarea 
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ServerContext } from '../../management/ServerProvider';
const emailReg = /^\S+@\S+\.\S+$/

const EmailChoice = ({ isOpen, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorSendForm, setErrorSendForm] = useState(false);
    const [load, setLoad] = useState(false)
    const { serverConnection, selectLenguage: lenguage } = useContext(ServerContext);
    const buttonForm = useRef()
    
    const handleCloseModal = () => {
        buttonForm.current.click()
    }

    const onSubmit = async data => {
        setLoad(true)
        const res = await serverConnection.sendEmailData({ 
            ...data, 
            email: serverConnection.user.email 
        })
        setLoad(false)

        if(res.ok){
            onClose()
        }

        setErrorSendForm(true)
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            size='xl'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Escríbenos</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <Input 
                                placeholder='Nombre completo' 
                                {...register("nameForm", { 
                                    required: true,
                                    maxLength: 50,
                                    minLength: 5
                                })}
                            />
                            { errors.nameForm && <Text color='red'>Name invalid</Text> }
                        </FormControl>
                        <FormControl mt={4}>
                            <Input 
                                type='email' 
                                placeholder='Dirección de correo electrónico' 
                                {...register("emailForm", { 
                                    required: true,
                                    pattern: emailReg
                                })}
                            />
                            { errors.emailForm && <Text color='red'>Email invalid</Text> }
                        </FormControl>
                        <FormControl mt={4}>
                            <Textarea 
                                resize='none' 
                                placeholder='Descripción' 
                                {...register("descriptionForm", { 
                                    required: true,
                                    maxLength: 150,
                                    minLength: 5
                                })}
                            />
                            { errors.descriptionForm && <Text color='red'>Description invalid</Text> }
                        </FormControl>
                        <Button display='none' ref={buttonForm} type='submit' />
                    </form>
                </ModalBody>
            <ModalFooter
                display='flex'
                flexDirection='column'
            >
                <Button isLoading={load} onClick={handleCloseModal}>Enviar</Button>
                { 
                    errorSendForm 
                        && 
                    <Text 
                        color='red'
                        textAlign='center'
                    >
                        Error sending the form, please try again.
                    </Text> 
                }
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EmailChoice