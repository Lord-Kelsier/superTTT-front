import {
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Input,
  Text,
  Select,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GameType } from '../../../shared/Enums/Games';
import { useFetchPost } from '../../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../../shared/consts';
function SidePanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lobbyName, setLobbyName] = useState('');
  const [gameId, setGameId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [responseUserDisp, setResponseUserDisp] = useState('');

  const submitLobby = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isLoading) return;
    const url = `${superTTTApiBaseUrl}/api/v1/lobby/`;
    const body = {
      gameType: gameId,
      title: lobbyName,
    };
    const token = localStorage.getItem('accessToken');
    setIsLoading(true);
    const [data, statusCode] = await useFetchPost(url, body, token);
    setIsLoading(false);
    if (statusCode === 201) {
      setResponseUserDisp('Lobby creado exitosamente!!');
      // redirect
    } else if ('detail' in Object.keys(data)) {
      setResponseUserDisp(data.detail);
    } else {
      setResponseUserDisp('Un error ha ocurrido. Intentalo más tarde');
      console.log(data);
    }
  };
  return (
    <HStack justifyContent="center" minH="100px">
      <Button w="80%" onClick={onOpen}>
        {' '}
        + Crear Lobby
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Lobby</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="10px">Nombre de la sala</Text>
            <Input
              type="text"
              value={lobbyName}
              onChange={(e) => setLobbyName(e.target.value)}
            />
            <Text my="10px">Selecciona el juego</Text>
            <Select
              placeholder="Selecciona una opción"
              value={gameId}
              onChange={(e) => setGameId(+e.target.value)}
            >
              {Object.entries(GameType).map(([gameName, gameType], index) => (
                <option key={index} value={gameType}>
                  {gameName}
                </option>
              ))}
            </Select>
          </ModalBody>
          {responseUserDisp && <Text px="30px">{responseUserDisp}</Text>}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button variant="ghost" onClick={submitLobby}>
                Crear Lobby
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}

export default SidePanel;
