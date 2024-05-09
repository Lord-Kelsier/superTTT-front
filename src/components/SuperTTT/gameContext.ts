import { createContext } from 'react';
import { SuperTTTLoaderData } from './types';

const defaultValue: SuperTTTLoaderData = {
  gameData: {
    id: 0,
    board: [[]],
    canMoveAnywhere: false,
    ended: true,
    gameType: 0,
    lobby: 0,
    nextBoardIndex: 0,
    players: [],
    turn: 0,
    winner: 0,
  },
  userPlayer: {
    id: 0,
    game: 0,
    symbol: 1,
    user: 0,
  },
};

export default createContext(defaultValue);
