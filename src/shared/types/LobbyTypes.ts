export type LobbyType = {
  game: any;
  gameType: number;
  id: number;
  owner: string;
  players: Array<any>;
  started: boolean;
  title: string;
};

export type PlayersLobbyInfo = {
  id: number;
  username: string;
  email: string;
};

export type LobbyInfo = {
  title: string;
  id: number;
  gameType: number;
  players: PlayersLobbyInfo[];
  started: boolean;
  owner: string;
};

export type LobbyProps = {
  lobbyInfo: LobbyInfo;
};
