import { Flex, Button } from '@chakra-ui/react';
type ButtonsSectionProps = {
  isUserInside: boolean;
  isUserOwner: boolean;
};
function LobbyDetailButtons({
  isUserInside,
  isUserOwner,
}: ButtonsSectionProps) {
  const isOwnerBtns = [
    <Button key={0} bg="blue.900">
      Iniciar Partida
    </Button>,
    <Button key={1} bg="blue.900">
      Eliminar Lobby
    </Button>,
  ];
  const isInsideBtns = [
    <Button key={0} bg="blue.900">
      Salir Lobby
    </Button>,
  ];
  const isOutsideBtns = [
    <Button key={0} bg="blue.900">
      Entrar al lobby
    </Button>,
    <Button key={1} bg="blue.900">
      Volver al lista de salas
    </Button>,
  ];
  return (
    <Flex mt="10px" gap="5px" flexWrap="wrap">
      {isUserOwner && isOwnerBtns}
      {isUserInside ? isInsideBtns : isOutsideBtns}
    </Flex>
  );
}

export default LobbyDetailButtons;
