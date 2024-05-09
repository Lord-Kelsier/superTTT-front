import { Box, Button, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import { useContext } from 'react';
import gameContext from './gameContext';
import { superTTTApiBaseUrl } from '../../shared/consts';
import { useFetchPost } from '../../shared/services/useFetch';
import { useNavigate } from 'react-router-dom';

type CellButtonProps = {
  cellIndex: number;
  boardIndex: number;
};
type CellProps = {
  cellIndex: number;
  height: string;
  widthDist: string;
  boardIndex: number;
};

function CellButton({ cellIndex, boardIndex }: CellButtonProps) {
  const loaderData = useContext(gameContext);
  const navigate = useNavigate();
  const [owner, setOwner] = useState(
    loaderData.gameData.board[boardIndex][cellIndex]
  );
  const [isLoading, setIsLoading] = useState(false);
  const playerSymbol = loaderData.userPlayer.symbol;
  let icon: JSX.Element | null = null;

  if (owner === 2) {
    icon = <Icon w="40px" h="40px" color="blue.600" as={RxCross1} />;
  } else if (owner === 1) {
    icon = <Icon w="40px" h="40px" color="blue.600" as={FaRegCircle} />;
  }
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    if (owner !== 0) {
      // display this as warning
      console.log('Esta casilla ya ha sido jugada');
      return;
    }
    if (loaderData.gameData.ended) {
      // displays this as warning
      console.log('El juego ya terminó');
      return;
    }
    if (loaderData.gameData.turn !== playerSymbol) {
      // displays this as warning
      console.log('No es tu turno');
      return;
    }
    if (
      !loaderData.gameData.canMoveAnywhere &&
      boardIndex !== loaderData.gameData.nextBoardIndex
    ) {
      // display this as warning
      console.log('No puedes jugar en esta casilla');
      return;
    }
    const url = `${superTTTApiBaseUrl}/api/v1/game/${loaderData.gameData.id}/make_move/`;
    const body = {
      inner_board_id: cellIndex,
      outer_board_id: boardIndex,
    };
    const token = localStorage.getItem('accessToken');
    setIsLoading(true);
    setOwner(playerSymbol); // optimistic
    const [response, statusCode] = await useFetchPost(
      url,
      body,
      token,
      'PATCH'
    );
    setIsLoading(false);
    if (statusCode === 200) {
      navigate(`/superTTT/${loaderData.gameData.id}`);
      return;
    }
    setOwner(0);
  };
  return (
    <Button
      w="40px"
      h="40px"
      _hover={{
        bg: 'blue.900',
      }}
      p="0"
      m="0"
      alignItems="flex-start"
      justifyContent="left"
      onClick={handleClick}
    >
      {icon}
    </Button>
  );
}
function Cell({ boardIndex, cellIndex, height, widthDist }: CellProps) {
  const borderColor = 'orange.900';
  return (
    <Box p="1" borderColor={borderColor} h={height} borderWidth={widthDist}>
      <CellButton boardIndex={boardIndex} cellIndex={cellIndex} />
    </Box>
  );
}

export default Cell;
