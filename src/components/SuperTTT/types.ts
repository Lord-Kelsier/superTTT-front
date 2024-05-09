type PlayerData = {
  id: number;
  game: number;
  symbol: number;
  user: number;
};
type BoardData = {
  board: Array<Array<number>>;
  canMoveAnywhere: boolean;
  ended: boolean;
  gameType: number;
  id: number;
  lobby: number;
  nextBoardIndex: number;
  players: Array<PlayerData>;
  turn: number;
  winner: number;
};

export type SuperTTTLoaderData = {
  gameData: BoardData;
  userPlayer: PlayerData;
};
