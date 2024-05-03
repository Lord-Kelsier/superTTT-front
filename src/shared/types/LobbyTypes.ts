export type LobbyType = {
  game: any;
  gameType: number;
  id: number;
  owner: string;
  players: Array<any>;
  started: boolean;
  title: string;
};

export type LobbyProps = {
  title: string;
};
